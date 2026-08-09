const fs = require('fs');
const { classifyBug } = require('../services/llmService');

const DB_FILE = './bugs.json';

function readBugs() {
  return JSON.parse(fs.readFileSync(DB_FILE));
}

function writeBugs(bugs) {
  fs.writeFileSync(DB_FILE, JSON.stringify(bugs, null, 2));
}

exports.createBug = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const aiResult = await classifyBug(title, description);

    const bug = {
      id: Date.now().toString(),
      title,
      description,
      severity: aiResult.severity,
      category: aiResult.category,
      reasoning: aiResult.reasoning,
      status: 'Open',
      createdAt: new Date()
    };

    const bugs = readBugs();
    bugs.unshift(bug);
    writeBugs(bugs);

    res.status(201).json(bug);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBugs = async (req, res) => {
  try {
    const bugs = readBugs();
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
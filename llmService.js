const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function classifyBug(title, description) {
  const prompt = `You are a bug triage assistant. Analyze this bug report and respond ONLY with valid JSON (no extra text, no markdown formatting):

Title: ${title}
Description: ${description}

Return JSON in this exact format:
{
  "severity": "Critical" or "High" or "Medium" or "Low",
  "category": "UI" or "Backend" or "Database" or "Security" or "Performance",
  "reasoning": "one sentence explanation of why you chose this severity and category"
}`;

  const response = await groq.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'llama-3.3-70b-versatile',
  });

  const text = response.choices[0].message.content;
  const cleaned = text.replace(/```json|```/g, '').trim();
  return JSON.parse(cleaned);
}

module.exports = { classifyBug };
# 🐛 BugTriage AI

An AI-powered bug triage system that automatically classifies bug reports using LLM-based analysis.

## 🔍 Overview

When a developer submits a bug report, this system uses an LLM (Groq's Llama 3.3 model) to automatically:
- Determine the **severity** (Critical / High / Medium / Low)
- Classify the **category** (UI / Backend / Database / Security / Performance)
- Provide **reasoning** for the classification

This solves a real problem software teams face — manual bug triaging wastes hours every week.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **AI/LLM:** Groq API (Llama 3.3 70B model)
- **Storage:** JSON-based file storage
- **Testing:** cURL / Postman

## ⚙️ How It Works

1. A bug report (title + description) is submitted via a POST request
2. The backend sends the report to the LLM with a structured prompt
3. The LLM returns a JSON response with severity, category, and reasoning
4. The classified bug is saved and returned to the user

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bugs` | Submit a new bug report (AI classifies it automatically) |
| GET | `/api/bugs` | Retrieve all bug reports |

## 📦 Setup Instructions

1. Clone the repository
2. Navigate to the project folder and run:

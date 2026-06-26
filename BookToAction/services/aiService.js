// Import the Anthropic SDK
import Anthropic from "@anthropic-ai/sdk";


// Import dotenv directly — needed because of ES Module timing
import * as dotenv from "dotenv";
dotenv.config();
console.log("API Key loaded:", process.env.ANTHROPIC_API_KEY);


// Create the Anthropic client
// It automatically reads ANTHROPIC_API_KEY from process.env
const client = new Anthropic();

// Generate AI insights for a book
// Takes title, author, and notes as parameters
// Returns an object with summary and actionPlan
const generateInsights = async (title, author, notes) => {

  // Build the prompt — tell Claude exactly what you want
  const prompt = `
    You are a book insights assistant.
    
    Book Title: ${title}
    Author: ${author}
    My Notes: ${notes}
    
    Please provide:
    1. A concise summary of this book's core ideas (2-3 paragraphs)
    2. A practical 30-day action plan based on this book
    
    Format your response exactly like this:
    SUMMARY:
    [your summary here]
    
    ACTION_PLAN:
    [your 30 day action plan here]
  `;

  // Call the Claude API
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1200,
    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

// Extract the text from the response
const text = response.content[0].text;

// Parse the response into summary and action plan
// Split on ACTION_PLAN: to separate the two sections
const summaryMatch = text.split("ACTION_PLAN:")[0].replace("SUMMARY:", "").trim();
const actionPlanMatch = text.split("ACTION_PLAN:")[1]?.trim() || "";

// Return as an object with two separate fields
return {
  summary: summaryMatch,
  actionPlan: actionPlanMatch
}}

export { generateInsights };
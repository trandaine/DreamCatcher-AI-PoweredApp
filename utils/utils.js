export function checkEnvironment() {
  if (!process.env.AI_URL) {
    throw new Error("Missing AI_URL. This tells us which AI provider you're using.");
  }

  if (!process.env.OPENAI_MODEL) {
    throw new Error("Missing OPENAI_MODEL. The AI request needs a model name.");
  }

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY. Your API key is not being picked up.");
  }

  console.log("AI provider URL:", process.env.AI_URL);
  console.log("AI model:", process.env.OPENAI_MODEL);
}
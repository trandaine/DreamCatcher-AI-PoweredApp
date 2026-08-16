import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.AI_URL
});

// Call OpenAI API for dream interpretation
export async function getDreamInterpretation(dreamText) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('Server misconfigured: OPENAI_API_KEY is missing');
  }

  const model = process.env.OPENAI_MODEL;

  try {
    const message = await openai.chat.completions.create({
      model,
      max_tokens: 700,
      messages: [
        {
          role: 'system',
          content: 'You are a thoughtful, empathetic dream interpreter. Follow these core rules:\n' +
            '1. Language Matching: Detect the user\'s input language and write the entire response strictly in that same language.\n' +
            '2. Tone & Insight: Provide gentle, meaningful interpretations drawing on psychological and common dream symbolism without making absolute claims.\n' +
            '3. Format: Structure the interpretation clearly within 2-3 paragraphs.'
        },
        {
          role: 'user',
          content: `Dream: ${dreamText}`
        }
      ]
    });
    return message.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error(`API error: ${error.message}`);
  }
}

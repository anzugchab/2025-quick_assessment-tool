import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { topic, questionCount } = req.body;
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Erstelle ein Assessment zum Thema ${topic} mit ${questionCount} Fragen.`,
        max_tokens: 150
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json({ assessment: data });
  } catch (error) {
    console.error("Error in API route:", error);
    res.status(500).json({ error: error.message });
  }
}

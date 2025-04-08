// backend/parseResume.ts
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function parseResume(resumeText: string) {
  const prompt = `
  Please extract and structure the following resume text into JSON.
  Use these keys if applicable: "Education", "Experience", "Skills", and "Certifications".
  Only output valid JSON. Resume text: ${resumeText}
  `;
  
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are an expert resume parser. Return only valid JSON structured according to the provided keys.",
      },
      { role: "user", content: prompt },
    ],
    temperature: 0.2,
  });

  const message = completion.data.choices[0].message?.content;
  let parsed;
  try {
    parsed = JSON.parse(message!);
  } catch (err) {
    parsed = { error: "Failed to parse JSON from ChatGPT response", raw: message };
  }
  return parsed;
}

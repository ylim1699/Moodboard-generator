import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function geminiAI(userInput) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `You are a font recommending expert for a moodboard generator. 
            Only return 3 font names separated by commas.
            Which 3 fonts would be best for this moodboard category: ${userInput}`
          }
        ]
      }
    ]
  });
  return response.text;
}
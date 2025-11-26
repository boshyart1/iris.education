import { GoogleGenAI } from "@google/genai";

const AI_ADVISOR_INSTRUCTION = `
You are "Iris AI", a friendly and helpful educational consultant assistant for a company called "Iris".
Your goal is to help Sudanese students who want to study in Egypt.

Company Details (Iris):
- Services: Document extraction, transport, notarization (authentication), university application, and admission guarantee.
- Application Season: December 1st to January 30th.
- Brand Tone: Friendly, reassuring, professional, student-centric.

Your Guidelines:
- Answer questions in Arabic (Sudanese dialect or standard Arabic).
- Be concise and encouraging.
- If asked about fees, ask them to contact the WhatsApp number for the latest packages.
- If asked about specific university requirements that vary wildly, give general advice and suggest contacting the team.
- Focus on the ease of the process with Iris.
`;

export const getAIResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "عذراً، خدمة المساعد الذكي غير متوفرة حالياً. يرجى المحاولة لاحقاً.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: AI_ADVISOR_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "لم أتمكن من فهم السؤال، هل يمكنك صياغته بشكل آخر؟";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "واجهت مشكلة بسيطة في الاتصال. يرجى المحاولة مرة أخرى.";
  }
};
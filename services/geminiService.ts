
import { GoogleGenAI } from "@google/genai";

// Safe check for process.env in browser to avoid ReferenceError
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process?.env?.API_KEY) || '';
  } catch {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const getRiskInsights = async (userInput: string) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "API Key configuration missing. Please ensure environment variables are set.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are the Lead Engineering Consultant AI for 'Risk Solutions Dubai', founded by Dr. Seoungwoo Kim (PhD, Civil & Environmental Engineering).
        Your persona is highly technical, authoritative, and scientifically rigorous. 
        Focus on:
        1. Reliability-Based Design (ISO 2394).
        2. Probabilistic Modeling & Stochastic Analysis.
        3. Climate Resilience & Impact Quantification.
        Respond with professional engineering precision. Mention the philosophy of Dr. Kim when relevant.`,
        temperature: 0.4,
      },
    });

    return response.text || "No analysis available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Protocol error. Stochastic analysis unavailable. Please contact the DIFC headquarters for manual verification.";
  }
};

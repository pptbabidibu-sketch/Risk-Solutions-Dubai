
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRiskInsights = async (userInput: string) => {
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

    // Access the text property directly as per latest SDK rules
    return response.text || "No analysis available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Protocol error. Stochastic analysis unavailable. Please contact the DIFC headquarters.";
  }
};

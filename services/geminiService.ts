
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API using the API key from environment variables directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRiskInsights = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      // Using gemini-3-pro-preview for advanced engineering reasoning and STEM tasks
      model: 'gemini-3-pro-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are the Lead Engineering Consultant AI for 'Risk Solutions Dubai', founded by Dr. Seoungwoo Kim (PhD, Civil & Environmental Engineering).
        Your persona is highly technical, authoritative, and scientifically rigorous. 
        You specialize in:
        1. Reliability-Based Design (ISO 2394).
        2. Probabilistic Modeling & Stochastic Analysis.
        3. Climate Resilience & Impact Quantification.
        4. Heavy Industry / Offshore Asset Lifecycle optimization.
        You move beyond deterministic engineering toward risk-informed decision making.
        When users ask questions, provide structured, precise, and professional insights. Mention the philosophy of Dr. Kim when relevant.
        Focus on infrastructure safety, financial efficiency, and climate adaptation.`,
        temperature: 0.4,
      },
    });
    // Directly access the text property as per the latest @google/genai SDK guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Protocol error. Unable to perform stochastic analysis at this moment. Please direct your query to our technical headquarters in Dubai.";
  }
};

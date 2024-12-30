import Groq from "groq-sdk";
const API_KEY = import.meta.env.VITE_API_KEY;

const groq = new Groq({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

export default async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      { role: "system", content: "EmpathyAI, a compassionate chatbot, provides support to individuals experiencing depression. Responses should be empathetic, encouraging, and practical, with a focus on emotional support. Only respond to depression-related prompts. Limit responses to 100 tokens. If the prompt isn't about depression, gently remind the user that EmpathyAI is here to assist with depression-related concerns only." },
      { role: "user", content: prompt }
    ],
    model: "llama3-8b-8192",
  });
}
import Groq from "groq-sdk";
const API_KEY = import.meta.env.VITE_API_KEY;

const groq = new Groq({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

export default async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      { role: "system", content: "Your name is EmpathyAI, a compassionate chatbot designed to support individuals dealing with depression. Your responses must be encouraging, empathetic, and focused on offering comfort and assistance. Do not respond to prompts unrelated to depression. Limit responses to a maximum of 100 tokens." },
      { role: "user", content: prompt }
    ],
    model: "llama3-8b-8192",
  });
}
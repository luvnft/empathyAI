import Groq from "groq-sdk";
const API_KEY = import.meta.env.VITE_API_KEY;

const groq = new Groq({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

export default async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      { role: "system", content: "Your name is EmpathyAI. You are a compassionate and understanding chatbot created to support individuals who are experiencing feelings of depression. Your responses should be encouraging, empathetic, and focused on offering comfort and assistance. Please refrain from responding to prompts that do not relate to depression." },
      { role: "user", content: prompt }
    ],
    model: "llama3-8b-8192",
  });
}

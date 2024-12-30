import { useState, useEffect } from 'react';
import Header from './Header';
import Chats from './Chats';
import Footer from './Footer';
import getGroqChatCompletion from '../services/groqChatCompletion';

export default function EmpathyAI() {
    const [chats, setChats] = useState([{type : 'assistant', content : `Hi there, I'm EmpathyAI. I'm here to listen and support you. Feel free to share whatever’s on your mind, and we’ll work through it together.`}]);
    const [prompt, setPrompt] = useState("");

    useEffect(() => {
        const fetchAIResponse = async () => {
            if (prompt.trim() !== "") {
                setChats(prevChats => [...prevChats, { type: 'user', content: prompt }]);
    
                try {
                    const aiResponse = await getGroqChatCompletion(prompt);
                    console.log(aiResponse.choices[0].message);

                    if (aiResponse && aiResponse.choices && aiResponse.choices.length > 0) {
                        const aiMessage = aiResponse.choices[0];

                        if (aiMessage && aiMessage.message && aiMessage.message.content) {
                            setChats(prevChats => [ ...prevChats, { type: 'assistant', content: aiMessage.message.content } ]);
                        } else {
                            console.error("Unexpected format in AI message:", aiMessage);
                        }
                    } else {
                        console.error("AI response is not in the expected format", aiResponse);
                    }
                } catch (error) {
                    console.error("Error fetching AI response:", error);
                }
            }
        };
    
        fetchAIResponse();
    }, [prompt]);
    
    return (
        <>
            <Header />
            <Chats chats={chats} />
            <Footer setPrompt={setPrompt} />
        </>
    );
}
import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const StyledChats = styled.div`
    width: 100%;
    overflow-y: auto;
`;

const Container = styled.div`
    flex: 1;
    width: 90%;
    max-width: 900px;
    padding: 1rem;
    height: 80%;
    margin: 0 auto;
    position: relative; /* Ensure container positions its children correctly */
`;

const ChatWrapper = styled.div`
    margin-bottom: 1rem;
    text-align: ${({ type }) => (type === 'user' ? 'right' : 'left')};
`;

const MessageBubble = styled.pre`
    display: inline-block;
    padding: ${({ type }) => (type === 'user' ? '0.75rem 1.25rem' : '1.25rem 1.5rem')};
    border-radius: 20px;
    background-color: ${({ type }) => (type === 'user' ? '#007bff' : '#e9ecef')};
    color: ${({ type }) => (type === 'user' ? '#fff' : '#000')};
    max-width: 90%; 
    font-size: 1rem;
    word-wrap: break-word;
    overflow: auto;
    white-space: pre-wrap;
    box-sizing: border-box;
`;

export default function Chats({ chats = [] }) {
    return (
        <StyledChats>
            <Container>
                {chats.map((chat, index) => (
                    <ChatWrapper key={index} type={chat.type || 'user'}>
                        <MessageBubble type={chat.type || 'user'}>
                            {chat.type === 'user' ? (
                                chat.content || ''
                            ) : (
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString(chat.content || '')
                                            .start();
                                    }}
                                    options={{
                                        delay: 10,
                                    }}
                                />
                            )}
                        </MessageBubble>
                    </ChatWrapper>
                ))}
            </Container>
        </StyledChats>
    );
}

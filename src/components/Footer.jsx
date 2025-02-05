import { useState } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    margin-top : 1rem;
`;

const ChatBoxForm = styled.form`
    width: 90%;
    max-width: 900px;
    height: 65px;
    margin: 0 auto;
    padding : 0 1rem 0 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    border-radius: 30px;
    background-color: #f4f4f4;
`;

const Input = styled.input`
    width: 80%;
    height: 80%;
    background: transparent;
    border: none;
    font-size: 1rem;
    outline: none;
`;

const Btn = styled.button`
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: none;
    background-color: black;
    color: white;
`;

const Caption = styled.h1`
    text-align : center;
    margin : 1rem 0;
    font-size : 1rem;
    font-weight : 400;
    color : #7d7d7d;
`;

export default function Footer({ setPrompt }) {
    const [value, setValue] = useState("");

    const handleOnChange = (event) => {
        setValue(event.target.value);
    };

    const handleOnClick = () => {
        setPrompt(value);
        setValue("");
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        handleOnClick();
    };

    return (
        <StyledFooter>
            <ChatBoxForm onSubmit={handleOnSubmit}>
                <Input
                    placeholder="Message EmpathyAI"
                    value={value}
                    onChange={handleOnChange}
                    required
                />
                <Btn type="submit">
                    <i className="fa-solid fa-arrow-up"></i>
                </Btn>
            </ChatBoxForm>
            <Caption>
                Developed by <a href={"https://hahz.live"} target="_blank" rel="noopener noreferrer"> Wizard of Hahz </a>
            </Caption>
        </StyledFooter>
    );
}

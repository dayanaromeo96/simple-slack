import { React, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const ChatInput = ({ chatRef, channelFind, saveMessage, setMessage }) => {
    const [input, setInput] = useState('');
    const sendMessage = (e) => {
        e.preventDefault();
        if (!channelFind.id) {
            return false;
        }
        var f = new Date();
        var date = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + "-" + (f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds());
        let newItem = {
            "message": input,
            user: 'Dayana',
            timestamp: date,
            userImage: 'https://media.istockphoto.com/photos/profile-portrait-of-woman-picture-id1281998519?k=20&m=1281998519&s=612x612&w=0&h=ANLyyvV_5TtzAxTiCLbyU4n6L8l-1HxkN8bo07FvJpM='
        };
        setInput("");
        setMessage(newItem);
        saveMessage(newItem, channelFind);
        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        });
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} placeholder={`Message #${channelFind?.name}`} onChange={(e) => setInput(e.target.value)} />
                <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    );
};

export { ChatInput };
const ChatInputContainer = styled.div`
border-radius:20px;

>form{
    position:relative;
    display:flex;
    justify-content:center;
}

>form > input{
    position:fixed;
    bottom:30px;
    width:60%;
    border:1px solid gray;
    border-radius:3px;
    padding:20px;
    outline:none;

}
>form >button{
    display:none !important;
}
`;

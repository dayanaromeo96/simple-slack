import React from 'react';
import styled from 'styled-components';

const Message = ({message,timestamp,user,userImage}) => {
    return (
        <MessageContainer>
            <img src={userImage} alt="perfil"/>
            <MessageInfo>
                <h4>{user}
                <span>
                    <label className="d-block my-1">{timestamp}</label>
                    <p >{message}</p>
                 </span>
                 </h4>
            </MessageInfo>
        </MessageContainer>
    );
};

export  {Message};
const MessageContainer = styled.div`
display:flex;
align-items:center;
padding:20px;

>img{
    height:50px;
    border-radius: 8px;
}
`;

const MessageInfo = styled.div`
padding-left:10px;
>h4 > span{
    color:gray;
    font-weight:400;
    maregin-left:4px;font-size: 10px;
}
`;
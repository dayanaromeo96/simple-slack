import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { LoginContext } from '../../../shared/context/login.provider';
import { Message } from '../../components/message/Message';
import { ChatInput } from '../../components/chat-input/ChatInput';
const Chat = () => {
    const {
        idChannel,
        listChannel,
        saveMessage
    } = React.useContext(LoginContext);
    const chatRef = useRef(null);
    const [channelFind, setChannelFind] = React.useState([]);
    const [message, setMessage] = React.useState([]);

    useEffect(() => {
        const channelIndex = listChannel.findIndex(e => e.id === idChannel);
        setChannelFind(listChannel[channelIndex]);
    }, [idChannel,message]);

    useEffect(() => {
        chatRef?.current?.scrollIntoView();
    }, [idChannel]);
    return (
        <ChatContainer>
            {channelFind && (
                <>
                    <Header>
                        <HeaderLeft>
                            <h4><strong>#{channelFind?.name}</strong></h4>
                            <StarBorderOutlinedIcon />
                        </HeaderLeft>

                        <HeaderRight>
                            <p><InfoOutlinedIcon />Details</p>
                        </HeaderRight>
                    </Header>
                    <ChatMessage>
                        {channelFind?.message?.map((doc) => {
                            const { message, timestamp, user, userImage } = doc;
                            console.log(doc, "doc")
                            return (
                                <Message key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage} />
                            )
                        })}
                        <ChatBottom ref={chatRef} />
                    </ChatMessage>
                    <ChatInput chatRef={chatRef} setMessage={setMessage} saveMessage={saveMessage} listChannel={listChannel} channelFind={channelFind} setChannelFind={setChannelFind} />
                </>
            )}
        </ChatContainer>
    );
};

export { Chat };
const ChatBottom = styled.div`
padding-bottom:200px;
`;


const ChatMessage = styled.div`
  flex:0.7;
  flex-grow:1;
  overflow-y:scroll;
  margin-top:60px;
`;

const ChatContainer = styled.div`
  flex:0.7;
  flex-grow:1;
  overflow-y:scroll;
  margin-top:60px;
`;

const Header = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgray;
`;

const HeaderLeft = styled.div`
display:flex;
align--items:center;
>h4{
    display:flex;
    text-transform:lowercase;
    margin-right:10px;
}

>h4 .MuiSvgIcon-root{
    margin-left:10px;
    font-size:18px;
}

`;
const HeaderRight = styled.div`
>p{
    display:flex;
   aling-items:center;
   font-size:14px;
}

>p .MuiSvgIcon-root{
    margin-right:5px;
    font-size:16px;
}
`;
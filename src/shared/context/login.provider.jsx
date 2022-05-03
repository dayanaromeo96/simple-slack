import React from 'react';
import { useChannel } from './hooks/useChannel.hook';
import { useLogin } from './hooks/useLogin.hook';

const LoginContext = React.createContext();

function LoginProvider(props) {
  const { listChannel, saveItem, setListChannel } = useChannel();
  const { isAuthenticated,
    login,
    logout } = useLogin();
  const [idChannel, setIdChannel] = React.useState([]);
  const [channel, setChannel] = React.useState([]);

  function saveMessage(newMessage, channelFind) {
    let messageIndex;
    if (channelFind.message) {

      messageIndex = channelFind.message;
    } else {
      messageIndex = [];
    }
    messageIndex.push(newMessage);
    channelFind.message = messageIndex;
    const channelIndex = listChannel.findIndex(e => e.id === channelFind.id);
    listChannel[channelIndex] = channelFind;
    const stringifiedItem = JSON.stringify(listChannel);
    localStorage.setItem("channeList", stringifiedItem);
    setListChannel(listChannel);
  }
  return (
    <LoginContext.Provider value={{
      login,
      isAuthenticated,
      listChannel,
      saveItem,
      idChannel,
      setIdChannel,
      saveMessage,
      channel,
      setChannel,
      logout,
      setListChannel
    }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginProvider };
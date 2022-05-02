import React  from 'react';
import userData from "../context/user.json";

const LoginContext = React.createContext();

function LoginProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [listChannel, setListChannel] = React.useState([]);
    const [idChannel, setIdChannel] = React.useState([]);
    const [channel,setChannel]=React.useState([]);

    function saveItem(newItem){
      try {
        listChannel.push(newItem)
        const stringifiedItem = JSON.stringify(listChannel);
        console.log("aqui",listChannel);
        localStorage.setItem("channeList", stringifiedItem);
        setListChannel(listChannel);
      } catch(error) {
       // setError(error);
      }
    };

    function saveMessage(newMessage,channelFind){
      let messageIndex;
      if(channelFind.message){

         messageIndex=channelFind.message;
      }else{
        messageIndex=[];
      }
        messageIndex.push(newMessage);
        channelFind.message=messageIndex;
        const channelIndex = listChannel.findIndex(e => e.id === channelFind.id);
        listChannel[channelIndex]=channelFind;
        const stringifiedItem = JSON.stringify(listChannel);
        localStorage.setItem("channeList", stringifiedItem);
        setListChannel(listChannel);
    }

    function login (usuario,password) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const response = findUser(usuario,password);
            console.log("json",response);
            if (response) {
              localStorage.setItem('token', response.token);
              resolve(response);
              setIsAuthenticated(true);
            } else {
            }
          }, 2000)
        })
      }
      const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('channeList')
        setIsAuthenticated(false);
      }
      function findUser(usuario,password) {
        const response = (userData).find((user) => user.name === usuario && user.password === password)
        return response || undefined
      }

  return (
    <LoginContext.Provider value={{
    login,
    isAuthenticated,
    setIsAuthenticated,
    listChannel,
    setListChannel,
    saveItem,
    idChannel,
    setIdChannel,
    saveMessage,
    channel,
    setChannel,
    logout
    
    }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginProvider };
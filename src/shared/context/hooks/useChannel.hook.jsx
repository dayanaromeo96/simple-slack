import React from 'react';

function useChannel(newItem) {
    const [listChannel, setListChannel] = React.useState([]);
    

    function saveItem(newItem){
        try {
            if(newItem!=""){
                listChannel.push(newItem)
                const stringifiedItem = JSON.stringify(listChannel);
                localStorage.setItem("channeList", stringifiedItem);
                setListChannel(listChannel);
            }
        } catch(error) {
         // setError(error);
        }
      };
    return {
        listChannel,
        saveItem,
        setListChannel
       
    };
}

export { useChannel };
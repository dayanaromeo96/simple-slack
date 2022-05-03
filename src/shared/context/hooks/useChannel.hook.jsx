import React from 'react';

function useChannel(newItem) {
    const [listChannel, setListChannel] = React.useState([]);

    function saveItem(newItem) {
        if (newItem !== "") {
            listChannel.push(newItem)
            const stringifiedItem = JSON.stringify(listChannel);
            localStorage.setItem("channeList", stringifiedItem);
            setListChannel(listChannel);
        }
    };
    function removeChannel(){
        setListChannel([]);
    }
    return {
        listChannel,
        saveItem,
        setListChannel,
        removeChannel
    };
}

export { useChannel };
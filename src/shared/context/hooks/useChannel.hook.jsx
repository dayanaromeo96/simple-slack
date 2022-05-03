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
    return {
        listChannel,
        saveItem,
        setListChannel
    };
}

export { useChannel };
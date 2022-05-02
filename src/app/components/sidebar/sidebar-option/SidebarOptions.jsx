import React from 'react';
import { LoginContext } from '../../../../shared/context/login.provider';
import '../sidebar-option/SidebarOptions.css';

const SidebarOption = ({ Icon, title, addChannelOption,id }) => {
   const {
    saveItem,
    setIdChannel,
    setChannel
   } = React.useContext(LoginContext);

    function addChanel(){
         const channelName=prompt('Por favor ingrese un nuevo canal');
         var random=Math.random();
         if(channelName){
               let data={
                   name:channelName,
                   id:random
                };
             saveItem(data);
             setChannel(data);
         }
    };
    const selectChannel=()=>{
        if(id){
            setIdChannel(id)
         }
    }
    return (
        <div className="sidebar-option-container mt-3" onClick={addChannelOption ? addChanel : selectChannel}>
            {Icon &&  <Icon fontSize="small" className="ms-2" ></Icon>} 
            {Icon ? (
                <label className="ms-2 " style={{fontSize:14, fontWeight:600}}>{title}</label>
            ) : (
            <div className="sidebar-option-channel">
                <span className="ms-2">#</span><label className="ms-2">{title}</label>
            </div>)
            }
        </div>
    );
};

export { SidebarOption };
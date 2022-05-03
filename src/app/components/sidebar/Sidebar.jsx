import React from 'react';
import '../sidebar/Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { SidebarOption } from './sidebar-option/SidebarOptions';
import AddIcon from '@material-ui/icons/Add';
import { LoginContext } from '../../../shared/context/login.provider';

const Sidebar = () => {
    const {
        listChannel,
        channel,
        setListChannel
    } = React.useContext(LoginContext);

    React.useEffect(() => {
        const localStorageList = localStorage.getItem("channeList");
        let listChannel = "";
        if (localStorageList) {
            listChannel = JSON.parse(localStorageList);
            setListChannel(listChannel);
        }
    }, [channel]);

    return (
        <div className="sidebar-content">
            <div className="sidebar-header">
                <div className="sidebar-info">
                    <h2>Slack Chat</h2>
                    <h3><FiberManualRecordIcon className="sidebar-icon-dot" />
                        Dayana Rodríguez
                    </h3>
                </div>
                <CreateIcon className="sidebar-icon" />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
            {listChannel?.map(i => (
                <SidebarOption title={i.name} key={i.id} id={i.id} listChannel={listChannel}

                />
            ))}
        </div>
    );
};

export { Sidebar };
import React from 'react';
import '../header/Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import {FaSignOutAlt } from "react-icons/fa";
import { LoginContext } from '../../../shared/context/login.provider';

const Header = () => {
  const {
    logout
   } = React.useContext(LoginContext);
  return (
    <div className="header-container">
      <div className="header-left">
        <Avatar />
        <AccessTimeIcon className="header-icon" />
      </div>
      <div className="header-search">
        <SearchIcon />
        <input placeholder="Search"></input>
      </div>
      <div className="header-right">
        <FaSignOutAlt className="header-icon" onClick={logout} />
        </div>
    </div>
    );
};

export { Header };
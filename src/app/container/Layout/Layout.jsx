import React from 'react';
import {Header} from '../../components/header/Header'
import {Sidebar} from '../../components/sidebar/Sidebar';
import '../Layout/Layout.css';

const Layout = ({ children }) => {
    return (
        <div>
        <Header />
        <div className="app-body">
            <Sidebar/>
        {children}
        </div>
    </div>
    );
};

export  {Layout};
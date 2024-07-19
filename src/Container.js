import React from 'react';
import './Container.css';
import SidePanel from './sidePanel/SidePanel';
import ContentPanel from './contentPanel/ContentPanel';
import NPElement from './contentPanel/notificationPanelElement/NPElement';

function Container() {
    return (
        <div className="container">
            <SidePanel />
            <ContentPanel />
            <NPElement />
        </div>
    );
}

export default Container;

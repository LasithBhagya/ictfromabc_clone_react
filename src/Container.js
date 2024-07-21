import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Container.css';
import SidePanel from './sidePanel/SidePanel';
import ContentPanel from './contentPanel/ContentPanel';
import NPElement from './contentPanel/notificationPanelElement/NPElement';
import { useSelection } from './sidePanel/SelectionContext';

function Container() {
    const { ChangeSelection } = useSelection();
    const location = useLocation();
    useEffect(() => {
      const currentPath = location.pathname.replace('/', ''); // Get the current path without the leading '/'
      ChangeSelection(currentPath);
    }, [location.pathname, ChangeSelection]);

    return (
        <div className="container">
            <SidePanel />
            <ContentPanel />
            <NPElement />
        </div>
    );
}

export default Container;

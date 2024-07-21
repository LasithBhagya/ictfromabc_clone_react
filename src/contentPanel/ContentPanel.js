import React from 'react';
import search from './imgs/search.svg';
import bell from './imgs/bell.svg';
import profile from './imgs/profile.svg';
import './ContentPanel.css'
import { toggleNotificationPanel } from './notificationPanelElement/NPElement';
import RouteHandler from '../RouteHandler';

function ContentPanel() {
    const handleClickNB = () => {toggleNotificationPanel(document.querySelector('#toggle-notification-button'))}
    const handleClickPB = () => {console.log('PROFILE')}
    return(
        <div className='content-panel'>
            <div className="content-panel-header">
                <div className="search-box">
                    <img src={search} alt="" className="icon" />
                    <div className="text-box"><input type="search" id="search" placeholder="Type here to search" /></div>
                </div>
                <div className="status">
                    <button className="status-button" id='toggle-notification-button' onClick={handleClickNB}><img src={bell} alt="" /></button>
                    <button className="status-button" id='toggle-profile-button' onClick={handleClickPB}><img src={profile} alt="" /><p id='user-name-text'>Lasith</p></button>
                    
                </div>
            </div>
            <div className="content-panel-body" id="content-panel-body">
                <RouteHandler />
            </div>
        </div>
    );
}

export default ContentPanel;
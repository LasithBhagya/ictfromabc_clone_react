import './NotificationPanel.css'
import React from 'react';
import bin from '../imgs/bin.svg';
import tick from '../imgs/tick-double.svg';
import NPElement from './NPElement';

function handleClickOutside(event) {
    const backgroundClickCatcher = document.getElementById('np-background-click-catcher');
    if (event.target !== backgroundClickCatcher) {
        return;
    }
    backgroundClickCatcher.style.display = 'none';
}

export function toggleNotificationPanel(button) {
    if (!button || typeof button.getBoundingClientRect !== 'function') {
        console.error('Invalid button element:', button);
        return;
    }
    const notificationPanelBack = document.getElementById('np-background-click-catcher');
    const notificationPanel = document.getElementById('notification-panel');
    if (!notificationPanel) {
        console.error('Notification panel not found');
        return;
    }
    if (notificationPanel.style.display === 'none' || notificationPanel.style.display === '') {
        const rect = button.getBoundingClientRect();
        notificationPanel.style.left = `calc(${rect.left}px - 22em)`;
        notificationPanel.style.top = `calc(${rect.bottom}px + 1em)`;
        notificationPanelBack.style.display = 'flex';
        document.querySelector('#np-background-click-catcher').addEventListener('mousedown', handleClickOutside);
    } else {
        notificationPanelBack.style.display = 'none';
        document.querySelector('#np-background-click-catcher').removeEventListener('mousedown', handleClickOutside);
    }
}

function NotificationPanel() {
    return(
        <div id='np-background-click-catcher'>
            <div id='notification-panel' >
                <div className='np-header'>
                    <h1>Notifications</h1>
                    <div className='button-container'>
                        <button id='np-clear-all'><img src={bin}/></button>
                        <button id='np-read-all'><img src={tick}/></button>
                    </div>
                </div>
                <div className='np-body'>
                    <div id='notification-holder'>
                        <NPElement text='A new video was added to the React lesson' date='21-07-2024' />
                        <NPElement text='A new video was added to the HTML lesson' date='20-07-2024' />
                        <NPElement text='A new video was added to the CSS lesson' date='19-07-2024' />
                        <NPElement text='A new video was added to the Javascript lesson' date='18-07-2024' isReaded={true} />
                        <NPElement text='A new video was added to the Python lesson' date='17-07-2024' isReaded={true} />
                        <NPElement text='A new video was added to the C# lesson' date='16-07-2024' isReaded={true} />
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default NotificationPanel;
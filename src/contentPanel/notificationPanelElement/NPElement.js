import './NPElement.css';
import bin from '../imgs/bin.svg';
import tick from '../imgs/tick-double.svg';

export function toggleNotificationPanel(button) {
    if (!button || typeof button.getBoundingClientRect !== 'function') {
        console.error('Invalid button element:', button);
        return;
    }
    const notificationPanel = document.getElementById('notification-panel');
    if (!notificationPanel) {
        console.error('Notification panel not found');
        return;
    }
    if (notificationPanel.style.display === 'none' || notificationPanel.style.display === '') {
        const rect = button.getBoundingClientRect();
        notificationPanel.style.left = `calc(${rect.left}px - 22em)`;
        notificationPanel.style.top = `calc(${rect.bottom}px + 1em)`;
        notificationPanel.style.display = 'flex';
    } else {
        notificationPanel.style.display = 'none';
    }
}

function NPElement() {
    const notification = (
        <div className='notification'>
            <p id='notification-text'>A new video has beed added  to React lesson.</p>
            <p id='notification-date'>19-07-2024</p>
        </div>
    );
    const notificationReaded = (
        <div className='notification readed'>
            <p id='notification-text'>A new video has beed added  to HTML lesson.</p>
            <p id='notification-date'>19-07-2024</p>
        </div>
    );

    return(
        <div id='notification-panel'>
            <div className='np-header'>
                <h1>Notifications</h1>
                <div className='button-container'>
                    <button id='np-clear-all'><img src={bin}/></button>
                    <button id='np-read-all'><img src={tick}/></button>
                </div>
            </div>
            <div className='np-body'>
                <div id='notification-holder'>
                    {notification}
                    {notification}
                    {notification}
                    {notificationReaded}
                    {notificationReaded}
                    {notificationReaded}
                    {notificationReaded}
                </div>
            </div>
        </div>
    );
}

export default NPElement;
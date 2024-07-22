import './NPElement.css';

function NPElement({text = '', date = '', isReaded = false}) {
    let notification;
    if (!isReaded) {
        notification = (
            <div className='notification'>
                <p id='notification-text'>{text}</p>
                <p id='notification-date'>{date}</p>
            </div>
        );
    } else {
        notification = (
            <div className='notification' id='readed'>
                <p id='notification-text'>{text}</p>
                <p id='notification-date'>{date}</p>
            </div>
        );
    }

    return notification;
}

export default NPElement;
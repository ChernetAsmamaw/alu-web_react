import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
    return (
        <>
            <div className="menuItem">Your notifications</div>
            { displayDrawer ? <div className="Notifications">
                <button type="button"
                    style={{
                        position: 'absolute',
                        color: 'e3a3a3a',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        right: '1rem',
                        top: '1rem',
                        outline: 'none',
                    }}
                    area-label="Close" onClick={() => console.log('Close button has been clicked')}>
                    <img src={closeIcon} alt="close-icon" style={{width: '10px', height: '10px'}}/>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    { listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" type="no-new" />) : <></>}
                    { listNotifications.map((notification) => (
                        <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                    ))
                    };
                </ul>
            </div> : null }
        </>

    );
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};
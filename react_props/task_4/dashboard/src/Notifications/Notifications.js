import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
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
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
                </ul>
            </div> : null }
        </>

    );
}

Notifications.defaultProps = {
    displayDrawer: false
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};
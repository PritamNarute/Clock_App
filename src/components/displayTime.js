import React from 'react';
import './displayTime.css';

const DisplayTime = ({ hours, minutes, seconds }) => {
    return (
        <div className="display-timer-container">
            <div className="time">{hours}</div>
            <div className="time time-spacer">
                <img src={require('./colon.png')} alt="Colon Icon" />
            </div>
            <div className="time">{minutes}</div>
            <div className="time time-spacer">
                <img src={require('./colon.png')} alt="Colon Icon" />
            </div>
            <div className="time">{seconds}</div>
        </div>
    );
};

export default DisplayTime;

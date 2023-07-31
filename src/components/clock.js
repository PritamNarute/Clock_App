import React, { useState, useEffect } from 'react';
import DisplayTime from './displayTime';
import './clock.css';

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [format, setFormat] = useState(false);

    useEffect(() => {
        const getDate = () => {
            const date = new Date();
            setDate(date);
        };

        const interval = setInterval(() => {
            getDate();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [date]);

    const convert = (value) => {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    };

    const handleChangeFormat = () => {
        setFormat(!format);
    };

    const changeFormat = (value) => {
        if (value > 12) {
            value = value - 12;
        }
        return value;
    };

    let hours = convert(date.getHours());
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    if (format) {
        hours = changeFormat(hours);
    }
    const minutes = convert(date.getMinutes());
    const seconds = convert(date.getSeconds());

    return (
        <div className="container">
            <div className="heading">Clock</div>
            <div className="time-container">
                <DisplayTime
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                ></DisplayTime>
                <div className="state"> {format && amOrPm} </div>
            </div>
            <div className="change-format">
                <button
                    className="change-format-btn"
                    onClick={handleChangeFormat}
                >
                    12/24
                </button>
            </div>
        </div>
    );
};

export default Clock;

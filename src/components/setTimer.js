import React, { useState } from 'react';
import './setTimer.css';
import DisplayTime from './displayTime';
import SetTimerButtons from './setTimerButtons';
import Timer from './timer';
const SetTimer = () => {
    const [timer, setTimer] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const convert = (value) => {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    };

    console.log('setTimer Rendered');

    const onHoursIncrease = () => setHours(hours === 99 ? 0 : hours + 1);
    const onMinutesIncrease = () =>
        setMinutes(minutes === 59 ? 0 : minutes + 1);
    const onSecondsIncrease = () =>
        setSeconds(seconds === 59 ? 0 : seconds + 1);
    const onHoursDecrease = () => setHours(hours === 0 ? 99 : hours - 1);
    const onMinutesDecrease = () =>
        setMinutes(minutes === 0 ? 59 : minutes - 1);
    const onSecondsDecrease = () =>
        setSeconds(seconds === 0 ? 59 : seconds - 1);

    return (
        <div className="set-timer-container">
            <div className="heading">Timer</div>

            {!timer ? (
                <React.Fragment>
                    <div className="actions">
                        <div className="timer-label">Hours</div>
                        <div className="timer-label">Minutes</div>
                        <div className="timer-label">Seconds</div>
                    </div>
                    <SetTimerButtons
                        icon="up"
                        onHourClick={onHoursIncrease}
                        onMinuteClick={onMinutesIncrease}
                        onSecondClick={onSecondsIncrease}
                    ></SetTimerButtons>
                    <div className="set-timer-time">
                        <DisplayTime
                            hours={convert(hours)}
                            minutes={convert(minutes)}
                            seconds={convert(seconds)}
                        ></DisplayTime>
                    </div>
                    <SetTimerButtons
                        icon="down"
                        onHourClick={onHoursDecrease}
                        onMinuteClick={onMinutesDecrease}
                        onSecondClick={onSecondsDecrease}
                    ></SetTimerButtons>
                    <button
                        className="btn timer-start-btn"
                        onClick={() => setTimer(true)}
                    >
                        Start
                    </button>
                </React.Fragment>
            ) : (
                <Timer
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    setTimer={setTimer}
                ></Timer>
            )}
        </div>
    );
};

export default SetTimer;

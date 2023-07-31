import TimerRing from './timerRing';
import './timer.css';
import { useTimer } from './timerReducer';
import TimerDisplay from './timerDisplay';
import React, { useState } from 'react';
const audioFile = require('./Timer Beep9.mp3');

const Timer = ({ hours, minutes, seconds, setTimer }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [timerPaused, setTimerPaused] = useState(false);
    const [timerState, restartTimer] = useTimer(
        hours,
        minutes,
        seconds,
        timerPaused
    );

    const { timerHours, timerMinutes, timerSeconds, offset, timerComplete } =
        timerState;

    if (timerComplete) {
        if (!isPlaying) {
            setIsPlaying(true);
        }
    }

    const onRestartClicked = () => {
        setIsPlaying(false);
        restartTimer(hours, minutes, seconds);
    };

    const onPauseResumeClick = () => {
        setTimerPaused(!timerPaused);
    };

    const onDeleteTimerClick = () => {
        setTimer(false);
    };

    let color = 'purple';

    if (timerHours === 0) {
        if (timerMinutes === 0) {
            if (timerSeconds <= 10) {
                color = 'orangered';
            }
        }
    }

    return (
        <React.Fragment>
            <div className="timer-ring-container">
                <TimerRing offset={offset} strokeColor={color}>
                    <div className="display-timer-time">
                        {hours}h {minutes}m {seconds}s
                    </div>
                    <TimerDisplay
                        hours={timerHours}
                        minutes={timerMinutes}
                        seconds={timerSeconds}
                    ></TimerDisplay>
                </TimerRing>
            </div>
            <div className="timer-actions">
                {timerComplete ? (
                    <React.Fragment>
                        <button
                            className="btn"
                            onClick={onDeleteTimerClick}
                            style={{
                                background: 'gray',
                                border: '1px solid gray',
                            }}
                        >
                            Dismiss
                        </button>
                        <button
                            className="btn"
                            onClick={onRestartClicked}
                            style={{
                                background: 'purple',
                                border: '1px solid purple',
                            }}
                        >
                            Restart
                        </button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <button
                            className="btn"
                            onClick={onDeleteTimerClick}
                            style={{
                                background: 'gray',
                                border: '1px solid gray',
                            }}
                        >
                            Delete
                        </button>
                        <button
                            className="btn"
                            onClick={onPauseResumeClick}
                            style={{
                                background: `${
                                    timerPaused ? 'purple' : 'orangered'
                                }`,
                                border: `1px solid ${
                                    timerPaused ? 'purple' : 'orangered'
                                }`,
                            }}
                        >
                            {timerPaused ? 'Resume' : 'Pause'}
                        </button>
                    </React.Fragment>
                )}
            </div>
            {isPlaying && (
                <audio autoPlay volume={0.5} loop>
                    <source src={audioFile} type="audio/mpeg" />
                </audio>
            )}
        </React.Fragment>
    );
};

export default Timer;

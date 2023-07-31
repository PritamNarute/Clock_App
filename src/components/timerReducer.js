import { useState, useReducer, useEffect, useCallback } from 'react';

const timerReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE': {
            let minutes = state.timerMinutes;
            let seconds = state.timerSeconds;
            let hours = state.timerHours;
            if (seconds === 59) {
                seconds = 0;
                minutes = minutes + 1;
                if (minutes === 60) {
                    minutes = 0;
                    hours = hours + 1;
                }
            } else {
                seconds = seconds + 1;
            }

            return {
                ...state,
                timerHours: hours,
                timerMinutes: minutes,
                timerSeconds: seconds,
            };
        }

        case 'DECREASE': {
            let minutes = state.timerMinutes;
            let seconds = state.timerSeconds;
            let hours = state.timerHours;
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        return {
                            ...state,
                            timerComplete: true,
                        };
                    } else {
                        hours = hours - 1;
                        minutes = 59;
                        seconds = 59;
                    }
                } else {
                    minutes = minutes - 1;
                    seconds = 59;
                }
            } else {
                seconds = seconds - 1;
            }
            return {
                ...state,
                timerHours: hours,
                timerMinutes: minutes,
                timerSeconds: seconds,
                offset: state.offset + action.units,
            };
        }

        case 'SET-TIMER': {
            return {
                ...state,
                timerHours: action.hours,
                timerMinutes: action.minutes,
                timerSeconds: action.seconds,
                offset: 0,
                timerComplete: false,
            };
        }

        default: {
            return {
                state,
            };
        }
    }
};

export const useTimer = (hours, minutes, seconds, timerPaused) => {
    const [units, setUnits] = useState(0);

    const [timerState, dispatch] = useReducer(timerReducer, {
        timerHours: hours,
        timerMinutes: minutes,
        timerSeconds: seconds,
        offset: 0,
        timerComplete: false,
    });

    useEffect(() => {
        const hourSeconds = hours * 60 * 60;
        const minuteSeconds = minutes * 60;
        const totalSeconds = hourSeconds + minuteSeconds + seconds;
        setUnits(300 / totalSeconds);
    }, [hours, minutes, seconds]);

    const { timerHours, timerMinutes, timerSeconds, offset, timerComplete } =
        timerState;

    useEffect(() => {
        let interval;

        if (!timerPaused) {
            interval = setInterval(() => {
                dispatch({
                    type: timerComplete ? 'INCREASE' : 'DECREASE',
                    units: units,
                });
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [
        timerHours,
        timerMinutes,
        timerSeconds,
        timerComplete,
        offset,
        units,
        timerPaused,
    ]);

    const restartTimer = useCallback((hours, minutes, seconds) => {
        dispatch({
            type: 'SET-TIMER',
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        });
    }, []);

    return [timerState, restartTimer];
};

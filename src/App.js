import { useState } from 'react';
import './app.css';
import SetTimer from './components/setTimer';
import Clock from './components/clock';

const App = () => {
    const [mode, setMode] = useState(0);

    const onClockMode = () => {
        setMode(0);
    };

    const onTimerMode = () => {
        setMode(1);
    };

    return (
        <div className="clock-modes">
            {mode === 0 && <Clock></Clock>}

            {mode === 1 && <SetTimer></SetTimer>}

            <div className="clock-modes-change">
                <button
                    onClick={onClockMode}
                    className={`mode-btn ${mode === 0 ? 'selected' : ''}`}
                >
                    {' '}
                    Clock{' '}
                </button>
                <button
                    onClick={onTimerMode}
                    className={`mode-btn ${mode === 1 ? 'selected' : ''}`}
                >
                    {' '}
                    Timer{' '}
                </button>
            </div>
        </div>
    );
};

export default App;

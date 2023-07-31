import './timerRing.css';

const TimerRing = ({ offset, strokeColor, children }) => {
    return (
        <div className="timer">
            <div className="outer">
                <svg className="svgOne" viewBox="0 0 100 100">
                    <circle className="circleTwo" cx="50" cy="50" r="47.5" />
                </svg>
                <svg className="svgTwo" viewBox="0 0 100 100">
                    <circle
                        stroke={strokeColor}
                        className="circleOne"
                        cx="50"
                        cy="50"
                        r="47.5"
                        stroke-dashoffset={offset}
                    />
                </svg>

                <div className="inner">
                    <div className="inner-content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default TimerRing;

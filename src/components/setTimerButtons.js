const SetTimerButtons = ({
    onHourClick,
    onMinuteClick,
    onSecondClick,
    icon,
}) => {
    const handleMinuteClick = () => {
        onMinuteClick();
    };

    const handleSecondClick = () => {
        onSecondClick();
    };

    const handleHourClick = () => {
        onHourClick();
    };

    return (
        <div className="actions">
            <div className="icon" onClick={handleHourClick}>
                <i class={`fa-solid fa-angle-${icon}`}></i>
            </div>
            <div className="icon" onClick={handleMinuteClick}>
                <i class={`fa-solid fa-angle-${icon}`}></i>
            </div>
            <div className="icon" onClick={handleSecondClick}>
                <i class={`fa-solid fa-angle-${icon}`}></i>
            </div>
        </div>
    );
};

export default SetTimerButtons;

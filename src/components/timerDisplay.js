import DisplayTime from './displayTime';

const TimerDisplay = ({ hours, minutes, seconds }) => {
    const convert = (value) => {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    };
    return (
        <DisplayTime
            hours={convert(hours)}
            minutes={convert(minutes)}
            seconds={convert(seconds)}
        ></DisplayTime>
    );
};

export default TimerDisplay;

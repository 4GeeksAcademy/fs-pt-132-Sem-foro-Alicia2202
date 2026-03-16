import react, { useState } from "react";

const TrafficLight = () => {

    const [activeLight, setactiveLight] = useState ('');

    const handleClick = (light) => {
        setactiveLight(light)
    }

    return (
        <div className="d-flex flex-column align-items-center mt-5">

            <div className="trafficlight p-3 d-flex flex-column align-items-center">
                <div onClick={() => handleClick('light-red')}
                className={`light rounded-circle light-red ${activeLight === 'light-red' ? 'shadow-red' : 'opacity-50'} `}></div>
                <div onClick={() => handleClick('light-yellow')}
                className={`light rounded-circle light-yellow ${activeLight === 'light-yellow' ? 'shadow-yellow' : 'opacity-50'} `}></div>
                <div onClick={() => handleClick('light-green')}
                className={`light rounded-circle light-green ${activeLight === 'light-green' ? 'shadow-green' : 'opacity-50'} `}></div>
            </div>
        </div>
    )
};

export default TrafficLight;
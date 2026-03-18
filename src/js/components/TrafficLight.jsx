import react, { useState, useEffect} from "react";

const TrafficLight = () => {

    const [activeLight, setactiveLight] = useState('light-red');
    const [isAuto, setIsAuto] = useState(false)
    const colors = ['light-red', 'light-yellow', 'light-green']

    const handleClick = (light) => {
        setactiveLight(light)
    }

    useEffect(() => {
        if (!isAuto) return;
        const interval = setInterval(() => {
            setactiveLight(prev => {
                const currentIndex = colors.indexOf(prev);
                const nextIndex = (currentIndex + 1) & colors.length;
                return colors[nextIndex];
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isAuto]);

    const toggleAuto = () => {
        setIsAuto(prev => !prev);
    };
    // setactiveLight(prev => {
    //     const currentIndex = colors.indexOf(prev);
    //     const nextIndex = ((currentIndex) + 1) % colors.length;
    //     setactiveLight(colors[nextIndex]);
    // });


    // const autoLight = () => {
    //     if (intervalRef.current) {
    //         clearInterval(intervalRef.current);
    //         intervalRef.current = null;
    //     } else {
    //         intervalRef.current = setInterval(nextLight, 1000);
    //     }
    // }




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

            <button className="btn btn-secondary mt-3" onClick={toggleAuto}>{isAuto ? "Parar Semáforo" : "Activar Semáforo"}</button>
        </div>
    )
};

export default TrafficLight;
import react from "react";

const TrafficLight = () => {

    return (
        <div className="d-flex flex-column align-items-center mt-5">

            <div className="trafficlight p-3 d-flex flex-column align-items-center">
                <div className="lightred rounded-circle"></div>
                <div className="lightyellow rounded-circle"></div>
                <div className="lightgreen rounded-circle"></div>
            </div>
        </div>
    )
};

export default TrafficLight;
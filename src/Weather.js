import React from "react";

const Weather = (props) => {
    return (
        <div>
            {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
            {props.temp && <p>Temperature: {props.temp}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.desc && <p>Conditions:  {props.desc}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather; 
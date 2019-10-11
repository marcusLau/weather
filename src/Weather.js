import React from "react";

const Weather = (props) => {
    return (
        <div className="weather-info">
            {props.country && props.city && <p className="weather__key">Location: <span className="weather__value"> {props.city}, {props.country} </span> </p>}
            {props.temp && <p className="weather__key">Temperature: <span className="weather__value">{props.temp} </span></p>}
            {props.humidity && <p className="weather__key">Humidity: <span className="weather__value"> {props.humidity} </span></p>}
            {props.desc && <p className="weather__key">Conditions: <span className="weather__value"> {props.desc} </span></p>}
            {props.error && <p className="weather__error">{props.error}</p>}
        </div>
    )
}

export default Weather; 
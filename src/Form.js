import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="enter city "/>
            <input type="text" name="country" placeholder="enter country"/>
            <button>Get Weather</button>
        </form>
    )
}

export default Form;
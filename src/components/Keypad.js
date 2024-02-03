// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange(){
        console.log('Entering password...')
    }

    return (
        <div>
            <input name="password" type="password" placeholder="Enter password here..." onChange={handleChange}/>
        </div>
    )
}

export default Keypad;
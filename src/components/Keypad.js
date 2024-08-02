// Code Keypad Component Here
import React from "react";
// import EyesOnMe from "./EyesOnMe";

function Keypad (){
    function enterPassword(){
        console.log('Entering password...')
    }
    
    return (
        <div>
            <input type="password" onChange={enterPassword} />
            {/* <EyesOnMe /> */}
        </div>
    )
}

export default Keypad;
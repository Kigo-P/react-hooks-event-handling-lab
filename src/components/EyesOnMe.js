// Code EyesOnMe Component Here
import React from "react";


function EyesOnMe(){
    function focusPassword(){
        console.log('Good!')
    }
    function blurPassword(){
        console.log('Hey! Eyes on me!')
    }
    
    return(
        <button onFocus = {focusPassword} onBlur={blurPassword}>Eyes on me</button>
    )
}

export default EyesOnMe

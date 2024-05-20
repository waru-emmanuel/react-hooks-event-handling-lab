// Code Keypad Component Here
import React from 'react';

function Keypad (){
      const handleChange = (event) => {
        console.log('Entering password...', event.target.value); 
    };
    return (
        <div>
            <input type = "password" onChange={handleChange} />
        </div>
    );
}

export default Keypad;
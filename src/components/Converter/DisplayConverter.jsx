import React, {useEffect, useState} from 'react';
import {randomNumber} from "../../utils/random.js";

const DisplayConverter = ({values, setValues}) => {
    //Autre façon de faire avec le useEffect pour changer la font
    // const [fontSize, setFontSize] = useState();
    // useEffect(() => {
    //     setFontSize(randomNumber(14,25));
    // }, [values])

    const deleteConvert = (index) => {
        setValues(item => item.filter((value, i) => i !== index ))
    }

    return (
        <div>
            <h1>displayConverter</h1>
            {
                values.map((value, index) => (
                    <div key={index} style={{fontSize: `${randomNumber(14, 25)}px`}}>
                        Valeur en euro : {value.euro} <br/>
                        Valeur en bitcoin :{value.bitcoin}
                        <button onClick={() => deleteConvert(index)}>Effacer la conversion</button>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayConverter;
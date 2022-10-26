import React, {useState} from 'react';
import FormConverter from "../components/Converter/FormConverter.jsx";
import DisplayConverter from "../components/Converter/DisplayConverter.jsx";


const Converter = () => {
    const [values, setValues] = useState([]);

    return (
        <div>
            <FormConverter values={values} setValues={setValues}/>
            <DisplayConverter values={values} setValues={setValues}/>
        </div>
    );
};

export default Converter;
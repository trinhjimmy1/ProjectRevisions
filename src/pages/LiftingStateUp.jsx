import React, {useState} from 'react';
import FormStateUp from "../components/LiftingStateUp/FormStateUp.jsx";
import DisplayStateUp from "../components/LiftingStateUp/DisplayStateUp.jsx";

const LiftingStateUp = () => {
    const [names, setNames] = useState([]);
    return (
        <div>
            <FormStateUp setNames={setNames} names={names}/>
            <DisplayStateUp names={names}/>
        </div>
    );
};

export default LiftingStateUp;
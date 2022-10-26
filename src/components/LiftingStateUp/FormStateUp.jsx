import React, {useState} from 'react';

const FormStateUp = ({setNames, names}) => {
    const [inputName, setInputName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setNames([...names, inputName]);
        setInputName('');
    }

    return (
        <div>
            <h1>FormStateUp</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default FormStateUp;
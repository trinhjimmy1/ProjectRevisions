import React, {useState} from 'react';

const FormConverter = ({values, setValues}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const convertToBitCoin = (val) => {
        setValues([...values, {
            euro: val,
            bitcoin: (val*2)
        }]);
        setInputValue('');
    }

    return (
        <div>
            <h1>FormConverter</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setInputValue(e.target.value)} value={inputValue} type="text"/>
                <button onClick={() => convertToBitCoin(inputValue)} type="submit">Convertir en bitcoin</button>
            </form>

        </div>
    );
};

export default FormConverter;
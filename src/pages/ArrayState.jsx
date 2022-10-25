import React, { useState } from 'react'

function ArrayState() {

    const [rectangles, setRectangles] = useState([]);
    const [inputNumber, setInputNumber] = useState("");

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function randomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const rect = []
        for (let i = 0; i < inputNumber; i++) {
            rect.push({
                background: randomColor(),
                width: randomNumber(200, 200) + "px",
                height: randomNumber(100, 200) + "px"
            })
        }
        setRectangles(rect)
    }

    return (
        <div className='ArrayState'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label>Number of rectangle : </label>
                    <input type="text" onChange={e => setInputNumber(e.target.value)} value={inputNumber} />
                    <button type='submit' className='add'>Generate</button>
                </form>
                <hr />
                <div className='display'><span>Rectangles : </span>
                    {rectangles.map((rectangle, index) => (
                        <div key={index} style={rectangle}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArrayState;
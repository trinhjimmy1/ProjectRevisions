import React, {useEffect, useState} from 'react';
import {randomColor} from "../../pages/ArrayState.jsx";
import {handleClickColor} from "../../utils/random.js";

const Movie = ({film, index, addDeleteMovie, deleteMovie}) => {
    const [bgColor, setBgColor] = useState(randomColor());
    const [textColor, setTextColor] = useState(randomColor());

    useEffect(() => {
        return () => {
            addDeleteMovie();
        }
    }, [])

    const handleClick = () => {
        setBgColor(handleClickColor());
        setTextColor(handleClickColor());
    }

    return (
        <div className="movie" style={{backgroundColor: bgColor, color: textColor}}>
            <h1>Movie</h1>
            {film.name} <br/>
            {film.date} <br/>
            <button onClick={handleClick}>Change background color</button>
            <button onClick={() => deleteMovie(index)}>Supprimer</button>
        </div>
    );
};

export default Movie;
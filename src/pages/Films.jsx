import React, {useEffect, useState} from 'react';
import Movie from "../components/Movies/Movie.jsx";


const Films = () => {
    const [films, setFilms] = useState([
        {name: 'Chat', date: '1/10/10'},
    ]);
    const [inputName, setInputName] = useState("");
    const [inputDate, setInputDate] = useState("");
    const [nbDeleteMovies, setNbDeleteMovies] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        setFilms([...films, {
            name: inputName,
            date: inputDate
        }]);
        setInputName("");
        setInputDate("");
    }

    const deleteMovie = (index) => {
        const newState = [...films];
        newState.splice(index, 1);
        setFilms(newState);
    }

    const addDeleteMovie = () => {
        setNbDeleteMovies(prevState => prevState + 1);
    }

    return (
        <div>
           <h1>Films supprimé : {nbDeleteMovies}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={e => setInputName(e.target.value)}
                    value={inputName}
                    placeholder="Nom du film"
                />
                <input
                    type="date"
                    onChange={e => setInputDate(e.target.value)}
                    value={inputDate}
                    placeholder="Date du film"
                />
                <button>Ajouter un film</button>
            </form>
            {
                films.map((film, index) => (
                    <Movie
                        key={index}
                        film={film}
                        index={index}
                        deleteMovie={deleteMovie}
                        addDeleteMovie={addDeleteMovie}
                    />
                ))
            }
        </div>
    );
};

export default Films;
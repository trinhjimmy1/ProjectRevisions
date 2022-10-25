import React, {useState} from 'react';
import Animal from "../components/LifeCycles/Animal.jsx";

const LifeCycles = () => {
    const [animals, setAnimals] = useState([
        {name: 'Chat', quantity: 5},
        {name: 'Chien', quantity: 3},
        {name: 'Oiseau', quantity: 2},
        {name: 'Crocodile', quantity: 10},
    ]);

    const animalDelete = (index) => {
        const newState = [...animals];
        newState.splice(index, 1);
        setAnimals(newState);
    }

    const animalQuantityAdd = (index) => {
        const newState = [...animals];
        newState[index].quantity++
        setAnimals(newState);
    }

    const animalAdd = () => {
        setAnimals([...animals, {name: 'Castor', quantity: 2}]);
    }

    return (
        <div>
            <h1>LifeCyles</h1>
            <button onClick={animalAdd}>Add animal</button>
            {
                animals.map((animal,index) => (
                    <Animal
                        key={index}
                        name={animal.name}
                        quantity={animal.quantity}
                        index={index}
                        animalDelete={animalDelete}
                        animalQuantityAdd={animalQuantityAdd}
                    />
                ))
            }
        </div>
    );
};

export default LifeCycles;
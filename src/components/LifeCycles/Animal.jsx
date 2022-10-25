import React, {useEffect, useState} from 'react';
import "./Animal.css"

const Animal = ({name, quantity, index, animalDelete, animalQuantityAdd}) => {
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        console.log('composant initialisé');

        // composant détruit
        return () => {
            console.log('composant détruit')
        }
    }, []);

    // composant update
    useEffect(() => {
        console.log('composant update');
    });

    //Composant quand un state mis en dépendance est modifié
    useEffect(() => {
        console.log(name + 'valeur toogle modifié');
    }, [toggle, name]);

    //Composant détruit
    /*useEffect(() => {
        return () => {
            console.log('composant détruit');
        }
    }, []);*/

    return (
        <div className="animal">
            {name} <br/>
            {quantity} <br/>
            <button onClick={() => setToggle(!toggle)}>Edit</button>
            {
                /*toggle === true ?
                    <div>
                        <button>Delete</button>
                    </div>
                    :null*/
                toggle &&
                <div>
                    <button onClick={() => animalQuantityAdd(index)}>Add 1 Quantity</button> <br/>
                    <button onClick={() => animalDelete(index)}>Delete</button>
                </div>
            }
        </div>


    );
};

export default Animal;
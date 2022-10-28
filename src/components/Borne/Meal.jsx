import React, {useContext} from 'react';
import {BorneContext} from "../context/BorneContext.js";

const Meal = ({content}) => {
    const {shoppingCart, setShoppingCart} = useContext(BorneContext);

    const addProduct = () => {
        setShoppingCart([...shoppingCart, {
            title: content.title,
            amount: content.amount
        }]);
    };

    return (
        <div>
          <h1>Meal</h1>
            <div>
                <h1>{content.title}</h1>
                <p>Montant : {content.amount}  €</p>
                <button onClick={addProduct} type='submit'>+</button>
            </div>
        </div>
    );
};

export default Meal;
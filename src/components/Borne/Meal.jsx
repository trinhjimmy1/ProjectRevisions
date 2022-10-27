import React from 'react';

const Meal = ({index, contents, setContents, shoppingCart, setShoppingCart}) => {

    const addProduct = (shoppingCart) => {
        setShoppingCart([...shoppingCart, {
            title: contents.title,
            amount: contents.amount
        }]);
    };

    return (
        <div>
          <h1>Meal</h1>
            <div>
                <h1>{contents.title}</h1>
                <p>Montant : {contents.amount}  €</p>
                <button onClick={addProduct} type='submit'>+</button>
            </div>
        </div>
    );
};

export default Meal;
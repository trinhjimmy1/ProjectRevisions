import React from 'react';
import Meal from "./Meal.jsx";
//Avant
/*const Meals = ({contents, setContents, shoppingCart, setShoppingCart}) => {
    return (
        <div>
           <h1>Meals</h1>
            {
                contents.map((content, index) => (
                    <Meal
                        key={index}
                        index={index}
                        content={content}
                        setContents={setContents}
                        shoppingCart={shoppingCart}
                        setShoppingCart={setShoppingCart}
                    />
                ))
            }
        </div>
    );
};*/

const Meals = ({contents}) => {
    return (
        <div>
            <h1>Meals</h1>
            {
                contents.map((content, index) => (
                    <Meal
                        key={index}
                        content={content}
                    />
                ))
            }
        </div>
    );
};

export default Meals;
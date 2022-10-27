import React from 'react';
import Meal from "./Meal.jsx";

const Meals = ({contents, setContents, shoppingCart, setShoppingCart}) => {
    return (
        <div>
           <h1>Meals</h1>
            {
                contents.map((contents, index) => (
                    <Meal
                        key={index}
                        index={index}
                        contents={contents}
                        setContents={setContents}
                        shoppingCart={shoppingCart}
                        setShoppingCart={setShoppingCart}
                    />
                ))
            }
        </div>
    );
};

export default Meals;
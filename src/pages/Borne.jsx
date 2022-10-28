import React, {useEffect, useState} from 'react';
import Meals from "../components/Borne/Meals.jsx";
import Cart from "../components/Borne/Cart.jsx";
import {BorneContext} from "../components/context/BorneContext";

const Borne = () => {
    const [contents, setContents] = useState([
        {title: 'Titre1', amount: 10},
        {title: 'Titre2', amount: 10},
        {title: 'Titre3', amount: 10},
        {title: 'Titre4', amount: 10},
        {title: 'Titre5', amount: 10},
        {title: 'Titre6', amount: 10},
    ]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [isLoad , setIsLoad] = useState(false);

    useEffect(() => {
        if(shoppingCart.length) {
            setIsLoad(true);
        }
    }, [shoppingCart]);

    return (
        <div>
            <BorneContext.Provider
                value={{
                       contents,
                        setContents,
                        shoppingCart,
                        setShoppingCart
                }}>
                <h1>Borne</h1>
                <Meals contents={contents}/>
                {
                    isLoad &&
                    <Cart shoppingCart={shoppingCart}/>
                }
            </BorneContext.Provider>
        </div>
    );
};

export default Borne;
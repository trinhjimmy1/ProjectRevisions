import React, {useEffect, useState} from 'react';
import Meals from "../components/Borne/Meals.jsx";
import Cart from "../components/Borne/Cart.jsx";

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

    console.log(shoppingCart);
    useEffect(() => {
        if(shoppingCart.length) {
            setIsLoad(true);
        }
    }, [shoppingCart]);

    console.log(isLoad);

    return (
        <div>
           <h1>Borne</h1>
            <Meals contents={contents} setContents={setContents} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
            {
                isLoad &&
                <Cart shoppingCart={shoppingCart}/>
            }
        </div>
    );
};

export default Borne;
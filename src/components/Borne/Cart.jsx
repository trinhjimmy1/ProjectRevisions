import React, {useState} from 'react';

const Cart = ({shoppingCart}) => {
    const [totalAmount, setTotalAmount] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const sumTotal = (arr) => {
        if (shoppingCart.length) {
            setIsLoaded(true);
            const sum = arr.reduce((accumulator, object) => {
                return accumulator + object.amount;
            }, 0);
            setTotalAmount(sum);
        }
    }

    return (
        <div>
            <h1>Cart</h1>
            <button onClick={() => sumTotal(shoppingCart)} type='submit'>Panier</button>
            {
                isLoaded &&
                shoppingCart.map((cart, index) => (
                    <div key={index}>
                        <div>{`Nom des produits : ${cart.title}, prix des produits: ${cart.amount}`}</div>
                    </div>
                ))
            }
            <div>Montant Total : {totalAmount}</div>
        </div>
    );
};

export default Cart;
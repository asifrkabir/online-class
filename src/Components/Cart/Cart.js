import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice += product.price;
    }

    function formatNumber(number){
        return parseFloat(number.toFixed(2)); 
    }

    totalPrice = formatNumber(totalPrice);

    return (
        <div className="card-container">

            <div className="card cart">
                <div className="card-body">
                    <h2 className="card-title" style={{color: '#3d5af1'}}>CART</h2>
                    <p>Total Courses: {cart.length}</p>
                    <p>Total Price: $ {totalPrice}</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;
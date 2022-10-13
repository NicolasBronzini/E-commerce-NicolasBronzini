import React from 'react';
import { useContext } from 'react';
import { Shop } from '../Context/CartContext';
import './style.css';

const CartTotals = () => {

  const {totalPrice} = useContext(Shop);

  return (
    <aside >
      <p>total: {totalPrice().toFixed(2)}€</p>
    </aside>
  )
}

export default CartTotals
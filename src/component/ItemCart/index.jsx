import React from 'react'
import { useContext } from 'react';
import { Shop } from '../Context/CartContext';
import  './style.css';
import { FaTimes } from "react-icons/fa";

const ItemCart = ({product}) => {
  const {removeItem} = useContext(Shop);
  const {cart} = useContext(Shop);

  const productsInCart = [];

  cart.forEach(item => {
    productsInCart.push(item);
  });

  return (
    <div className="cartContainer">
      <img className='img-cart' src={product.image} alt=""/>
      <dl className="titulo-cart">
        <dt>{product.title}</dt>
      </dl>
      <dl className="precio">
        <dt>{product.price * product.quantity}$</dt>
      </dl>
      <div className="cantidad">
        <dt>{product.quantity} Cantidad</dt>
      </div>
      <dl>
        <button onClick={()=> removeItem(product)}  className='btn-quitar'><FaTimes /></button>
      </dl>
    </div>
  )
}

export default ItemCart;
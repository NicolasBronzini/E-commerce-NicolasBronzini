import React, { useContext } from 'react';
import ItemCart from '../ItemCart';
import { Shop } from '../Context/CartContext';
import CartTotals from '../CartTotals'
import './style.css';

const CartContainer = () => {


  const {cart, clearCart} = useContext(Shop);

  const productsInCart = [];

  cart.forEach(item => {
    productsInCart.push(item);
  });

  console.log(productsInCart)


  return (
    <>
    <div  className='container' >
      <section>
        
        {cart.map(product => {
          return <ItemCart key={product.id} product={product}/>
        })}
        <button onClick={clearCart} className='btnClear'> Clear</button>
      </section>
      <aside >
        <CartTotals/>
      </aside>
      
    </div>
    </>

  )
}

export default CartContainer;
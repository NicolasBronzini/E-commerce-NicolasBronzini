import React from 'react';
import carrito from '../assets/carrito.png'
import {Shop} from '../Context/CartContext';
import {useContext} from 'react';

const CartWidget = () => {

  const {totalProducts} = useContext(Shop);
  return (
    
    <div style={{ position: 'absolute',right: '80px',  top: '5px',}}>
           
        <img src={carrito} alt="carrito de compras" />

        {totalProducts() !== 0 && 
        <div >
          {totalProducts()}
        </div>}
    </div>

    
  )
}

export default CartWidget
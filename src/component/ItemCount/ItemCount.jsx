import React, {useState,} from "react";

import carrito from '../assets/carrito.png'

import './style.css';

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert("No hay suficiente stock disponible");
        }
    }

    const handleDecrement = () => {
       if (count > 0){
        setCount(count  - 1)
       }
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

   
    

    return (
    
      <div className='BotonCount'>
               <button className='carrito'>{count}<img src={carrito} alt='carrit de compras'/> </button>
            <div>
              <div  className='Contador'>
                 <button onClick={handleAdd}>+</button> <button onClick={handleDecrement}>-</button>
              </div>
              <div >
              <button onClick={addCart}  className="btn_carrito" >Cantidad a comprar</button>
              </div>
            </div>    
      </div>
    );
};

export default ItemCount;



 
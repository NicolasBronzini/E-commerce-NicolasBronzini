import React from 'react'
  
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';
// import ItemCount from '../ItemCount/ItemCount';
import './style.css';


const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate (`/detail/${product.id}`);
  }

  return (
  <Card  className='CardOfertas' onClick={handleNavigate}>
    <Card.Img variant="top" src={product.image} className='card-img' />
    <Card.Body  className='Cardbody'>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text >
      {product.description } 
      </Card.Text>
      <div className='precio'>
       <button className='botonVer'>Ver</button>
        <h3>{product.price}$</h3>
      </div>
    </Card.Body>
  </Card>
  )
}

export default Item



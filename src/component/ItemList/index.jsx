
import Item from '../Item';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './style.css';

const ItemList = ({products}) => {



  return (
    <div className='ItemCard'>
        {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
        })
        :
        <h2>Loading...</h2>
      }
      : <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>}
    </div>
  )
}

export default ItemList
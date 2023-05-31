import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import formatCurrency from 'format-currency'

export const Productbox = ({product}) => {
  const {addToCart} = useContext(CartContext)
  let opts = {format:"%s%v", symbol:"€"};
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={product.image} alt=''></img>
        </div>
        <div className='a-b-text'>
            <h2>{product.name}</h2>
            <h3>{formatCurrency(`${product.prices}`,opts)}</h3>
            <button className='productbox-button' onClick={()=> addToCart(product)}>Order Now</button>
        </div>
    </div>
  )
}

import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import formatCurrency from 'format-currency'; 

export const CartItem = ({item}) => {
    const {removeItem}= useContext(CartContext);
    let opts = {format: "%s%v", Symbol:"€"}
  return (
    <div>
        <li className='CartItem__item'>
            <img src={item.image} alt=''></img>
            <div>
                {item.name}{formatCurrency(`${item.prices}`,opts)}
            </div>
            <button className='CartItem__button' onClick={()=>removeItem(item._id)}>Remove</button>
        </li>
    </div>
  )
}

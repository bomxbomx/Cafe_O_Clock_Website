import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import formatCurrency from 'format-currency';
import { CartItem } from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareXmark} from '@fortawesome/free-solid-svg-icons';

export const Cart = () => {
    const {showCart,cartItems,showHideCart}=useContext(CartContext);
    let opts =  {format:"%s%v",symbol:"€"};
  return (
    <div>
        {showCart && (
            <div className='cart__wrapper'>
                <div style={{textAlign:'right'}}>
                    {/* <i style={{cursor:'pointer'}} className='fa fa-time-circle' aria-hidden='true' onClick={showHideCart}></i> */}
                    <FontAwesomeIcon icon={faSquareXmark} size="2x" color="#bf2222" style={{cursor:'pointer'}} onClick={showHideCart}  />
                </div>
                <div className='cart__innerWrapper'>
                    {cartItems.length === 0 ? (<h4>Cart Is Empty</h4>):
                    (
                        <ul>
                            {cartItems.map(item=>(
                                <CartItem key={item._id} item={item} />
                            ))}
                        </ul>
                    )}
                </div>
                <div className='Cart__cartTotal'>
                    <div>
                        Cart Total
                    </div>
                    
                    <div style={{marginLeft:5}}>
                        Total  {formatCurrency(cartItems.reduce((amount,item)=>item.prices + amount, 0),opts)}
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

import React from 'react';
import { Productbox } from './Productbox';
import products from './Data';


export const Products = () => {
  return (
    <div id='products'>
        <h1>CHOOSE & ENJOY</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum has been the industry's standard dummy text ever since the </p>
        <div className='a-container'>
            {products.map((product)=>(<Productbox key={product.id} product={product} />))}
        </div>
    </div>
  )
}

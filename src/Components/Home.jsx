import React from 'react';
import { Link } from 'react-scroll';
import image from '../images/cafe4.jpg'

export const Home = () => {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>It's Great Time For A Good Taste Of Coffee</h3>
            <h1><span>COFFEE</span>FOR<br/>WEEK</h1>
            <p className='details'>Lorem Ipsum has been the industry's standard dummy text ever since the </p>
            <div className='header-btns'>
                <Link to='products' smooth={true} duration={500} className='header-btn'>Order</Link>
            </div>     
        </div>
        <img src={image} style={{margin:'150px 0px 0px 800px',width:'20%',height:'70%',width:'40%'}}></img>
    </div>
  )
}

import React from 'react';
import aboutimage from '../images/about.jpg';

export const About = () => {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENT</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <button>Read More</button>    
        </div>
        <div className='about-image'>
            <img src={aboutimage} alt=''></img>
        </div>
    </div>
  )
}

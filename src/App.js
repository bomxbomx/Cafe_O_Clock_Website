import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Products } from './Components/Products';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Cart } from './Components/Cart';
import HashLoader from 'react-spinners/HashLoader';

function App() {
  const[loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000);
  },[])
  return (
    <div className="App">
      {
         loading ? <HashLoader color={"red"} Loading={loading} style={{display:'block',borderColor:'red',marginTop:'20%'}} size={50}/>
         :
         <>
         <Navbar/>
         <Home/>
         <Products/>
         <About/>
         <Contact/>
         <Cart/>
         </>
         
      }
    </div>
  );
}

export default App;

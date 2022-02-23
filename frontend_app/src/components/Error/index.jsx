import React from "react";
import img from '../190513_r34294.png'
import './Error.css'

const Error = () => {
  
  return (

    <div className='ErrorContainer'>
      <h1>Oups, the page you requested doesn't exist!</h1>
        <img className="imageError" height='750px' width='750px' src={img}/>
    </div>
  )
};

export default Error;
import React from 'react';
import './animalPopUp.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

//creates the animal PopUp

const AnimalPopUp = ({selectedAnimalPop, setSelectedAnimalPop, refugesData}) => {



  const {
    name,
    image,
    description
  } = selectedAnimalPop

  const getRefugeById = (animal, refugesList) => {
    refugesList.map((refuge) => {
      if (animal.refuge_id === refuge.id) {
        console.log("this is inside the function ---->", refuge);
        return refuge
      }
    })
  }
  let selectedRefuge = getRefugeById(selectedAnimalPop, refugesData)
  
  // const {
  //   address,
  //   city,
  //   postal_code
  // } = selectedRefuge


  return (
    <div className='AnimalPopUp'>
      <div className='AnimalPopUpInner'>
        <div className='PopUpHeader'>
          <h3>A little more about me!</h3>
          <button className='close-btn' onClick={() => setSelectedAnimalPop(false)}>X button</button>
        </div>

        <div className='RefugeInfo'>
         <h6>{name} currently await his furever home at:</h6> 
          {/* <div>{refugeData.name}</div> */}
          {/* <div>{address}</div>
          <div>{postal_code}</div>  */}
        </div>
        <div className='AnimalPopImage'><img src={image}/></div>
        <div className='AnimalDesc'>
          <h4>Hello my name is {name}</h4>
          <div>{description}</div>
        </div>
        <div className='Buttons'>
          <button>Get more info about {name}</button>
          <button>Like Button</button>
        </div>
      </div>  
  </div>
  ) 
}

export default AnimalPopUp;
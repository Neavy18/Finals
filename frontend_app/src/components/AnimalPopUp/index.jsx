import React from 'react';
import './animalPopUp.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import useInfoData from '../../Api';

//creates the animal PopUp

const AnimalPopUp = ({selectedAnimalPop, setSelectedAnimalPop, refugesData}) => {

  const {
    likeAnimal
  } = useInfoData();

  const {
    name,
    image,
    description
  } = selectedAnimalPop

  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  const popIconHeart = ( <button onClick={()=> likeAnimal(currentUser.id, selectedAnimalPop.id) }><i className="fa-solid fa-heart"></i></button>)
  const popIconDelete = (<div>Delete!</div>);
  const notLogged = (<div></div>)
  
  return (
    <div className="AnimalPopUp">
      <div className="AnimalPopUpInner">
        <div className="PopUpHeader">
          <h3>A little more about me!</h3>
          <button
            className="close-btn"
            onClick={() => setSelectedAnimalPop(false)}
          >
            X button
          </button>
        </div>
        <div className='RefugeInfo'>
         <h6>{name} currently await his furever home at:</h6> 
          {/* <div>{refugeData.name}</div> */}
          {/* <div>{address}</div>
          <div>{postal_code}</div>  */}
        </div>
        <div className="AnimalPopImage">
          <img height="200px" width="200px" src={image} />
        </div>
        <div className="AnimalDesc">
          <h4>Hello my name is {name}</h4>
          <div>{description}</div>
        </div>
        <div className="Buttons">
          <button>Get more info about {name}</button>
          {currentUser ? popIconHeart : notLogged}
        </div>
      </div>
    </div>
  ); 
}

export default AnimalPopUp;
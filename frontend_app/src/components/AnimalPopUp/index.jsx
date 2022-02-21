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

  const popIconHeart = ( <button type="button" className="btn btn-info" onClick={()=> likeAnimal(currentUser.id, selectedAnimalPop.id) }>Like ❤️</button>)
  const popIconDelete = (<div>Delete!</div>);
  const notLogged = (<div></div>)
  
  return (
    <div className="AnimalPopUp">
      <div className="AnimalPopUpInner">
        <div className="PopUpHeader">
          <h3>A little more about me!</h3>
          <button
            className="btn btn-close"
            onClick={() => setSelectedAnimalPop(false)}
          >
            Close
          </button>
        </div>
        <div className="RefugeInfo">
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
          <button type="button" class="btn btn-info">
            Request More Info
          </button>
          {currentUser ? popIconHeart : notLogged}
        </div>
      </div>
    </div>
  ); 
}

export default AnimalPopUp;
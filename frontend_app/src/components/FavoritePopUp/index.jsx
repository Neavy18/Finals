import React from 'react';
import './FavoritesPopUp.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import useInfoData from '../../Api';

//creates the animal PopUp

const FavoritePopUp = ({selectedFavoritePop, setSelectedFavoritePop}) => {

  const {
    likeAnimal
  } = useInfoData();

  const {
    name,
    image,
    description
  } = selectedFavoritePop

  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  const popIconDelete = (<div>Delete!</div>);
  const notLogged = (<div></div>)
  
  return (
    <div className="AnimalPopUp">
      <div className="AnimalPopUpInner">
        <div className="PopUpHeader">
          <h3>A little more about me!</h3>
          <button
            className="close-btn"
            onClick={() => setSelectedFavoritePop(false)}
          >   X button
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
          <button><i className="fa-solid fa-x"></i></button>
        </div>
      </div>
    </div>
  ); 
}

export default FavoritePopUp;
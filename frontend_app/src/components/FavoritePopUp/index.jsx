import React from 'react';
import './FavoritesPopUp.css'
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import useInfoData from '../../Api';
import RequestMessage from '../RequestInfoMsg'

//creates the animal PopUp

const FavoritePopUp = ({selectedFavoritePop, setSelectedFavoritePop, setRequestMessage, setShowRequestMessage}) => {

  let navigate = useNavigate()

  const {
    deleteFavorites
  } = useInfoData();
  
  const {
    name,
    image,
    sex,
    description,
    refuge_name,
    address,
    city,
    postal_code
  } = selectedFavoritePop

  console.log("this should be favoritepops ---->", selectedFavoritePop)

  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  const popIconDelete = (<div>Delete!</div>);
  const notLogged = (<div></div>)
 
  
  const handleOnClickRequest = () => {
    setRequestMessage({
      name: selectedFavoritePop.name,
      refuge_name: selectedFavoritePop.refuge_name}) /* setLikeMessage({name: selectedAnimalPop.name  shelterName: se...}) */
    setTimeout(() => {
      setShowRequestMessage(true) 
      setSelectedFavoritePop(false)
    }, 800)
    
  }

  const pronouns = (() => {
    
    let pronoun = ""

    if(sex === 'Female') {
      pronoun = "her "
    } else  {
      pronoun = " his "
    }
    return pronoun
  })

  return (
    <div className="AnimalPopUp">
      <div className="AnimalPopUpInner">
      <div className="Buttons">
          <button
            type="button" className="btn btn-close"
            onClick={() => setSelectedFavoritePop(false)}
          > <i class="fa-solid fa-angles-left"></i>
          </button>
          <button type="button" className="btn btn-info" onClick = {() => handleOnClickRequest()}>Contact the shelter about {name}</button>
      </div>
        <div className="RefugeInfo">
        <h5><strong>{name}</strong> currently await {pronouns()}furever home at:</h5>
          <div>{refuge_name}</div> 
          <div>{address}</div>
          <div>{city}</div>
          <div>{postal_code}</div> 
        </div>
        <div className="AnimalPopImage">
        <img height="250px" width="275px" src={image} />
        </div>
        <div className="AnimalDesc">
        <h4>Hello my name is <strong>{name}</strong></h4>
          <div>{description}</div>
        </div>
        <div className="deleteButton">
          <button type="button" className="btn btn-info" onClick={() => deleteFavorites(currentUser.id, selectedFavoritePop.id)}>Remove from favorites</button>
        </div>
      </div>
    </div>
  ); 
}

export default FavoritePopUp;
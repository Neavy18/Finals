import React from 'react';
import './animalPopUp.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useInfoData from '../../Api';
import LikeMsg from '../LikeMsg';
import RequestMessage from '../RequestInfoMsg'
import { Link } from 'react-router-dom';

//creates the animal PopUp

const AnimalPopUp = ({selectedAnimalPop, setSelectedAnimalPop, setShowLikeMessage, setLikeMessage, setRequestMessage, setShowRequestMessage}) => {

  const {
    likeAnimal
  } = useInfoData();

  const {
    name,
    image,
    sex,
    description
  } = selectedAnimalPop

  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  let navigate = useNavigate();
  
  const loginReroute =() => {
    navigate('/login')
  } 

  const handleOnClickLike = () => {
    likeAnimal(currentUser.id, selectedAnimalPop.id)
    setLikeMessage(selectedAnimalPop.name) /* setLikeMessage({name: selectedAnimalPop.name  shelterName: se...}) */
    setShowLikeMessage(true)
    setSelectedAnimalPop(false)
  }
  const handleOnClickRequest = () => {
    setRequestMessage(selectedAnimalPop.name) /* setLikeMessage({name: selectedAnimalPop.name  shelterName: se...}) */
    setShowRequestMessage(true)
    setSelectedAnimalPop(false)
  }
  const popIconHeart = ( <button type="button" className="btn btn-info" onClick={()=> handleOnClickLike()}><i class="fa-solid fa-heart"></i></button>)
  const notLogged = (<div><Link to='/login'> Login </Link> or <Link to='/register'>Register </Link><span>to like or request more info about {name}</span> </div>)
  const requestMoreInfo = (<button type="button" className="btn btn-info" onClick = {() => handleOnClickRequest()}>Contact the shelter about {name}</button>)
  const empty = (<div></div>)

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
              onClick={() => setSelectedAnimalPop(false)}
            >
             <i class="fa-solid fa-angles-left"></i>
            </button>
            {currentUser ? requestMoreInfo : empty }
          </div>
        <div className="RefugeInfo">
          <h5><strong>{name}</strong> currently await {pronouns()}furever home at:</h5>
          <div>Rosie Animal Adoption</div> 
          <div>3551 Saint-Charles Blvd Suite 440</div>
          <div>Kirkland</div>
          <div>H9H 3C4</div> 
        </div>
        <div className="AnimalPopImage">
          <img height="250px" width="275px" src={image} />
        </div>
        <div className="AnimalDesc">
        <h4>A little more about me!</h4>
          <div>Hello, my name is {name} </div> 
          <div>{description}</div>
        </div>
        <div className="likeButton">
          {currentUser ? popIconHeart : notLogged}
        </div>
      </div>
    </div>
  ); 
}

export default AnimalPopUp;
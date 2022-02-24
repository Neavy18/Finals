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
    description,
    refuge_name,
    address,
    city,
    postal_code
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
    setRequestMessage({
      name: selectedAnimalPop.name,
      refuge_name: selectedAnimalPop.refuge_name}) /* setLikeMessage({name: selectedAnimalPop.name  shelterName: se...}) */
    setTimeout(() => {
      setShowRequestMessage(true)
      setSelectedAnimalPop(false)
    }, 900)
  }
  const popIconHeart = ( <button type="button" className="btn btn-info" onClick={()=> handleOnClickLike()}><i class="fa-solid fa-heart"></i></button>)
  const notLogged = (
  <div className='NotLogged'>
    <div>    
      <Link to='/login'> Login </Link> /  <Link to='/register'>Register </Link>
    </div>
      <div>to like or request more info about </div>
      <div>{name}</div>
  </div>)
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
          <div>{refuge_name}</div> 
          <div>{address}</div>
          <div>{city}</div>
          <div>{postal_code}</div> 
        </div>
        <div className="AnimalPopImage">
          <img height="250px" width="275px" src={image} />
        </div>
        <div className="AnimalDesc">
        <h4 className='desc'>Hello, my name is <strong>{name}</strong>! </h4> 
        <br></br>
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
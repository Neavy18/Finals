import React from 'react';
import './animalPopUp.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useInfoData from '../../Api';
import LikeMsg from '../LikeMsg';
import RequestMessage from '../RequestInfoMsg'
import { Link, Linkn } from 'react-router-dom';

//creates the animal PopUp

const AnimalPopUp = ({selectedAnimalPop, setSelectedAnimalPop, setShowLikeMessage, setLikeMessage, setRequestMessage, setShowRequestMessage}) => {

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

  let navigate = useNavigate();
  
  const loginReroute =() => {
    navigate('/login')
  } 

  const handleOnClick = () => {
    likeAnimal(currentUser.id, selectedAnimalPop.id)
    setLikeMessage(selectedAnimalPop.name) /* setLikeMessage({name: selectedAnimalPop.name  shelterName: se...}) */
    setShowLikeMessage(true)
    setSelectedAnimalPop(false)
  }
  const popIconHeart = ( <button onClick={()=> handleOnClick() }><i className="fa-solid fa-heart"></i></button>)
  const notLogged = (<div><Link to='/login'> Login </Link> or <Link to='/register'>Register </Link><span>to like or request more info about {name}</span> </div>)
  const requestMoreInfo = (<button onClick = {() => setRequestMessage(selectedAnimalPop.name)}>Contact the shelter about {name}</button>)
  const empty = (<div></div>)
  
  return (
    <div className="AnimalPopUp">
      <div className="AnimalPopUpInner">
        <div className="PopUpHeader">
          <h3>A little more about me!</h3>
          <button className="close-btn" onClick={() => setSelectedAnimalPop(false)}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className='RefugeInfo'>
         <h6>{name} currently await their furever home at:</h6> 
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
          {currentUser ? requestMoreInfo : empty }
          {currentUser ? popIconHeart : notLogged}
        </div>
      </div>
    </div>
  ); 
}

export default AnimalPopUp;
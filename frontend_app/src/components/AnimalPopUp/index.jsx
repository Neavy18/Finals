import React from 'react';
import './animalPopUp.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useInfoData from '../../Api';
import LikeMsg from '../LikeMsg';
import RequestMessage from '../RequestInfoMsg'

//creates the animal PopUp

const AnimalPopUp = ({selectedAnimalPop, setSelectedAnimalPop}) => {

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

  const [likeMessage, setLikeMessage] = useState(false)
  const [requestMessage, setRequestMessage] = useState(false)

  const handleOnClick = () => {
    likeAnimal(currentUser.id, selectedAnimalPop.id)
    setLikeMessage(selectedAnimalPop.name)
  } 
  const popIconHeart = ( <button onClick={()=> handleOnClick() }><i className="fa-solid fa-heart"></i></button>)
  const notLogged = (<button onClick={() => loginReroute()}>Login to like!</button>)
  
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
          <button onClick = {() => setRequestMessage(selectedAnimalPop.name)}>Get more info about {name}</button>
          {currentUser ? popIconHeart : notLogged}
        </div>
      </div>
      <div>
        {likeMessage && <LikeMsg likeMessage={likeMessage} setLikeMessage={setLikeMessage}/>}
      </div>
      <div>
        {requestMessage && <RequestMessage requestMessage={requestMessage} setRequestMessage={setRequestMessage} />}
      </div>
    </div>
  ); 
}

export default AnimalPopUp;
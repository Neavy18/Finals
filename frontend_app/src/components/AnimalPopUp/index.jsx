import React from 'react';
import './animalPopUp.css'

//creates the animal PopUp

const AnimalPopUp = ({selectedAnimalPop, setSelectedAnimalPop}) => {
  
  const {
    name,
    // refuge: {
    //   name: refugeName,
    //   address,
    //   postal_code
    // },
    image,
    description
  } = selectedAnimalPop

  return (
    <div className='AnimalPopUp'>
      <div className='AnimalPopUpInner'>
        <div className='PopUpHeader'>
          <h3>A little more about me!</h3>
          <button className='close-btn' onClick={() => setSelectedAnimalPop(false)}>X button</button>
        </div>

        <div className='RefugeInfo'>
         <h6>{name} currently await his furever home at:</h6> 
          {/* <div>{refugeName}</div>
          <div>{address}</div>
          <div>{postal_code}</div> */}
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
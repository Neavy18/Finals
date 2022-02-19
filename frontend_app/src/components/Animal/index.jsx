import React from 'react';
import './animal.css'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

//creates the animal tiles

const Animal = ({animal, setSelectedAnimalPop}) => {

  const {
    image,
    name,
    age,
    breed,
    sex,
  } = animal
  
  return (
    <div className='AnimalTile' onClick={() => {
      setSelectedAnimalPop(animal)
    }}>
      <div className='AnimalImage'><img src={image}/></div>
      <div className='AnimalInfo'>
        <div className='AnimalNameAge'>
          <div>{name}</div>
          <div>{age}</div>
        </div>
        <div className='AnimalBreedSex'>
          <div>{breed}</div>
          <div>{sex}</div> 
        </div>
      </div>
    </div>
  ) 
}

export default Animal;
import React from 'react';
import './animal.css'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

//creates the animal tiles

const Animal = ({ animal, setSelectedAnimalPop }) => {
  const { image, name, age, breed, sex } = animal;

  return (
    <div className="col" onClick={() => setSelectedAnimalPop(animal)}>
      <div className="card">
        <img src={image} class="card-img-top" alt="Animal" />
        {/* <div className="card-body"> */}
          <div className="AnimalInfo">
            <div className="AnimalNameAge">
              <div className='PetName'><strong>{name}</strong></div>
              <li>
              {breed}
              </li>
              <li>
              {sex}
              </li>
              {/* <div>{breed}</div>
              <div>{sex}</div>
              <div></div> */}
            </div>
            <div className="AnimalBreedSex">
            {age}
            </div>
          {/* </div> */}
        </div>
      </div>
      {/* <div className="AnimalImage">
        <img height="200px" width="200px" src={image} />
      </div>
      <div className="AnimalInfo">
        <div className="AnimalNameAge">
          <div>{name}</div>
          <div>{age}</div>
        </div>
        <div className="AnimalBreedSex">
          <div>{breed}</div>
          <div>{sex}</div>
        </div>
      </div>  */}
    </div>
  );
};

export default Animal;

import React from 'react';
import './animal.css'

const Animal = ({animal, setSelectedAnimalPop}) => {

  const {
    image,
    name,
    age,
    breed,
    // sex,
  } = animal
  
  return (
    <div className='AnimalTile' onClick={() => setSelectedAnimalPop(animal)}>
      <div className='AnimalImage'><img src={image}/></div>
      <div className='AnimalInfo'>
        <div className='AnimalNameAge'>
          <div>{name}</div>
          <div>{age}</div>
        </div>
        <div className='AnimalBreedSex'>
          <div>{breed}</div>
          {/* <div>{sex}</div> */}
        </div>
      </div>
    </div>
  ) 
  // populate that with name, age, breed, img form json of api call
}

export default Animal;
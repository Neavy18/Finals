import React, { useState } from 'react';
import Animal from '../Animal';
import AnimalPopUp from '../AnimalPopUp';
import "./Home.css"
import useInfoData from '../../Api'; 

const Home = ({ name }) => {

  const {
    getAnimalInfo
  } = useInfoData();

  const [selectedAnimalPop, setSelectedAnimalPop] = useState(false);
 //this is to propagate my component (Animal Tile) with the needed data (from axios call to api/animals)
  const [animalsData, setAnimalsData] = useState(null)

  getAnimalInfo().then((animals) => {
    setAnimalsData(animals)
  });

  console.log("this is animal data --->", animalsData);
  if(animalsData === null) {
    return null
  }

  return (
    <div>
       <h1 className='Slogan'>Find your Soulmate</h1>
      <div className='AnimalTiles'>
        {animalsData.map(animal => (
          <Animal animal={animal} setSelectedAnimalPop={setSelectedAnimalPop} />
        ))}
      </div>
      {selectedAnimalPop && (
        <AnimalPopUp selectedAnimalPop={selectedAnimalPop} setSelectedAnimalPop={setSelectedAnimalPop} />
      )}
    </div>
 

  );
}

export default Home;

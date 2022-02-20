import React, { useState, useEffect } from 'react';
import Animal from '../Animal';
import AnimalPopUp from '../AnimalPopUp';
import "./Home.css"
import useInfoData from '../../Api';

const Home = ({ name }) => {

  const {
    getAnimalInfo,
  } = useInfoData();

  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)


   //this is to propagate my component (Animal Tile) with the needed data (from axios call to api/animals)
  const [selectedAnimalPop, setSelectedAnimalPop] = useState(false);
  const [animalsData, setAnimalsData] = useState(null);

  useEffect(() => {
    (getAnimalInfo().then((animals) => {
      setAnimalsData(animals)
    }))
  }, [setAnimalsData])

  if(animalsData === null) {
    return null
  }

  const userLoggedDisplay = ( <div>
    <h1 className='Slogan'>Find your Soulmate</h1>
   <div className='AnimalTiles'>
     {animalsData.map(animal => (
       <Animal animal={animal} setSelectedAnimalPop={setSelectedAnimalPop} />
     ))}
   </div>
   {selectedAnimalPop && (
     <AnimalPopUp selectedAnimalPop={selectedAnimalPop} setSelectedAnimalPop={setSelectedAnimalPop} />
   )}
 </div> )

  const noUserLoggedDisplay = (
    <div className="container">
      {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4"> */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {/* <h1 className="Slogan">FLOGIN</h1> */}
        {/* <div className="col"> */}
        {animalsData.map((animal) => (
          <Animal animal={animal} setSelectedAnimalPop={setSelectedAnimalPop} />
        ))}
        {/* </div> */}
      </div>
      {selectedAnimalPop && (
        <AnimalPopUp
          selectedAnimalPop={selectedAnimalPop}
          setSelectedAnimalPop={setSelectedAnimalPop}
        />
      )}
    </div>
  );
 
  return (
    <div >
    {currentUser ? userLoggedDisplay : noUserLoggedDisplay}
    </div>
  );
}

export default Home;

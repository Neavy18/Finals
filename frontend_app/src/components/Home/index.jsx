import React, { useState, useEffect } from 'react';
import Animal from '../Animal';
import AnimalPopUp from '../AnimalPopUp';
import './Home.css';
import useInfoData from '../../Api';

const Home = ({ name }) => {
  const { getAnimalInfo } = useInfoData();

  let currentUser = localStorage.getItem('currentUser');
  currentUser = JSON.parse(currentUser);

  //this is to propagate my component (Animal Tile) with the needed data (from axios call to api/animals)
  const [selectedAnimalPop, setSelectedAnimalPop] = useState(false);
  const [animalsData, setAnimalsData] = useState(null);

  useEffect(() => {
    getAnimalInfo().then((animals) => {
      setAnimalsData(animals);
    });
  }, [setAnimalsData]);

  if (animalsData === null) {
    return null;
  }

  const userLoggedDisplay = (
    <>
      <section className='Slogan'>
        <h1>Find your Soulmate</h1>
      </section>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {/* <div className="AnimalTiles"> */}
          {animalsData.map((animal) => (
            <Animal
              animal={animal}
              setSelectedAnimalPop={setSelectedAnimalPop}
            />
          ))}
        </div>
        {selectedAnimalPop && (
          <AnimalPopUp
            selectedAnimalPop={selectedAnimalPop}
            setSelectedAnimalPop={setSelectedAnimalPop}
          />
        )}
      </div>
    </>
  );

  const noUserLoggedDisplay = (
    <>
      <section className="Slogan">
        <h1>Find your Soulmate</h1>
      </section>
      <div className="container">
        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4"> */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {/* <h1 className="Slogan">LOGIN</h1> */}
          {animalsData.map((animal) => (
            <Animal
              animal={animal}
              setSelectedAnimalPop={setSelectedAnimalPop}
            />
          ))}
        </div>
        {selectedAnimalPop && (
          <AnimalPopUp
            selectedAnimalPop={selectedAnimalPop}
            setSelectedAnimalPop={setSelectedAnimalPop}
          />
        )}
      </div>
    </>
  );

  return <div>{currentUser ? userLoggedDisplay : noUserLoggedDisplay}</div>;
};

export default Home;

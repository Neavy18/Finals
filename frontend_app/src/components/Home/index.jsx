import React, { useState, useEffect } from 'react';
import Animal from '../Animal';
import AnimalPopUp from '../AnimalPopUp';
import "./Home.css";
import useInfoData from '../../Api';
import LikeMsg from '../LikeMsg';
import RequestInfoMsg from '../RequestInfoMsg' 

const Home = ({ name }) => {
  const { getAnimalInfo } = useInfoData();

  let currentUser = localStorage.getItem('currentUser');
  currentUser = JSON.parse(currentUser);

  //this is to propagate my component (Animal Tile) with the needed data (from axios call to api/animals)
  const [selectedAnimalPop, setSelectedAnimalPop] = useState(false);
  const [animalsData, setAnimalsData] = useState(null);

  const [showLikeMessage, setShowLikeMessage] = useState(false);
  const [likeMessage, setLikeMessage] = useState(null);
  
  const [showRequestMessage, setShowRequestMessage] = useState(false);
  const [requestMessage, setRequestMessage] = useState(null);


  useEffect(() => {
    getAnimalInfo().then((animals) => {
      setAnimalsData(animals);
    });
  }, [setAnimalsData]);

  if (animalsData === null) {
    return null;
  }

  const userLoggedDisplay = ( <div>
    <section className='Slogan'>
        <h1>Find your Soulmate</h1>
      </section>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {animalsData.map(animal => (
        <Animal 
          animal={animal} 
          setSelectedAnimalPop={setSelectedAnimalPop} 
        />
      ))}
        </div>
      </div>
    {selectedAnimalPop && (
      <AnimalPopUp 
        selectedAnimalPop={selectedAnimalPop} 
        setSelectedAnimalPop={setSelectedAnimalPop} 
        setLikeMessage={setLikeMessage}
        setShowLikeMessage={setShowLikeMessage}
        setRequestMessage={setRequestMessage}
        setShowRequestMessage={setShowRequestMessage}
      />
    )}
    {showLikeMessage && (
      <LikeMsg 
        likeMessage={likeMessage} 
        setShowLikeMessage={setShowLikeMessage} 
        />
    )}
    {showRequestMessage && (
      <RequestInfoMsg 
        requestMessage={requestMessage}
        setShowRequestMessage={setShowRequestMessage}
      />
    )}
    </div>)

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
            <Animal animal={animal} setSelectedAnimalPop={setSelectedAnimalPop} />
          ))}
          {/* </div> */}
        </div>
      </div>
        {selectedAnimalPop && (
          <AnimalPopUp
            selectedAnimalPop={selectedAnimalPop}
            setSelectedAnimalPop={setSelectedAnimalPop}
          />
        )}
      </>)
  
    return (
      <div >
      {currentUser ? userLoggedDisplay : noUserLoggedDisplay}
      </div>
    );
}

export default Home;

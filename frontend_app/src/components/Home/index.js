import React, { useState } from 'react';
import Animal from '../Animal';
import AnimalPopUp from '../AnimalPopUp';
import "./Home.css"
import useInfoData from '../../Api'; 


// const ANIMALS = [
//   {
//     IMG: 'IMAGE',
//     name: 'Animal #1',
//     age: '3',
//     breed: 'cat',
//     description: 'Loving cutie looking for its furever home',
//     refuge: {
//       name: "SPCA de Montreal",
//       address: '123 Decarie Est',
//       postal: 'H3E 1V9'
//     }
//   },
//   {
//     IMG: 'IMAGE',
//     name: 'Animal #2',
//     age: '6',
//     breed: 'dog',
//     description: 'Loving cutie looking for its furever home',
//     refuge: {
//       name: "SPCA de Montreal",
//       address: '123 Decarie Est',
//       postal: 'H3E 1V9'
//     } 
//   },
  
//   {
//     IMG: 'IMAGE',
//     name: 'Animal #3',
//     age: '7',
//     breed: 'dog',
//     description: 'Loving cutie looking for its furever home',
//     refuge: {
//       name: "SPCA de Montreal",
//       address: '123 Decarie Est',
//       postal: 'H3E 1V9'
//     }
//   },

//   {
//     IMG: 'IMAGE',
//     name: 'Animal #4',
//     age: '1',
//     breed: 'cat',
//     description: 'Loving cutie looking for its furever home',
//     refuge: {
//       name: "SPCA de Montreal",
//       address: '123 Decarie Est',
//       postal: 'H3E 1V9'
//     }
//   },

//   {
//     IMG: 'IMAGE',
//     name: 'Animal #5',
//     age: '10',
//     breed: 'cat',
//     description: 'Loving cutie looking for its furever home',
//     refuge: {
//       name: "SPCA de Montreal",
//       address: '123 Decarie Est',
//       postal: 'H3E 1V9'
//     }
//   },

//   {
//     IMG: 'IMAGE',
//     name: 'Animal #6',
//     age: '8',
//     breed: 'dog',
//     description: 'Loving cutie looking for its furever home',
//     refuge: {
//       name: "SPCA de Montreal",
//       address: '123 Decarie Est',
//       postal: 'H3E 1V9'
//     }
//   },

//   {
//     IMG: 'IMAGE',
//     name: 'Animal #7',
//     age: '12',
//     breed: 'dog',
//     description: 'Loving cutie looking for its furever home',
//     refuge: {
//       name: "SPCA de Montreal",
//       address: '123 Decarie Est',
//       postal: 'H3E 1V9'
//     }
//   }

// ]

const Home = ({ getAnimalInfo }) => {

  getAnimalInfo().then((animals) => {
    console.log("this is getAnimalInfo after then  ---->", animals)
  });
  const [selectedAnimal, setSelectedAnimal] = useState(false);

  // getAnimalInfo().then((animals) => {
  //   animals.map((animal) => {
  //     console.log(animal);
  //     <Animal animal={animal} setSelectedAnimal={setSelectedAnimal} />
  //   })
  // })

  return (
    <div>
       <h1 className='Slogan'>Find your Soulmate</h1>
      <div className='AnimalTiles'>

      </div>
      {/*<AnimalPopUp trigger={selectedAnimal} setTrigger={setSelectedAnimal} animal={selectedAnimal} setSelectedAnimal={setSelectedAnimal}>
        </AnimalPopUp> */}
    </div>
 

  );
}

export default Home;

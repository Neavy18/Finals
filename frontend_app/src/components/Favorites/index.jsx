import React, { useState, useEffect } from 'react';
import Animal from '../Animal';
import AnimalPopUp from '../AnimalPopUp';
import "./Favorites.css"
import useInfoData from '../../Api';

//the my favorites with a similar display as the homepage

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

const Favorites = ({ name }) => {

  const {
    getFavorites
  } = useInfoData();
  
  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  const [selectedAnimalPop, setSelectedAnimalPop] = useState(false);
  const [favoritesData, setFavoritesData] = useState(null);
  
  useEffect(() => {
   (getFavorites(currentUser.id).then((favorites) => {
     setFavoritesData(favorites)
   }))
  }, [setFavoritesData])

  if(favoritesData === null){
    return null
  }

  return (
    <div>
      <h1 className='Slogan'>My favorites</h1>
     <div className='AnimalTiles'>
        {favoritesData.map(animal => (
          <Animal animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;

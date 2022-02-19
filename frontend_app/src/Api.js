import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const useInfoData = () => {
  
  const getAnimalInfo = () => {
    return axios.get('http://localhost:5000/api/animals')
    .then((response) => {
      return response.data
    })
  }
   
  // const getRefugeByID = (animalObject) => {
  //   console.log("inside the getRefugeByID func ---->", animalObject);
  //   return axios.post("http://localhost:5000/refuge", animalObject)
  //   .then((res) => {
  //     console.log("this is res.data --->", res.data)
  //    return res.data
  //   })
  // };

  const getRefugesInfo = () => {
    return axios.get('http://localhost:5000/api/refuges')
    .then((res) => {
      console.log("from inside the AXIOS GET of REFUGES---:>", res.data);
      return res.data
    })
  }

  const likeAnimal = (userId, animalId) => {
    
    const addToFavorite = {
      user_id: userId,
      animal_id: animalId
    }
    console.log("this is add to fav -->", addToFavorite)
    return axios.post('http://localhost:5000/liked', addToFavorite)
    .then((res) => {
      console.log("this is liked animals--->", res.data)
    })
  }

  return  {
    getAnimalInfo,
    getRefugesInfo,
    likeAnimal
  }
}

export default useInfoData;
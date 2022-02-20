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
    likeAnimal
  }
}

export default useInfoData;
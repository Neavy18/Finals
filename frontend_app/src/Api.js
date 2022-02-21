import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const useInfoData = () => {
  
  let navigate = useNavigate()

  const redirectFavorites = () => {
    window.location.reload();
  }
  const getAnimalInfo = () => {
    return axios.get('http://localhost:5000/api/animals')
    .then((response) => {
      return response.data
    })
  };
   
  const getRefugesInfo = () => {
    return axios.get('http://localhost:5000/api/refuges')
    .then((res) => {
      console.log("from inside the AXIOS GET of REFUGES---:>", res.data);
      return res.data
    })
  };

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
  };

  const getFavorites = (userId) => {
    const user_Id = {
      userId: userId
    }
    return axios.post('http://localhost:5000/users/favorites', user_Id)
    .then((res) => {
      return res.data
    })
  }

  const deleteFavorites = (userId, animalId) => {
    const favoriteInfo = {
      user_id: userId,
      animal_id: animalId
    }
    console.log("this is fave delete info", favoriteInfo)
    return axios.post('http://localhost:5000/delete/favorites', favoriteInfo)
    .then((res) => {
     redirectFavorites()
    })
  }

  return  {
    getAnimalInfo,
    likeAnimal,
    getFavorites,
    deleteFavorites
  }
}

export default useInfoData;
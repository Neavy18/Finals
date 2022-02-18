import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const useInfoData = () => {

  const [animalList, setAnimalList] = useState({})

  const [animalInfo, setAnimalInfo] = useState({
    animal_id: null,
    refuge_id: null,
    specie: null,
    name: null,
    age: null,
    sex: null,
    breed: null,
    description: null,
    image: null,
  });
  
  const getAnimalInfo = () => {
    return axios.get('http://localhost:5000/api/animals')
    .then((response) => {
      console.log("This is is res.data from getAnimalInfo -->", response.data)
      return response.data
    })
  } 

  return  {
    getAnimalInfo
  }
}

export default useInfoData;
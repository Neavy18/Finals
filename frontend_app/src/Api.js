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

  const registerUser = (user) => {
    console.log("this is inside register user ---->", user);
    axios.post("http://localhost:5000/register", user).then((res) => {
      if(res.data) {
        console.log("It's registered :)!!!!");
      } else {
        console.log("not yet, but you'll get it soon :)!!!!!");
      }
    })
  }

  return  {
    getAnimalInfo,
    registerUser
  }
}

export default useInfoData;
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router'; 

const useInfoData = () => {

  // let history = useNavigate();

  // const [animalInfo, setAnimalInfo] = useState({
  //   animal_id: null,
  //   refuge_id: null,
  //   specie: null,
  //   name: null,
  //   age: null,
  //   sex: null,
  //   breed: null,
  //   description: null,
  //   image: null,
  // });
  
  const getAnimalInfo = () => {
    return axios.get('http://localhost:5000/api/animals')
    .then((response) => {
      console.log("This is is res.data from getAnimalInfo -->", response.data)
      return response.data
    })
  }

  // const registerUser = (user) => {
  //   return axios.post("http://localhost:5000/register", user)
  //   .then((res) => {
  //     if(res.data.error) {
  //       alert(res.data.error);
  //     }
  //   })
  // }

  // const loginUser = (user) => {
  //   console.log("this is inside login user ---->", user);
  //   return axios.post("http://localhost:5000/login", user)
  //   .then((res) => {
  //     if(res.data.error) {
  //      alert(res.data.error)
  //     } else {
  //       history("/home")
  //     }
  //   })
  // }

  return  {
    getAnimalInfo
    // registerUser
    // loginUser
  }
}

export default useInfoData;
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

  return  {
    getAnimalInfo,
    getRefugesInfo
  }
}

export default useInfoData;
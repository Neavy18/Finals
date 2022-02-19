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

  return  {
    getAnimalInfo,
  }
}

export default useInfoData;
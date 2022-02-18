import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Favorites from './components/Favorites';

import useInfoData from './Api';

function App() {

  const {
    registerUser,
    getAnimalInfo 
  } = useInfoData();

  return (
    <Router>
      <Layout></Layout>
      <Routes>
          <Route path ="/" element={<Home getAnimalInfo={getAnimalInfo}/>} />
          { <Route path = "/login" element={<Login />}/> }
          { <Route path = "/register" element={<Register registerUser={registerUser} />}/> }
          { <Route path = "/favorites" element={<Favorites />} /> }
      </Routes>
    </Router>
  
  );
}
 
export default App;

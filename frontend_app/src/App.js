import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Favorites from './components/Favorites';

import useInfoData from './Api';

//All of the routes are populated with their components here

function App() {

  // const {
    
  // } = useInfoData();

  return (
    <Router>
      <Layout></Layout>
      <Routes>
          <Route path ="/home" element={<Home />} />
          { <Route path = "/" element={<Login/>}/> }
          { <Route path = "/register" element={<Register />}/> }
          { <Route path = "/favorites" element={<Favorites />} /> }
      </Routes>
    </Router>
  
  );
}
 
export default App;

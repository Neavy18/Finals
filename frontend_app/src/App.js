import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Favorites from './components/Favorites';
import Header from './components/Header';
import useInfoData from './Api';

//All of the routes are populated with their components here

function App() {

  return (
    <Router>
      <Layout></Layout>
      <Routes>
        { <Route path ="/" element={<Home />} />}
        { <Route path = "/login" element={<Login/>}/> }
        { <Route path = "/register" element={<Register />}/> }
        { <Route path = "/favorites" element={<Favorites />} /> }
      </Routes>
    </Router>
  
  );
}
 
export default App;

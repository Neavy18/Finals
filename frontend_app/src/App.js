import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Favorites from './components/Favorites';

import useInfoData from './Api';

function App() {

  const {
    registerUser
  } = useInfoData();

  return (
    <Router>
      <Layout></Layout>
      <Routes>
          <Route path ="/" element={<Home />} />
          { <Route path = "/login" element={<Login />}/> }
          { <Route path = "/register" element={<Register registerUser={registerUser} apple={'apple'} />}/> }
          { <Route path = "/favorites" element={<Favorites />} /> }
      </Routes>
    </Router>
  
  );
}
 
export default App;

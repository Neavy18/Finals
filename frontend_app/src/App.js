import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <Layout>
     <Home></Home>
    </Layout>
  );
}

export default App;

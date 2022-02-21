import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { useLocation } from 'react-router';
import Header from '../Header';
import { useEffect } from 'react';

//overall layout of the page

const Layout = ({ children }) => {
  // let header = true
  // const location  = useLocation();

  // const headerDisplay = () => {
  //   if(location.pathname === '/login' || '/register') {
  //     return false
  //   } else if( location.pathname === '/' || '/favorites'){
  //     return true
  //   }
  // }

  // useEffect(() => {
  //   headerDisplay()
  // }, [])

  // console.log('this is header! ', header)
  // console.log("loc.path", location.pathname)
    return (
      <>
        { <Header />}
        <Container>
          {children}
        </Container>
      </>
    );
}

export default Layout;

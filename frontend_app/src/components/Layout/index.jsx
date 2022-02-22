import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { useLocation } from 'react-router';
import Header from '../Header';
import { useEffect } from 'react';

//overall layout of the page

const Layout = ({ children }) => {
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

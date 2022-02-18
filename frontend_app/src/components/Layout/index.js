import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../Header';

//overall layout of the page

const Layout = ({ children }) => {
    return (
      <div>
        <Header />
        <Container>
          {children}
        </Container>
      </div>
    );
}

export default Layout;

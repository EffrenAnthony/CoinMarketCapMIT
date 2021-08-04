import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://pro.coinmarketcap.com/public/media/img/logo-square-inverse.png?_=aa22bf4"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        CoinMarketCap API - MIT MERN
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
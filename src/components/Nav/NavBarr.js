import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../img/Picsart_23-02-18_08-08-03-484.png'
import AppLogin from '../Login/AppLogin';






function NavBarr() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="https://www.youtube.com/watch?v=FFkLoUwQ9a4"><img style={{width: "6rem"}} src={Logo} alt={Logo} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Cryptocurrencies">CryptoMonedas</Nav.Link>
            <Nav.Link as={Link} to="/Nft">NFT</Nav.Link>
            <Nav.Link as={Link} to="Exchange">Exchange</Nav.Link>
            <AppLogin/>
          </Nav>
        </Container>
      </Navbar>
  </>
  )
}

export default NavBarr

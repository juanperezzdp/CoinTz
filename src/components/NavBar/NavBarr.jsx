import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LogoName from '../../img/LogoName.png'
import { useAuth0 } from "@auth0/auth0-react";
import Login from '../Login/Login';
import LoginIcon from '../Login/LoginIcon';
import Profile from '../Login/Profile';







function NavBarr() {
  const { isAuthenticated } = useAuth0();
  const [card, setCard] = useState(false);

  const handleOpenClick = () => setCard(!card);
  
  return (
    <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img style={{width: "5rem"}} src={LogoName} alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="justify-content-end flex-grow-1 pe-3">
          
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Cryptocurrencies">CryptoMonedas</Nav.Link>
            <Nav.Link as={Link} to="/Exchange">Exchange</Nav.Link>
            <Nav.Link as={Link} to="/Nft">NFT</Nav.Link>
            
            {isAuthenticated 
        ? (<>
        <button style={{borderRadius: "50%", border: "none", width: "max-content"}} onClick={handleOpenClick}>
        <LoginIcon />
        {card && (<Profile/>)}
        </button>
          </>) 
          : (
          <Login/>
        )}

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </div>
  )
}

export default NavBarr
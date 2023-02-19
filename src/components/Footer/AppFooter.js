import React from 'react'
import { Link } from 'react-router-dom'
import { Apple, Facebook, Github, GooglePlay } from 'react-bootstrap-icons';
import '../Footer/FooterSass.scss'
import {Form, Button} from 'react-bootstrap';

function AppFooter() {
  return (
    <div className='containerfooter'>
    <div className='icons'>
        <h1>CoinTz</h1>
        <div>
        <Link to='/' className='linkIcons'><Apple/></Link>
        <Link to='/' className='linkIcons'><Facebook/></Link>
        <Link to='/' className='linkIcons'><Github/></Link>
        <Link to='/' className='linkIcons'><GooglePlay/></Link>
        </div>
    </div>
        <ul className='link'>
            <li>Acciones</li>
            <li>Bitcoin</li>
            <li>Coin</li>
            <li>NFT</li>
        </ul>
        <ul className='link'>
            <li>Acciones</li>
            <li>Bitcoin</li>
            <li>Coin</li>
            <li>NFT</li>
        </ul>
        <ul className='link'>
            <li>Acciones</li>
            <li>Bitcoin</li>
            <li>Coin</li>
            <li>NFT</li>
        </ul>
        <div className='login'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Form>
            <div>
            <Button variant="outline-dark">Primary</Button>{' '}
            <Button variant="outline-dark">Primary</Button>{' '}
            </div>
        </div>
    </div>
  )
}

export default AppFooter
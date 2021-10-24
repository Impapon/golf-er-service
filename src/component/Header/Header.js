import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import './Header.css'
import golfLogo from '../../Images/golf logo.jpg'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Nav className="logo">
                    <h3>Golfi Dukan</h3>
                    <img src={golfLogo} alt="" height="50px" width="50px"/>
                </Nav>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className="mx-auto ">
                       
                        <Link className="g-4" to="/home">Home</Link>
                        <Link className="g-4" to="/service">Service</Link>
                        <Link className="g-4" to="/member">Member</Link>
                        <Link className="g-4" to="/about">About</Link>
                    </Nav>
    
            </Navbar>
        </div>
    );
};

export default Header;
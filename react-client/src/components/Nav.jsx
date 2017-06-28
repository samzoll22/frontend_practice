import React from 'react';
import { Navbar, Image } from 'react-bootstrap';


const Nav = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Image className='logo' src="imgs/simplr_logo.svg" />
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
)

export default Nav;


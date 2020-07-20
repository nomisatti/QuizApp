import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function Footer() {

  
  return (
    <div>
    <Navbar fixed="bottom"  bg="dark" variant="dark">
    
    <Nav className="mr-auto">
    <Navbar.Text>
      Project Created By:  <strong> Muhammad Nouman Atiq</strong>
    </Navbar.Text>      
      
    </Nav>
    
    <a href="https://www.facebook.com/noumasatti39/" rel="noopener noreferrer" target="_blank" className="fa fa-facebook  footersocial" />
    <a href="https://www.linkedin.com/in/noumanatiq/" rel="noopener noreferrer"  target="_blank" className="fa fa-linkedin  footersocial" />
    <a href="https://github.com/nomisatti" target="_blank"  rel="noopener noreferrer" className="fa fa-github  footersocial" />
    
  </Navbar>
    </div>
  )
}

export default Footer;
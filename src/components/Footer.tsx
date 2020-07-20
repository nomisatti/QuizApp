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
    
    <a href="https://www.facebook.com/noumasatti39/" rel="noopener noreferrer" target="_blank" ><span className="fa fa-facebook  footersocial"></span></a>
    <a href="https://www.linkedin.com/in/noumanatiq/" rel="noopener noreferrer"  target="_blank" ><span className="fa fa-linkedin  footersocial"></span></a>
    <a href="https://github.com/nomisatti" target="_blank"  rel="noopener noreferrer" ><span className="fa fa-github  footersocial"></span></a>
    
  </Navbar>
    </div>
  )
}

export default Footer;
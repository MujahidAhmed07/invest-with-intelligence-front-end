import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


function Header1() {
  const navLinkStyle = {
    color: 'white',
  };


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className='head'>
          <Navbar.Brand as={Link} to="/">Invest with Intelligence</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/" style={navLinkStyle}>Home</Nav.Link>
            <Nav.Link as={Link} to="/invest" style={navLinkStyle}>Invest</Nav.Link>
            <Nav.Link as={Link} to="/description" style={navLinkStyle}>About</Nav.Link>
            <Nav.Link as={Link} to="/login" style={navLinkStyle}>Login</Nav.Link>
            <Nav.Link as={Link} to="/Signup" style={{ ...navLinkStyle, backgroundColor: 'grey', borderRadius: 17 }}>
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/admin-login" style={{ navLinkStyle,paddingLeft: '50px'}}>
              <PersonOutlinedIcon/> Admin 
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header1;


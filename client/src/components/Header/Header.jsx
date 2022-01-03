import React, { useState, useEffect } from 'react';
import * as actionTypes from '../../store/actionTypes';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './header.css'



const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT })
    navigate('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    };

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location.pathname]);


  return (
    <Navbar collapseOnSelect className="navbar" expand="lg" bg="warning" variant="light">
      <Container>
        <Navbar.Brand className="fw-bold me-auto mu-auto" to="/" >Delhi Homes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#pricing">Properties</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            {user?.result ? (

              <NavDropdown title={user.result.name} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={user.result.email}>Dashboard</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>

              </NavDropdown>


            ) : (

              <Nav.Link as={Link} to="/auth" >Login</Nav.Link>
            )}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

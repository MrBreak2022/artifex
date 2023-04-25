import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/Login')
  }

  return (
    <Navbar className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Container>
        <Navbar.Brand href="/"><h1 class="text-light">Artifex</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            {userInfo ? (
              <>
                <Nav.Link as={Link} to="/Cart">
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </Nav.Link>
                <NavDropdown
                  title={
                    <FontAwesomeIcon icon={faUser} size="lg" />
                  }
                  id='username'
                  menuVariant="dark"
                >
                  <LinkContainer to='/Profile'>
                    <NavDropdown.Item><i class="fa-solid fa-circle-info fa-lg"></i> Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/AddProduct'>
                    <NavDropdown.Item><i class="fa-regular fa-pen-to-square fa-lg"></i> Create</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin Panel' id='adminmenue' menuVariant="dark">
                <LinkContainer to='/userlist'>
                  <NavDropdown.Item>User Accounts</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/productlist'>
                  <NavDropdown.Item>Artworks</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>


              </NavDropdown>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
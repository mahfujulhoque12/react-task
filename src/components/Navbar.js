import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { FaGlobe} from 'react-icons/fa';
import { FaLongArrowAltRight,FaChevronDown  } from 'react-icons/fa';
import logo from '../img/logo.png'

const MyNavbar = () => {
    return (
        <Navbar expand="lg" className='px-2'>
            
                <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className='nav-drop' title={<span>Product <FaChevronDown className='ms-1 text-dark' /></span>}     id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Our Products</NavDropdown.Item>
                            <NavDropdown.Item href="#">Best Sell</NavDropdown.Item>
                            <NavDropdown.Item href="#">Best Products</NavDropdown.Item>
                        </NavDropdown>
                      
                        <NavDropdown  className='nav-drop' title={<span>Solutions <FaChevronDown className='ms-1 text-dark' /></span>}     id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Solutions for Software</NavDropdown.Item>
                            <NavDropdown.Item href="#">Solutions for Hardware</NavDropdown.Item>
                            <NavDropdown.Item href="#">Solutions for Network</NavDropdown.Item>
                        </NavDropdown>
                              
                        <NavDropdown  className='nav-drop' title={<span>Resources <FaChevronDown className='ms-1 text-dark' /></span>}     id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Resources 1</NavDropdown.Item>
                            <NavDropdown.Item href="#">Resources 2</NavDropdown.Item>
                            <NavDropdown.Item href="#">Resources 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='nav-drop' href="#">Enterprise</Nav.Link>
                        <Nav.Link className='nav-drop' href="#">Pricing</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FaGlobe className="ms-1 language-icon" />
                        <FormControl as="select" className="border-0 language">
                            <option selected>EN</option>
                            <option value="1">Bng</option>
                            <option value="2">Dutch</option>
                        </FormControl>
                    </Form>
                    <Button variant="btn">Contact Sales</Button>
                    <Button variant="btn">Login</Button>
                    <Button variant="primary" className="btn-small border-radius">Sign Up Free <FaLongArrowAltRight></FaLongArrowAltRight></Button>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;

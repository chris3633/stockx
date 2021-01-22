import { Button } from '@material-ui/core'
import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../assets/navbarlogo.png'
import Text from 'react'

function NavbarTop() {
    return (
        <div>
            <Navbar fixed="top" />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                        alt="STOCKX"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="/">STOCKX</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Create account</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarTop

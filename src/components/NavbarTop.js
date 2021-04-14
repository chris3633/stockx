import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/navbarlogo.png'
import { useAuth } from '../contexts/AuthContext'
import Dashboard from './Dashboard'


function NavbarTop() {

    const { currentUser } = useAuth()

    if (!currentUser) {
        return (
            <div>
                <Navbar position="sticky" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Create account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    } else {
        return (
            <div>
                <Dashboard />
            </div>
        )
    }
}

export default NavbarTop

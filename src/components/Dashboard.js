import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

import News from './News'
import logo from '../assets/navbarlogo.png'


import Sidebar from '../components/Sidebar'

import 'react-sidebar-ui/dist/index.css'
import '../components/Dashboard.css'
import Stocks from './Stocks'

function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()


  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div>
        {/* <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
          </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
        </Button>
        </div>
      </Container> 

      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <Nav.Link onClick={handleLogout}> Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
      <Sidebar />
 */}
        {/* <div className="box"> */}
        {/* <Sidebar bgColor='black' isCollapsed={false}>
        <Logo
          image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
          imageName='react logo'/>
        <LogoText>React Sidebar UI</LogoText>
        <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={'black'}>
          Menu
        </DropdownItem>

        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          Home
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
          About
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          My Website
        </Item>
        <Item bgColor='black'>
          <Icon><i className="far fa-address-book"/></Icon>
          Contacts
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Blog
        </Item>
        <InputItem type='text' placeholder={'Search...'}/>
      </Sidebar> */}
        <Stocks />
      </div>
    </>
  )
}

export default Dashboard
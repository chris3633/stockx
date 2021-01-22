import '../App.css'
import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Sidebar from "./Sidebar"

import about from '../pages/AboutPage'
import contacts from '../pages/ContactPage'
import NavigationBar from './OldNavigationBar'
import home from '../pages/HomePage'
import dashboard from './Dashboard'

import NavbarTop from './NavbarTop'
import Login from './Login'
import Signup from './Register'
import ForgotPassword from './ForgotPassword'


function App() {

  return (
    <>
      <Router>
        {/* <Sidebar /> */}
         {/* <NavigationBar/> */}
         <NavbarTop />
          <Switch>
            <Route path='/' exact component={home} />
            <Route path='/about' exact component={about} />
            <Route path='/contacts' exact component={contacts} />
            <Route path='/dashboard' exact component={dashboard} />

            <Route path="/register" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
          </Switch>
          
      </Router> 


      
    </>
  )
}

export default App
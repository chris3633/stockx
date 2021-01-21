import '../App.css'
import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Sidebar from "./Sidebar"

import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import NavigationBar from './NavigationBar'
import LoginRegisterPage from '../pages/LoginRegisterPage'
import RegisterPage from '../components/Register'
import HomePage from '../pages/HomePage'



function App() {

  return (
    <>
      <Router>
        {/* <Sidebar /> */}
          <NavigationBar/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/AboutPage' exact component={AboutPage} />
            <Route path='/ContactPage' exact component={ContactPage} />
            <Route path='/LoginPage' exact component={LoginRegisterPage} />
            <Route path='/RegisterPage' exact component={LoginRegisterPage} />
          </Switch>
          
      </Router> 
      
    </>
  )
}

export default App
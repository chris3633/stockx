import '../App.css'
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "react"


import about from '../pages/AboutPage'
import contacts from '../pages/ContactPage'
import NavigationBar from './OldNavigationBar'
import home from '../pages/HomePage'
import dashboard from './Dashboard'

import NavbarTop from './NavbarTop'
import Login from './Login'
import Signup from './Register'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'

import Sidebarlf from '../components/Sidebarlf'
import 'react-sidebar-ui/dist/index.css';

function App() {

  return (
    <>
      <Router>
        <Sidebarlf />
          <NavbarTop />
          <Switch>
            <Route path='/' exact component={home} />
            <Route path='/about' exact component={about} />
            <Route path='/contacts' exact component={contacts} />
            {/* <Route path='/dashboard' exact component={dashboard} /> */}

            <Route path="/register" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/update-profile" exact component={UpdateProfile}/>
          </Switch>
      </Router> 


      
    </>
  )
}

export default App
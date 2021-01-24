import '../App.css'
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "react"


import about from '../pages/AboutPage'
import contacts from '../pages/ContactPage'
import home from '../pages/HomePage'

import NavbarTop from './NavbarTop'
import Login from './Login'
import Signup from './Register'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Dashboard  from '../components/Dashboard'
import {AuthProvider, useAuth} from '../contexts/AuthContext'


import 'react-sidebar-ui/dist/index.css';
import Sidebar from './Sidebar'
import News from './News'


function App() {


  return (
    <>
      <AuthProvider>
      <Router>
        {/*<Sidebarlf />*/}
        <NavbarTop/>
          <Switch>
            <Route path='/' exact component={home} />
            <Route path='/about' exact component={about} />
            <Route path='/contacts' exact component={contacts} />
            {/*<PrivateRoute path='/dashboard' exact component={Dashboard} />*/}

            <Route path="/register" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/update-profile" exact component={UpdateProfile}/>
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
      </Router> 
      </AuthProvider>
    </>
  )
}

export default App
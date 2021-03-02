import '../App.css'
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import about from '../pages/AboutPage'
import contacts from '../pages/ContactPage'
import home from '../pages/HomePage'
import NavbarTop from './NavbarTop'
import Login from './Login'
import Signup from './Register'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Dashboard from '../components/Dashboard'
import AddFunds from './AddFunds'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import 'react-sidebar-ui/dist/index.css';
import Sidebar from './Sidebar'
import Portfolio from './Portfolio'


function App() {
  const { currentUser } = useAuth();
  if (currentUser) {
    return (
      <>
        <AuthProvider >
          <Router>

            <Sidebar />

            <Switch>
              <Route path='/' exact component={home} />
              <Route path='/about' exact component={about} />
              <Route path='/contacts' exact component={contacts} />
              <Route path="/register" exact component={Signup} />
              <Route path="/login" exact component={Login} />
              <Route path="/forgot-password" exact component={ForgotPassword} />
              <Route path="/update-profile" exact component={UpdateProfile} />
              <Route path="/add-funds" exact component={AddFunds} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/portfolio" component={Portfolio}/>
            </Switch>

          </Router>
        </AuthProvider>
      </>
    )
  } else {
    return (
      <>
        <AuthProvider>
          <Router>
            <NavbarTop />
            <Switch>
              <Route path='/' exact component={home} />
              <Route path='/about' exact component={about} />
              <Route path='/contacts' exact component={contacts} />
              <Route path="/register" exact component={Signup} />
              <Route path="/login" exact component={Login} />
              <Route path="/forgot-password" exact component={ForgotPassword} />
            </Switch>
          </Router>
        </AuthProvider>
      </>
    )

  }
}

export default App
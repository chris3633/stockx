import '../App.css'
import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Sidebar from "./Sidebar"
import Overview from '../pages/Overview'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from '../pages/Reports'
import Team from '../pages/Teams'

function App() {
  return (
    <>
     
      <Router>
        <Sidebar />
          <Switch>
            <Route path='/overview' exact component={Overview} />
            <Route path='/reports' exact component={Reports} />
            <Route path='/reports/reports1' exact component={ReportsOne} />
            <Route path='/reports/reports2' exact component={ReportsTwo} />
            <Route path='/reports/reports3' exact component={ReportsThree} />
            <Route path='/team' exact component={Team} />
          </Switch>
          
      </Router> 
      
    
    
          
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    </>
  )
}

export default App
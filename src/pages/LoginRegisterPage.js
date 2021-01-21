import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import RegisterPage from "../components/Register"
import LoginPage from "../components/Login"
import ForgotPassword from "../components/ForgotPassword"

import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"

function LoginRegisterPage() {
    return (
        <div>
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                    >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Router>
                        <AuthProvider>
                            <Switch>
                            <Route path="/RegisterPage" component={RegisterPage} />
                            <Route path="/LoginPage" component={LoginPage} />
                            <Route path="/forgot-password" component={ForgotPassword} />
                            </Switch>
                        </AuthProvider>
                        </Router>
                    </div>
                </Container> 
                    </div>
    )
}

export default LoginRegisterPage

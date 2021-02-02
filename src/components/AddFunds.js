import { Card, Container, Link } from '@material-ui/core'
import React from 'react'
import { Alert } from 'react-bootstrap'

export default function AddFunds() {
    

    return (
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              
            <form class="form-inline">
                <div class="form-group">
                    <label class="sr-only">Email</label>
                    <p class="form-control-static">email@example.com</p>
                </div>
                <div class="form-group mx-sm-3">
                    <label for="inputPassword2" class="sr-only">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                </div>
                    <button type="submit" class="btn btn-primary">Confirm identity</button>
            </form> 
            </Card.Body>
          </Card>
          
        </div>
      </Container>
    )

}

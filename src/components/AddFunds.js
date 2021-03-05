import { Card, Container, Form, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { TextField } from '@material-ui/core';
import { useAuth } from '../contexts/AuthContext'
import firebase from 'firebase'

export default function AddFunds() {
  const [size, setSize] = useState(50);
  const { currentUser } = useAuth()
  const [currentCredit, setCurrentCredit] = useState(0)
  const userRef = firebase.database().ref('users/' + window.btoa(currentUser.email))

  useEffect(() => {
    userRef.child('credit').on('value', (snapshot) => {
      setCurrentCredit(snapshot.exportVal());
    })
  })

  function updateCredit() {
    if (window.confirm(document.getElementById('quantity').value + '$ will be added to your funds')) {
      console.log(currentCredit)
      console.log(size)
      var newCredit = Number(currentCredit) + Number(size)
      console.log(newCredit)
      userRef.child('credit').set(newCredit)
    }
  }


  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Add funds</h2>
            <Form class="form-inline" onSubmit={() => updateCredit()}>
              <Form.Group class="form-group">
                <Form.Label >Current funds: </Form.Label>
                {"  "}
                <Form.Label >{currentCredit !== null ? currentCredit.toFixed(2) : 0}$</Form.Label>
              </Form.Group>
              <div class="form-group mx-sm-3" align="center">
                <Form.Label >Select quantity to add</Form.Label>
                <TextField value={size} onChange={(e) => setSize(e.target.value)} type="number" id="quantity" label="quantity" InputProps={{ inputProps: { min: 50, step: 50 } }} required />
              </div>
              <div align='right'>
                <Button type="submit" class="btn btn-primary">Confirm</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

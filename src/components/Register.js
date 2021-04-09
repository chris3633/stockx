import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import firebase from 'firebase'

export default function Signup() {
  const nameRef = useRef()
  const surnameRef = useRef()
  const addressRef = useRef()
  const zipCodeRef = useRef()
  const cityRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  var userRef = firebase.database().ref('users');

  async function handleSubmit(e) {
    e.preventDefault()


    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      if (await signup(emailRef.current.value, passwordRef.current.value)) {
        saveUser(emailRef.current.value, nameRef.current.value, surnameRef.current.value, zipCodeRef.current.value, addressRef.current.value, cityRef.current.value)
        history.push("/dashboard")
      }
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  function saveUser(emailRef, nameRef, surnameRef, zipCodeRef, addressRef, cityRef) {

    var newUserRef = userRef.child(window.btoa(emailRef))
    //var found = false;

    /*     var query = userRef.orderByKey();
    
        query.once("value")
          .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
              var key = childSnapshot.key;
              if (key == window.btoa(emailRef)) {
                found = true;
              }
            });
    
          });
    
        if (found == false) { */
    newUserRef.set({
      name: nameRef,
      surname: surnameRef,
      zipCode: zipCodeRef,
      address: addressRef,
      city: cityRef,
      credit: 0,
    })
    //}
    //console.log(found)
    //return found;
  }


  return (
    <>
      <Container
        className="d-flex justify-content-center"
        style={{ minHeight: "100vh"}}
      >
        <div className="w-100" style={{ marginTop:"100px",marginBottom:"30px", maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4" >Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" ref={nameRef} required />
                </Form.Group>
                <Form.Group id="surname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="surname" ref={surnameRef} required />
                </Form.Group>
                <Form.Group id="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="address" ref={addressRef} required />
                </Form.Group>
                <Form.Group id="zipCode">
                  <Form.Label>ZIP code</Form.Label>
                  <Form.Control type="zipcode" ref={zipCodeRef} required />
                </Form.Group>
                <Form.Group id="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="city" ref={cityRef} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Sign Up
            </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  )
}
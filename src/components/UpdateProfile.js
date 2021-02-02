import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from 'firebase'


export default function UpdateProfile() {
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  
  const { currentUser, updatePassword } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  
  var name
  var surname
  var address
  var city
  var zipCode

  var userRef = firebase.database().ref('users/'+ window.btoa(currentUser.email))
  
  function getValues(){
  userRef.child('name').once('value', (snapshot) => {
    name = snapshot.val();
  });
  userRef.child('surname').once('value', (snapshot) => {
    surname = snapshot.val();
  });
  userRef.child('address').once('value', (snapshot) => {
    address = snapshot.val();
  });
  userRef.child('city').once('value', (snapshot) => {
    city = snapshot.val();
  });
  userRef.child('zipCode').once('value', (snapshot) => {
    zipCode = snapshot.val();
  });
  return [name,surname,address,city,zipCode];
}

  
  var addressRef
  var cityRef
  var zipCodeRef

  function handleUpdate() {
    // A post entry.
    addressRef=document.getElementById('address').value
    cityRef=document.getElementById('city').value
    zipCodeRef=document.getElementById('zipCode').value
    console.log(addressRef)
    console.log(cityRef)
    console.log(zipCodeRef)
    userRef.set({
      address: addressRef,
      city: cityRef,
      zipCode: zipCodeRef
    })
  }

  
  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }
    if (addressRef !== address || cityRef !== city || zipCodeRef !== zipCode) {
      promises.push(handleUpdate(addressRef, cityRef, zipCodeRef))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
      
    
  }

  return (
    <>
    <div className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
      <Card className="w-100" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                disabled='true'
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                disabled={true}
                defaultValue={name}
              />
            </Form.Group>
            <Form.Group id="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                disabled={true}
                defaultValue={surname}
              />
            </Form.Group>
            <Form.Group id="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                defaultValue={getValues()[2]}
                ref={addressRef}
              />
            </Form.Group>
            <Form.Group id="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                defaultValue={getValues()[3]}
                ref={cityRef}
              />
            </Form.Group>
            <Form.Group id="zipCode">
              <Form.Label>Zip code</Form.Label>
              <Form.Control
                defaultValue={getValues()[4]}
                ref={zipCodeRef}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button onClick={()=>handleSubmit} disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
        <Link to="/dashboard">Cancel</Link>
      </div>
        </Card.Body>
      </Card>
      
      </div>
    </>
  )
}
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from 'firebase'
import handleUpdate from './HandleUpdateProfile'


export default function UpdateProfile() {
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const addressRef = useRef()
  const cityRef = useRef()
  const zipCodeRef = useRef()

  const { currentUser, updatePassword } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  var name
  var surname
  var address
  var city
  var zipCode
  var operations
  var userRef = firebase.database().ref('users/' + window.btoa(currentUser.email))

  userRef.child('name').on('value', (snapshot) => {
    name = snapshot.val();
  });
  userRef.child('surname').on('value', (snapshot) => {
    surname = snapshot.val();
  });
  userRef.child('address').on('value', (snapshot) => {
    address = snapshot.val();
  });
  userRef.child('city').on('value', (snapshot) => {
    city = snapshot.val();
  });
  userRef.child('zipCode').on('value', (snapshot) => {
    zipCode = snapshot.val();
  });
  userRef.child('orders').on('value', (snapshot) => {
    operations = snapshot.val();
  });

  function handleSubmit() {
    //e.preventDefault()
    console.log(addressRef.current.value)
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    } 
    
    const promises = []
    setLoading(true)
    setError("")

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }
    if(addressRef.current.value && cityRef.current.value && zipCodeRef.current.value){
      promises.push(handleUpdate(currentUser.email,name,surname,addressRef.current.value, cityRef.current.value, zipCodeRef.current.value, operations))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      }) 
      setLoading(false)
  }


  return (
    <>
      <div className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <Card className="w-100" style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  disabled={true}
                  value={currentUser.email}
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
                  defaultValue={address}
                  ref={addressRef}
                />
              </Form.Group>
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  defaultValue={city}
                  ref={cityRef}
                />
              </Form.Group>
              <Form.Group id="zipCode">
                <Form.Label>Zip code</Form.Label>
                <Form.Control
                  defaultValue={zipCode}
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
              <Button onClick={()=>handleSubmit()} disabled={loading} className="w-100" >{/*={() => handleUpdate(currentUser,addressRef.current.value, cityRef.current.value, zipCodeRef.current.value, operations,passwordRef,passwordConfirmRef)}*/}
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
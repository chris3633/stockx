import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from 'firebase'
import handleUpdate from './HandleUpdateProfile'
import UpdateForm from './UpdateForm'
import { Component } from "react"
import { render } from "@testing-library/react"



export default function UpdateProfile() {

  //console.log(props.value.email)
  //const userEmail=props.value.email

  const [error, setError] = useState("")

  const { currentUser } = useAuth()

  const userRef = firebase.database().ref('users/' + window.btoa(currentUser.email))
  var userData = { name: '', surname: '', address: '', city: '', zipCode: '', orders: {} }
  //console.log(userEmail)
  /*userRef.child('name').on('value', (snapshot) => {
    userData.name = snapshot.val();
    document.getElementById('name').defaultValue=snapshot.val();
  });
  userRef.child('surname').on('value', (snapshot) => {
    userData.surname = snapshot.val();
    document.getElementById("surname").defaultValue=snapshot.val();
  });
  userRef.child('address').on('value', (snapshot) => {
    userData.address = snapshot.val();
    document.getElementById("address").defaultValue=snapshot.val();
  });
  userRef.child('city').on('value', (snapshot) => {
    userData.city = snapshot.val();
    document.getElementById("city").defaultValue=snapshot.val();
  });
  userRef.child('zipCode').on('value', (snapshot) => {
    userData.zipCode = snapshot.val();
    document.getElementById("zipCode").defaultValue=snapshot.val();
  });
  userRef.child('orders').on('value', (snapshot) => {
    userData.orders = snapshot.val();
  });*/

  userRef.on('value', (snapshot) => {
    userData.name = snapshot.exportVal().name;
    userData.surname = snapshot.exportVal().surname;
    userData.address = snapshot.exportVal().address;
    userData.city = snapshot.exportVal().city;
    userData.zipCode = snapshot.exportVal().zipCode;
    userData.orders = snapshot.exportVal().orders;
    document.getElementById('name').defaultValue = snapshot.exportVal().name;
    document.getElementById("surname").defaultValue = snapshot.exportVal().surname;
    document.getElementById("address").defaultValue = snapshot.exportVal().address;
    document.getElementById("city").defaultValue = snapshot.exportVal().city;
    document.getElementById("zipCode").defaultValue = snapshot.exportVal().zipCode;

  })

  return (
    <>
      <div className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <Card className="w-100" style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            <UpdateForm value={userData} />
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <Form >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  disabled={true}
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  disabled={true}
                  value={userData.name}
                />
              </Form.Group>
              <Form.Group id="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  disabled={true}
                  defaultValue={userData.surname}
                />
              </Form.Group>
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  defaultValue={userData.address}
                  ref={addressRef}
                />
              </Form.Group>
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  defaultValue={userData.city}
                  ref={cityRef}
                />
              </Form.Group>
              <Form.Group id="zipCode">
                <Form.Label>Zip code</Form.Label>
                <Form.Control
                  defaultValue={userData.zipCode}
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
            {/*Update
            </Button>
            </Form> */}
            <div className="w-100 text-center mt-2">
              <Link to="/dashboard">Cancel</Link>
            </div>
          </Card.Body>
        </Card>

      </div>
    </>
  );

}
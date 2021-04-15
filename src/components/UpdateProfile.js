import React, { useState, useEffect } from "react"
import { Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import firebase from 'firebase'

import UpdateForm from './UpdateForm'




export default function UpdateProfile() {

  const [error, setError] = useState("")

  const { currentUser } = useAuth()
  const userRef = firebase.database().ref('users/' + window.btoa(currentUser.email))
  var userData = { name: "", surname: "", address: "", city: "", zipCode: "", credit: 0 };


  var loadForm = (snapshot) => {

    try {

      if (snapshot.hasChild("orders")) {
        userData.orders = snapshot.exportVal().orders;
      }
      userData.name = snapshot.exportVal().name;
      userData.surname = snapshot.exportVal().surname;
      userData.address = snapshot.exportVal().address;
      userData.city = snapshot.exportVal().city;
      userData.zipCode = snapshot.exportVal().zipCode;


      userData.credit = snapshot.exportVal().credit;

      document.getElementById("name").defaultValue = userData.name;
      document.getElementById("surname").defaultValue = userData.surname;
      document.getElementById("address").defaultValue = userData.address;
      document.getElementById("city").defaultValue = userData.city;
      document.getElementById("zipCode").defaultValue = userData.zipCode;
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    userRef.on('value', (snapshot) => loadForm(snapshot))
  });

  return (
    <div className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <Card className="w-100" style={{ marginTop: "30px", marginBottom: "30px", maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <UpdateForm value={userData} />
          <div className="w-100 text-center mt-2">
            <Link to="/dashboard">Cancel</Link>
          </div>
        </Card.Body>
      </Card>

    </div>

  );

}
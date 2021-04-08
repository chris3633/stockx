import React, { useRef, useState, useEffect} from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from 'firebase'
import handleUpdate from './HandleUpdateProfile'
import { TextField } from "@material-ui/core"


const UpdateForm = (props) => {
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const addressRef = useRef()
    const cityRef = useRef()
    const zipCodeRef = useRef()
    const { currentUser, updatePassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    
/* useEffect(()=>{
    addressRef.current=props.value.address
  }); */
    console.log(currentUser)

    function handleSubmit() {
        console.log('3')
        //e.preventDefault()
        console.log(addressRef.current.value)
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("Passwords do not match")
            return false
        }

        const promises = []
        setLoading(true)
        setError("")
        console.log(passwordRef.current.value)
        if (passwordRef.current.value!=="") {
            promises.push(updatePassword(passwordRef.current.value))
        }
        if (addressRef.current.value && cityRef.current.value && zipCodeRef.current.value) {
            if(props.value.orders){
                promises.push(handleUpdate(currentUser.email, props.value.name, props.value.surname, addressRef.current.value, cityRef.current.value, zipCodeRef.current.value, props.value.credit, props.value.orders))
            }else{
                promises.push(handleUpdate(currentUser.email, props.value.name, props.value.surname, addressRef.current.value, cityRef.current.value, zipCodeRef.current.value, props.value.credit))
            }
        }
console.log(promises)
        Promise.all(promises)
            .then(() => {
                history.push("/update-profile")
                alert("Updated with success")
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
            <Form >
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        disabled={true}
                        defaultValue={currentUser.email}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        id="name"
                        disabled={true}
                        //defaultValue={props.value.name}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Surname</Form.Label>
                    <Form.Control 
                        id="surname"
                        disabled={true}
                        //defaultValue={props.value.surname}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        id="address"
                        //defaultValue={props.value.address}
                        ref={addressRef}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        id="city"
                        //defaultValue={props.value.city}
                        ref={cityRef}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Zip code</Form.Label>
                    <Form.Control
                        id="zipCode"
                        //defaultValue={props.value.zipCode}
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
                {error && <Alert variant="danger">{error}</Alert>}
                <Button type="submit" onClick={() => handleSubmit()} disabled={loading} className="w-100" >{/*={() => handleUpdate(currentUser,addressRef.current.value, cityRef.current.value, zipCodeRef.current.value, operations,passwordRef,passwordConfirmRef)}*/}
                Update 
            </Button>
            </Form>
        </>
    )
}
export default UpdateForm;
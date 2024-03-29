import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import handleUpdate from './HandleUpdateProfile'


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

    function handleSubmit() {


        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("Passwords do not match")
            return false
        }

        const promises = []
        setLoading(true)
        setError("")

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }


        if (addressRef.current.value && cityRef.current.value && zipCodeRef.current.value) {
            if (props.value.orders) {
                promises.push(handleUpdate(currentUser.email, props.value.name, props.value.surname, addressRef.current.value, cityRef.current.value, zipCodeRef.current.value, props.value.credit, props.value.orders))
            } else {
                promises.push(handleUpdate(currentUser.email, props.value.name, props.value.surname, addressRef.current.value, cityRef.current.value, zipCodeRef.current.value, props.value.credit))
            }
        }

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
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                        id="surname"
                        disabled={true}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        id="address"
                        ref={addressRef}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        id="city"
                        ref={cityRef}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Zip code</Form.Label>
                    <Form.Control
                        id="zipCode"
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
                <Button onClick={() => handleSubmit()} disabled={loading} className="w-100" >
                    Update
            </Button>
            </Form>
        </>
    )
}
export default UpdateForm;
import firebase from 'firebase'
import { Alert } from 'react-bootstrap';


export default function handleUpdate(userEmail, name, surname, addressRef, cityRef, zipCodeRef, operations) {

  try{
    var userRef = firebase.database().ref('users/' + window.btoa(userEmail))
  
    if (addressRef !== '' && cityRef !== '' && zipCodeRef !== '') {
        userRef.set({
            name: name,
            surname: surname,
            address: addressRef,
            city: cityRef,
            zipCode: zipCodeRef,
            orders: operations
        })
        return true
    }
  }
  catch(e){
    console.log(e)
    return false
  }
}

/* const handleSubmit(addressRef, cityRef, zipCodeRef,operations)=> {
    e.preventDefault()
    console.log(addressRef)
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    console.log('3')
    const promises = []
    setLoading(true)
    setError("")

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
      console.log('4')
    }
    if (addressRef !== '' || cityRef !== '' || zipCodeRef !== '') {
      setLoading(true)
      console.log('6')

      console.log(addressRef)
      console.log(cityRef)
      /* if (addressRef !== address) {//non funziona perché sovrascrive
        userRef.set({
          address: "via",
        })
      }
      if (cityRef !== city) {//non funziona perché al campo city aggiunge un figlio city con contenuto
        userRef.child('city').set({
          city: cityRef
        })
      }
      if (zipCodeRef !== zipCode) {
        userRef.child('zipCode').set({
          zipCode: zipCodeRef
        })
      }
      setLoading(false)
    }

    Promise.all(promises)
      .then(() => {
        console.log('5')
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      }) */

/* function handleUpdate(addressRef, cityRef, zipCodeRef,operations) {
  // A post entry.
  setLoading(true)
  console.log('6')

  console.log(addressRef)
  console.log(cityRef)
  /* if (addressRef !== address) {//non funziona perché sovrascrive
    userRef.set({
      address: "via",
    })
  }
  if (cityRef !== city) {//non funziona perché al campo city aggiunge un figlio city con contenuto
    userRef.child('city').set({
      city: cityRef
    })
  }
  if (zipCodeRef !== zipCode) {
    userRef.child('zipCode').set({
      zipCode: zipCodeRef
    })
  }
  setLoading(false)
  return true
}

} */
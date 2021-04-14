import firebase from 'firebase'


export default function handleUpdate(userEmail, name, surname, addressRef, cityRef, zipCodeRef, credit, operations) {

  try {
    var userRef = firebase.database().ref('users/' + window.btoa(userEmail))
    if (addressRef !== '' && cityRef !== '' && zipCodeRef !== '') {
      if (operations) {
        userRef.set({
          name: name,
          surname: surname,
          address: addressRef,
          city: cityRef,
          zipCode: zipCodeRef,
          orders: operations,
          credit: credit
        })
      }
      else {
        userRef.set({
          name: name,
          surname: surname,
          address: addressRef,
          city: cityRef,
          zipCode: zipCodeRef,
          credit: credit
        })
      }

      return true
    }
  }
  catch (e) {
    console.log(e)
    return false
  }
}


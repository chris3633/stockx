import firebase from 'firebase'
import { Alert } from 'react-bootstrap';

export default function closePosition(currentUser, symbol, date, profit) {
    const userEmail = currentUser.currentUser.email;

    var userRef = firebase.database().ref('users/' + window.btoa(userEmail));
    var credit

    userRef.child("orders").on('value', (snapshot) => {
        console.log(snapshot.exportVal())
        snapshot.forEach(element => {
            /*console.log(element.val())
            console.log(element)
            console.log(element.val().date)
                console.log(date)
                console.log(element.val().symbol)
                console.log(symbol)*/
            if (element.val().date === date && element.val().symbol === symbol) {
                userRef.child("orders").child(element.key).remove()
                console.log('entrato')

            }
        })
    })
    userRef.on('value', (snapshot) => {
        credit = snapshot.exportVal().credit
    })

    userRef.child('credit').set(+credit + +profit) //il + prima delle varibili serve a farli considerarli come numeri
}
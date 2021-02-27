import firebase from 'firebase'
import { Alert } from 'react-bootstrap';

export default async function closePosition(currentUser, symbol, date) {
    const userEmail = currentUser.currentUser.email;

    var userRef = firebase.database().ref('users/' + window.btoa(userEmail) + "/orders");

    userRef.on('value',(snapshot)=>{
        console.log(snapshot.exportVal())
        snapshot.forEach(element => {
            console.log(element.key)
            if(element.date === date && element.symbol === symbol)
                //userRef.child(element.key).remove()
                console.log(element.date)
                console.log(date)
                console.log(element.symbol)
                console.log(symbol)
                
        })
    })
}
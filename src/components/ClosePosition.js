import firebase from 'firebase'
import { Alert } from 'react-bootstrap';
import { useState } from 'react'

export default function closePosition(currentUser, symbol, date, pl) {
    const userEmail = currentUser.currentUser.email;
    var loading = true;

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
        credit = snapshot.exportVal().credit;
        loading = false;
    })

    console.log(credit)
    if (!loading) {
        if (pl < 0) {
            if (+credit >= pl) {
                userRef.child("credit").set(+credit + +pl) //il + prima delle varibili serve a farli considerarli come numeri
            } else {
                window.confirm("Ops! You don't have enough funds to proceed. You can top up your funds from the sidebar menu under My account->Add funds.")
            }
        } else {
            userRef.child("credit").set(+credit + +pl)
        }
    }

}
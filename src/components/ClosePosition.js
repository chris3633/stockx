import firebase from 'firebase'

export default function closePosition(currentUser, symbol, date, pl, credit) {
    const userEmail = currentUser.currentUser.email;
    var loading = true;

    var userRef = firebase.database().ref('users/' + window.btoa(userEmail));
    var credit

    userRef.child("orders").on('value', (snapshot) => {
        snapshot.forEach(element => {
            if (element.val().date === date && element.val().symbol === symbol) {
                userRef.child("orders").child(element.key).remove()

            }
        })
    })

    if (pl < 0) {
        if (+credit >= pl) {
            userRef.child("credit").set(+credit + +pl) //il + prima delle varibili serve a farli considerare come numeri
        } else {
            alert("Ops! You don't have enough funds to proceed. You can top up your funds from the sidebar menu under My account->Add funds.")
        }
    } else {
        if (+credit)
            userRef.child("credit").set(+credit + +pl)
    }
}
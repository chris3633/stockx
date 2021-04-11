import firebase from 'firebase'

export default function closePosition(currentUser, symbol, date, pl) {
    const userEmail = currentUser.currentUser.email;
    var loading = true;

    var userRef = firebase.database().ref('users/' + window.btoa(userEmail));
    var credit

    userRef.child("orders").on('value', (snapshot) => {
        console.log(snapshot.exportVal())
        snapshot.forEach(element => {
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
                userRef.child("credit").set(+credit + +pl) //il + prima delle varibili serve a farli considerare come numeri
            } else {
                alert("Ops! You don't have enough funds to proceed. You can top up your funds from the sidebar menu under My account->Add funds.")
            }
        } else {
            userRef.child("credit").set(+credit + +pl)
        }
    }
}
import firebase from 'firebase'
import { Alert } from 'react-bootstrap';

export default async function addOperation(currentUser, quantity, operationType, stock) {
  const userEmail = currentUser.email;
  const companyName = stock.quote.companyName;
  const symbol = stock.quote.symbol;
  const sector = stock.quote.sector;
  const date = new Date().toLocaleString();
  const totalOperation = stock.quote.delayedPrice * quantity
  console.log(date)
  console.log(userEmail)
  console.log(symbol)
  console.log(quantity)
  console.log(operationType)
  console.log(totalOperation)

  var credit



  var userRef = firebase.database().ref('users/' + window.btoa(userEmail));

  userRef.on('value', (snapshot) => {
    credit = snapshot.exportVal().credit
    console.log(credit)
  })

  userRef.child('credit').set(credit - totalOperation)

  //console.log(userRef)
  //userRef.set()

  // inserisco l'ordine, ognugno avrà una chiave univoca
  userRef.child('orders').push().set({
    companyName: companyName,
    symbol: symbol,
    sector: sector,
    quantity: quantity,
    price: stock.quote.delayedPrice,
    operationType: operationType,
    date: date,
    totalOperation: totalOperation
  })

}

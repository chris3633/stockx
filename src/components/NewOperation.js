import firebase from 'firebase'
import { Alert } from 'react-bootstrap';

export default async function addOperation(currentUser, quantity, operationType, stock) {
  const userEmail = currentUser.currentUser.email;
  const symbol = stock.quote.symbol;
  const date = new Date().toLocaleString();
  const totalOperation = stock.quote.delayedPrice * quantity
  console.log(date)
  console.log(userEmail)
  console.log(symbol)
  console.log(quantity)
  console.log(operationType)
  console.log(totalOperation)

  var userRef = firebase.database().ref('users/' + window.btoa(userEmail) + "/orders");
  //console.log('users/'+ window.btoa(userEmail) + "/orders")

  // inserisco l'ordine, ognugno avrà una chiave univoca
  userRef.push().set({
    symbol: symbol,
    quantity: quantity,
    price: stock.quote.delayedPrice,
    operationType: operationType,
    date: date,
    totalOperation: totalOperation
  })

}

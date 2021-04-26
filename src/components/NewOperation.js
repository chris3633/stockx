import firebase from 'firebase'


export default async function addOperation(currentUser, quantity, operationType, stock) {
  const userEmail = currentUser.email;
  const companyName = stock.quote.companyName;
  const symbol = stock.quote.symbol;
  const sector = stock.quote.sector;
  const date = new Date().toLocaleString();
  const totalOperation = stock.quote.iexRealtimePrice * quantity // al posto di iexRealtimePrice c'era delayedPrice


  var credit



  var userRef = firebase.database().ref('users/' + window.btoa(userEmail));

  userRef.on('value', (snapshot) => {
    credit = snapshot.exportVal().credit

  })

  userRef.child('credit').set(credit - totalOperation)


  // inserisco l'ordine, ognugno avrà una chiave univoca
  userRef.child('orders').push().set({
    companyName: companyName,
    symbol: symbol,
    //sector: sector,
    quantity: quantity,
    price: stock.quote.iexRealtimePrice, // al posto di iexRealtimePrice c'era delayedPrice
    operationType: operationType,
    date: date,
    totalOperation: totalOperation
  })

}

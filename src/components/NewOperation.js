
export default async function addOperation(currentUser,quantity,operationType,stock) {
    
    const userEmail = currentUser.currentUser.email;
    const symbol = stock.quote.symbol;
    const date = new Date().toLocaleString();
    const totalOperation=stock.quote.delayedPrice*quantity
    console.log(date)
    console.log(userEmail)
    console.log(symbol)
    console.log(quantity)
    console.log(operationType)
    console.log(totalOperation)

}


import { TableCell, TableRow } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import getStockInfo from "../StockAPI";
import { useAuth } from "../contexts/AuthContext"
import closePosition from './ClosePosition'
import firebase from "firebase"

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
        whiteSpace: 'pre',
    },
});


const StocksHeldRow = (props) => {
    const [orders, setOrders] = useState(props.data)
    const [prezzo, setPrezzo] = useState(props.prezzo)
    const [rtPrice, setRtPrice] = useState([])
    var currentInfo = null
    var actualPrice = {}
    const currentUser = useAuth();
    const [credit, setCredit] = useState(props.credito);
    const [visibility, setVisibility] = useState("visible")
    var userRef = firebase.database().ref('users/' + window.btoa(currentUser.email));
    const [loading, setLoading] = useState(true)
    /*const fetchData = async () => {
        currentInfo = await getStockInfo([orders.symbol]);
        currentInfo && currentInfo.map((element) => {
            actualPrice[element.quote.symbol] = element.quote.delayedPrice
            //console.log(actualPrice[element.quote.symbol]-orders.price)        
            setRtPrice(actualPrice[element.quote.symbol])
            //setRtPrice((Math.random()*1000).toFixed(2))
        })

        //console.log(rtPrice)
        //console.log(orders)
    }
    */

    /*userRef.on('value', (snapshot) => {
        setCredit(snapshot.exportVal().credit);
    })*/

    /*userRef.on('value', (snapshot) =>{
      credit=snapshot.exportVal().credit
      console.log(credit)
    })
console.log(GetCredit())*/

    useEffect(() => {

        const interval = setInterval(async () => {
            setLoading(true)

            userRef.child('credit').on('value', (snapshot) => {
                setCredit(snapshot.exportVal());
            })
            setLoading(false)

        }, 1000);
        return () => {
            window.clearInterval(interval);
        }
    }, [credit, loading, userRef])



    //price=portfolioValue
    //console.log((prezzo * orders.quantity - orders.price * orders.quantity).toFixed(2) + price)
    //setPortfolioValue((prezzo * orders.quantity - orders.price * orders.quantity).toFixed(2) + price)
    /* if (orders.operationType === "buy") {
        //console.log(prezzo*orders.quantity)
        
        setPortfolioValue((prezzo * orders.quantity - orders.price * orders.quantity).toFixed(2) + price)
        //setPortfolioValue(portfolioValue+price)
        //setPortfolioValue(price)
    } else {
        setPortfolioValue((orders.price * orders.quantity - prezzo * orders.quantity).toFixed(2) + price)
        //setPortfolioValue(price)
    } */



    console.log(credit)

    const classes = useRowStyles();

    return (
        <TableRow className={classes.root} style={{ visibility: visibility }}>
            <TableCell align='left'>
                {orders.companyName}
            </TableCell>
            <TableCell align='left'>
                {orders.symbol}
            </TableCell>
            <TableCell align='left'>
                {orders.sector}
            </TableCell>
            <TableCell align='left'>
                {orders.date}
            </TableCell>
            <TableCell align='center'>
                {orders.quantity}
            </TableCell>
            <TableCell align='center'>
                {orders.operationType}
            </TableCell>
            <TableCell align='left'>
                {orders.price.toFixed(2)} $
                </TableCell>
            <TableCell align='left'>
                {prezzo} $
                </TableCell>
            <TableCell style={{ color: ((orders.operationType === "buy") ? ((prezzo - orders.price.toFixed(2) >= 0) ? "green" : "red") : (prezzo - orders.price.toFixed(2) > 0) ? "red" : "green") }} align='left'>
                {(orders.operationType === "buy") ? ((prezzo * orders.quantity - orders.price.toFixed(2) * orders.quantity).toFixed(3)) : (orders.price.toFixed(2) * orders.quantity - prezzo * orders.quantity).toFixed(3)} $
                </TableCell>
            <TableCell>
                <Button onClick={() => {
                    var profit
                    if (orders.operationType === "buy") {
                        profit = (prezzo * orders.quantity - orders.price * orders.quantity).toFixed(2)
                    } else {
                        profit = (orders.price * orders.quantity - prezzo * orders.quantity).toFixed(2)
                    }

                    if(+profit < 0){
                        if (+credit >= +profit) {
                            closePosition(currentUser, orders.symbol, orders.date, profit)
                            setVisibility("collapse")
                        } else {
                            window.confirm("Ops! You don't have enough funds to proceed. You can top up your funds from the sidebar menu under My account->Add funds.")
                        }
                    }else{
                        closePosition(currentUser, orders.symbol, orders.date, profit)
                        setVisibility("collapse")
                    }

                }}>Close position</Button>
            </TableCell>
        </TableRow>
    )
}

export default StocksHeldRow;
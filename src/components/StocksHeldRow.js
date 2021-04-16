import { TableCell, TableRow } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';

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
    const currentUser = useAuth();
    const [credit, setCredit] = useState(props.credito);
    const [visibility, setVisibility] = useState("visible")
    var userRef = firebase.database().ref('users/' + window.btoa(currentUser.email));
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const interval = setInterval(async () => {
            setLoading(true)
            if(loading){
            userRef.child('credit').on('value', (snapshot) => {
                setCredit(snapshot.exportVal());
            })
            setLoading(false)
            }else console.log("Mi sono bloccato")

        }, 1000);
        return function cleanup() {
            window.clearInterval(interval);
            setLoading(false)
        }
    }, [])



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
            <TableCell style={{ color: ((orders.operationType === "buy") ? ((prezzo) ? ((prezzo - orders.price.toFixed(2) >= 0) ? "green" : "red") : "black") : (prezzo) ? ((prezzo - orders.price.toFixed(2) > 0) ? "red" : "green") : "black") }} align='left'>
                {(orders.operationType === "buy") ? ((prezzo) ? (prezzo * orders.quantity - orders.price.toFixed(2) * orders.quantity).toFixed(2) : "Loading...") : ((prezzo) ? (orders.price.toFixed(2) * orders.quantity - prezzo * orders.quantity).toFixed(2) : "Loading...")} $
                </TableCell>
            <TableCell>
                <Button onClick={() => {
                    var profit
                    try {
                        if (orders.operationType === "buy") {
                            profit = (prezzo * orders.quantity - orders.price * orders.quantity).toFixed(2)
                        } else {
                            profit = (orders.price * orders.quantity - prezzo * orders.quantity).toFixed(2)
                        }

                        if (+profit < 0) {
                            if (+credit >= +profit) {
                                setVisibility("collapse")
                                closePosition(currentUser, orders.symbol, orders.date, profit, credit)
                            } else {
                                alert("Ops! You don't have enough funds to proceed. You can top up your funds from the sidebar menu under My account->Add funds.")
                            }
                        } else {
                            if (orders.operationType === "buy") {
                                setVisibility("collapse")

                                closePosition(currentUser, orders.symbol, orders.date, prezzo * orders.quantity, credit)
                            } else {
                                setVisibility("collapse")
                                closePosition(currentUser, orders.symbol, orders.date, (+profit + +orders.quantity * +orders.price), credit)
                            }
                        }
                    } catch (e) {
                        console.log(e)
                    }

                }}>Close position</Button>
            </TableCell>
        </TableRow>
    )
}

export default StocksHeldRow;
import { TableCell, TableRow } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import getStockInfo from "../StockAPI";
import { useAuth } from "../contexts/AuthContext"
import closePosition from  './ClosePosition'

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

    useEffect(() => {
            //fetchData();
        /*const interval = setInterval(() => {
            fetchData();
            
        }, 1000);
        return () => {
            window.clearInterval(interval);
        }*/
    }, [prezzo,orders])

    console.log(orders)

    const classes = useRowStyles();

    return (
        <TableRow className={classes.root}>
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
            <TableCell align='left'>
                {orders.price} $
                </TableCell>
            <TableCell align='left'>
                {prezzo} $
                </TableCell>
            <TableCell style={{color: (prezzo - orders.price).toFixed(2) >= 0 ? "green" : "red"}} align='left'>
                {(prezzo*orders.quantity - orders.price*orders.quantity).toFixed(2)} $ 
                </TableCell>
            <TableCell>
                <Button onClick={()=>closePosition(currentUser, orders.symbol, orders.date)}>Close position</Button>
            </TableCell>
        </TableRow>


    )
}

export default StocksHeldRow;
import { TableCell, TableRow } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import getStockInfo from "../StockAPI";

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
    //const [actualPrice,setPrice]=useState()
    console.log(orders.symbol)
    const currentInfo = useRef()
    var actualPrice = { 'AAPL': 0 }
    console.log('1')
    

    useEffect(() => {
        const fetchData = async () => {
            currentInfo.current = await getStockInfo([orders.symbol])
            console.log('2')
            currentInfo.current.map((element) => {

                actualPrice[element.quote.symbol] = element.quote.delayedPrice
                console.log(actualPrice)
            })
        }
        fetchData();
        
    }, [orders,actualPrice])

    const classes = useRowStyles();

    function setPrice(symbol) {
        console.log(currentInfo.current)
        
        return actualPrice[symbol]
    } 

    console.log(actualPrice)
    console.log('3')
    console.log(currentInfo)
    
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
                {setPrice(orders.symbol)} $
                </TableCell>
            <TableCell align='left'>
                {(actualPrice[orders.symbol] - orders.price).toFixed(2)} $
                </TableCell>
            <TableCell>
                <Button>Close position</Button>
            </TableCell>
        </TableRow>


    )
}

export default StocksHeldRow;
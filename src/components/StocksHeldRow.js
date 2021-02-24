import { TableCell, TableRow } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
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
    const currentInfo=props.currentInfo
    const classes = useRowStyles();
console.log(currentInfo)
    

    console.log(orders)
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
                    {orders.price}
                </TableCell>
                <TableCell align='left'>
                    {orders.symbol}
                </TableCell>
                <TableCell align='left'>
                    {orders.symbol}
                </TableCell>
                <TableCell>
                    <Button>Close position</Button>
                </TableCell>
            </TableRow>
        

    )
}

export default StocksHeldRow;
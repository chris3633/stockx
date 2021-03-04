import React, { useEffect, useState } from 'react'
import { TableBody, TableCell, TableRow } from "@material-ui/core";
import StocksHeldRow from './StocksHeldRow'
import getStockInfo from '../StockAPI';

function StocksHeld(props) {

    const [orders, setOrders] = useState(props.operations)
    const [valori, setValori] = useState(props.valori)
    const [currentInfo, setCurrentInfo] = useState()


    useEffect(() => {
        /*const interval = setInterval(async () => {
            await newRow();
            
        }, 3000);
        return () => {
            window.clearInterval(interval);
        }*/
        newRow()
    }, [orders])


    const newRow = () => {
        orders.map((stock) => {
            //console.log(valori[stock.symbol])
            return <StocksHeldRow data={stock}  />
        })
    }

    return (
        <TableBody>
            {        orders.map((stock) => {
            //console.log(valori[stock.symbol])
            return <StocksHeldRow data={stock} prezzo={valori[stock.symbol]} />
        })}
        </TableBody>
    )
}

export default StocksHeld

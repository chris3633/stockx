import React, { useEffect, useState } from 'react'
import { TableBody, TableCell, TableRow } from "@material-ui/core";
import StocksHeldRow from './StocksHeldRow'
import getStockInfo from '../StockAPI';

function StocksHeld(props) {

    const [orders, setOrders] = useState(props.operations)
    const [currentInfo,setCurrentInfo]=useState()

    console.log(orders)

useEffect(()=>{
    /* const interval = setInterval(async () => {
        await newRow();
        
    }, 3000);
    return () => {
        window.clearInterval(interval);
    } */
    newRow()
},[orders])
    /*const newRow = (orders) => {
        orders.map((stock) => {
            setCurrentInfo(getStockInfo([stock.symbol]))
            console.log(currentInfo)
            return <StocksHeldRow data={stock} currentInfo={currentInfo} />
        })
    }*/
    const newRow=()=>{
        return orders.map((stock) => <StocksHeldRow data={stock} />)
    }

    return (
        <TableBody>
            {newRow()}
        </TableBody>
    )
}

export default StocksHeld

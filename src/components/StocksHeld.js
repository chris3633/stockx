import React, { useEffect, useState } from 'react'
import { TableBody, TableCell, TableRow } from "@material-ui/core";
import StocksHeldRow from './StocksHeldRow'
import getStockInfo from '../StockAPI';

function StocksHeld(props) {

    const [orders, setOrders] = useState(props.operations)
    const [currentInfo,setCurrentInfo]=useState()
console.log(orders)
    

    

    /*const newRow = (orders) => {
        orders.map((stock) => {
            setCurrentInfo(getStockInfo([stock.symbol]))
            console.log(currentInfo)
            return <StocksHeldRow data={stock} currentInfo={currentInfo} />
        })
    }*/

    return (
        <TableBody>
            {orders.map((stock) => <StocksHeldRow data={stock} />)}
        </TableBody>
    )
}

export default StocksHeld

import React, { useEffect, useState } from 'react'
import { TableBody, TableCell, TableRow } from "@material-ui/core";
import StocksHeldRow from './StocksHeldRow'

function StocksHeld(props) {

    const [orders,setOrders] = useState(props.operations)
    const currentInfo=props.currentInfo


    return (
        <TableBody>
            {orders.map((stock) => <StocksHeldRow data={stock} currentInfo={currentInfo}/>)}
        </TableBody>
    )
}

export default StocksHeld

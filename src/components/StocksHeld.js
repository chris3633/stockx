import React from 'react'
import { TableBody, TableCell, TableRow } from "@material-ui/core";

function StocksHeld(props) {
    const { orders } = props;
    console.log(orders)
    return (
        <TableBody>
            {orders.map((stock) => {
                <TableRow>
                <TableCell>

                </TableCell>
            </TableRow>
            })}
        </TableBody>
    )
}

export default StocksHeld

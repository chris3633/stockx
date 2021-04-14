import React, { useEffect, useState } from 'react'
import { TableBody, TableCell, TableRow } from "@material-ui/core";
import StocksHeldRow from './StocksHeldRow'
import { makeStyles } from '@material-ui/core/styles';

function StocksHeld(props) {

    const [orders, setOrders] = useState(props.operations)
    const [valori, setValori] = useState(props.valori) //json con prezzi attuali
    const [credito, setCredito] = useState(props.credito)
    const [currentInfo, setCurrentInfo] = useState()
    const [portfolioValue, setPortfolioValue] = useState(0)
    var totalValue = 0;

    console.log(orders)
    console.log(valori)
    useEffect(() => {

    })


    const newRow = () => {
        orders.map((stock) => {
            totalValue = portfolioValue
            if (stock.operationType === "buy") {

                totalValue += ((stock.quantity * valori[stock.symbol] - stock.quantity * stock.price).toFixed(2))

            } else {

                totalValue += ((stock.quantity * stock.price - stock.quantity * valori[stock.symbol]).toFixed(2))

            }
            setPortfolioValue(totalValue)
        })
    }

    const useRowStyles = makeStyles({
        root: {
            '& > *': {
                borderBottom: 'unset',
            },
            whiteSpace: 'pre',
        },
    });

    const classes = useRowStyles();

    return (
        <TableBody>
            {orders.map((stock) => {
                try {
                    if (stock.operationType === "buy") {

                        totalValue += +((stock.quantity * valori[stock.symbol] - stock.quantity * stock.price).toFixed(2))

                    } else {

                        totalValue += +((stock.quantity * stock.price - stock.quantity * valori[stock.symbol]).toFixed(2))

                    }
                    console.log(totalValue)
                } catch (e) {
                    console.log(e)
                }
                return <StocksHeldRow data={stock} prezzo={valori[stock.symbol]} credito={credito} guadagno={stock.quantity * valori[stock.symbol]} />
            })}
            <TableRow className={classes.root} style={{ alignContent: "right", backgroundColor: (totalValue >= 0) ? "green" : "red" }}>
                <TableCell colspan="10" align="center" fontSize="25px">
                    Total positions:{" " + ((orders.length) ? ((totalValue) ? totalValue.toFixed(2) : "0.00") : "Loading...")}$ {/*0.00*/}
                </TableCell>
            </TableRow>
        </TableBody>

    )
}

export default StocksHeld

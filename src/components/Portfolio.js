import React, { useEffect, useState } from 'react'
import { TableCell, TableContainer } from "@material-ui/core";
import TableHead from '@material-ui/core/TableHead';
import { Table, TableRow, Header } from "semantic-ui-react";
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase'
import { useAuth } from "../contexts/AuthContext"
import StocksHeld from './StocksHeld'
import getStockInfo from "../stockAPIPortfolio";


export default function Portfolio() {
    const divStyle = {
        marginLeft: '10px',
        marginRight: '10px',
        textAlign: "center",
    };
    const { currentUser } = useAuth()
    const userRef = firebase.database().ref('users/' + window.btoa(currentUser.email) + '/orders')
    const userRefCredit = firebase.database().ref('users/' + window.btoa(currentUser.email))
    const [loading, setLoading] = useState(true)
    const [currentCredit, setCurrentCredit] = useState(0)
    var dataArray = []


    var dataSymbol = []
    const [array, setArray] = useState([])
    const [arrayPrezzi, setArrayPrezzi] = useState([])
    var actualPrice = []
    var currentInfo = []
    var acquisti = []



    useEffect(() => {

        const interval = setInterval(async () => {
            setLoading(true)
            dataArray = []
            setArray([])
            userRef.on('value', (snapshot) => fetchData(snapshot))

            userRefCredit.child('credit').on('value', (snapshot) => {
                setCurrentCredit(snapshot.exportVal());
            })
            setLoading(false)

        }, 1000);
        return () => {
            window.clearInterval(interval);
        }

    }, [loading, currentCredit])


    const fetchPrice = async (simbolo) => {
        try {
            currentInfo = await getStockInfo(simbolo)
            currentInfo && currentInfo.map((azione) => {
                actualPrice[azione.quote.symbol] = azione.quote.delayedPrice.toFixed(2);
                return setArrayPrezzi(actualPrice)
            })
        } catch (e) { console.log(e); }

    }

    var fetchData = (snapshot) => {
        setArray([])
        snapshot.forEach((element) => {
            dataArray.push(element.val())
            dataSymbol.push(element.val().symbol)
            acquisti.push(element.val().quantity * element.val().price)
        })
        setArray(dataArray)
        fetchPrice(dataSymbol)
    }




    return (

        <div>
            <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
                My Portfolio
            </Header>
            <div style={divStyle}>
                Current credit: {currentCredit.toFixed(2)} $
                <TableContainer component={Paper} >
                    <Table >
                        <TableHead style={{ backgroundColor: "orange" }}>
                            <TableRow>
                                <TableCell align='left'>Company name</TableCell>
                                <TableCell align="left">Symbol</TableCell>
                                <TableCell align="left">Sector</TableCell>
                                <TableCell align='left'>Purchase date</TableCell>
                                <TableCell align='center'>Purchase quantity</TableCell>
                                <TableCell align='center'>Operation type</TableCell>
                                <TableCell align='left'>Purchase price</TableCell>
                                <TableCell align='left'>Actual price</TableCell>
                                <TableCell align='left'>Profit/Loss</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        {!loading ? <StocksHeld operations={array} valori={arrayPrezzi} credito={currentCredit.toFixed(2)} />:<p>You don't have any stock</p>}
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

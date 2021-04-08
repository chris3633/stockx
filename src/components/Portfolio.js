import React, { useEffect, useState, useRef, useCallback } from 'react'
import { TableCell, TableContainer } from "@material-ui/core";
import TableHead from '@material-ui/core/TableHead';
import { Table, TableRow, Header } from "semantic-ui-react";
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase'
import { useAuth } from "../contexts/AuthContext"
import StocksHeld from './StocksHeld'
//import getStockInfo from "../StockAPI";

import getStockInfo from "../stockAPIPortfolio";

import GetCredit from "./Credit"






export default function Portfolio() {
    const divStyle = {
        marginLeft: '10px',
        marginRight: '10px',
    };
    const { currentUser } = useAuth()
    const userRef = firebase.database().ref('users/' + window.btoa(currentUser.email) + '/orders')
    const userRefCredit = firebase.database().ref('users/' + window.btoa(currentUser.email))
    const [orders, setOrders] = useState()
    const [loading, setLoading] = useState(true)
    const [pageIndex, setPageIndex] = useState(0)
    const [currentCredit, setCurrentCredit] = useState(0)
    var dataArray = []
    //var arrayPrezzi = []

    var dataSymbol = []
    const [array, setArray] = useState([])

    const [arrayPrezzi, setArrayPrezzi] = useState([])

    const [rtPrice, setRtPrice] = useState([])
    var actualPrice = []
    var currentInfo = []
    var acquisti = []
    const [portfolioValue, setPortfolioValue] = useState(0)
    //console.log(dataArray)
    /* useEffect(() => {
        setLoading(true)
        
        userRef.once('value', snap=>{if(snap.val())dataArray.push(snap.val());})
        .then(function() {
            setOrders(dataArray);
        })
        setLoading(false)
        console.log(dataArray)
console.log('2')
    },[userRef,dataArray]) */

    /* const buildtable=(dataArray)=>{
            
            userRef.on('value',(snapshot)=>{
                console.log(snapshot.exportVal())
                
                snapshot.forEach(element => {
                    dataArray.push(element.val())
                    console.log(dataArray)
                })
            }) 
            
            return [<StocksHeld operations={dataArray} />]
        
        }; */


    useEffect(() => {

        const interval = setInterval(async () => {
            setLoading(true)
            dataArray = []
            setArray([])
            userRef.on('value', (snapshot) => fetchData(snapshot))
            //fetchPrice(dataSymbol)


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
        currentInfo = await getStockInfo(simbolo)
        currentInfo && currentInfo.map((azione) => {
            actualPrice[azione.quote.symbol] = azione.quote.delayedPrice.toFixed(2);
            setArrayPrezzi(actualPrice)

        })

    }

    var fetchData = (snapshot) => {
        setArray([])
        snapshot.forEach((element) => {
            dataArray.push(element.val())
            console.log(dataArray)
            dataSymbol.push(element.val().symbol)
            acquisti.push(element.val().quantity * element.val().price)
            console.log(acquisti)
        })
        setArray(dataArray)
        fetchPrice(dataSymbol)
    }

    const getPortfolioValue = () => {
        console.log(rtPrice)

        /* array.forEach(operation => {
            
            arrayPrezzi.map((prezzo) => {
                
                //console.log(prezzo)
                if (operation.operationType === "buy") {
                    console.log("qui")
                    //console.log(prezzo * operation.quantity - operation.price * operation.quantity)
                }
                else {

                }
            })
        }); */
    }

    /*const fetchData = async () => {
        currentInfo = await getStockInfo([array.symbol]);
        currentInfo && currentInfo.map((element) => {
            actualPrice[element.quote.symbol] = element.quote.delayedPrice
            //console.log(actualPrice[element.quote.symbol]-orders.price)        
            setRtPrice(actualPrice[element.quote.symbol])
            //setRtPrice((Math.random()*1000).toFixed(2))
        })

        //console.log(rtPrice)
        //console.log(orders)
    }*/


    //console.log(dataArray)
    /* var getOrders=(snapshot)=>{
        setOrders(snapshot.exportVal())
        setLoading(false)
        //orders=snapshot.exportVal()
        
    } */
    //console.log(orders)
    //const page = searchParam !== null ? stocks.slice(pageIndex * 10, pageIndex * 10 + 10) : orders.slice(pageIndex * 10, pageIndex * 10 + 10);

    /* prevPage() {
        if (this.state.pageIndex > 0) {
            this.setState((prevState) => {
                return ({ pageIndex: prevState.pageIndex - 1 })
            })
        }
    }

    nextPage() {
        if ((this.state.pageIndex + 1) * 10 < this.state.stocksInfo.length) {
            this.setState((prevState) => {
                return ({ pageIndex: prevState.pageIndex + 1 })
            })
        }
    }

    handleChangeSearch = ricerca => {
        this.setState({ searchParam: ricerca }, () => this.searchForStock(ricerca));
    }

    searchForStock = stock => {
        try {
            let temp_array = [];
            this.setState({ loading: true });
            for (let element of this.state.stocksInfo) {
                if (element.quote.companyName.toLowerCase().includes(stock.toLowerCase())) {
                    temp_array.push(element);
                }
            }
            this.setState({
                stocks: temp_array,
                searchStock: stock,
                //totalResults: response.totalResults
            });
        } catch (error) {
            this.setState({ error: "No stocks found!" });
        }
        this.setState({ loading: false });
    } */


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
                        {!loading ? <StocksHeld operations={array} valori={arrayPrezzi} credito={currentCredit.toFixed(2)}/> : <p>You don't have any stock</p>}
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

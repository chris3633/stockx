import React, { useEffect, useState, useRef, useCallback } from 'react'
import { TableCell, TableContainer } from "@material-ui/core";
import TableHead from '@material-ui/core/TableHead';
import { Table, TableRow, Header } from "semantic-ui-react";
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase'
import { useAuth } from "../contexts/AuthContext"
import StocksHeld from './StocksHeld'
import getStockInfo from "../StockAPI";


export default function Portfolio() {
    const divStyle = {
        marginLeft: '10px',
        marginRight: '10px',
    };
    const { currentUser } = useAuth()
    const userRef = firebase.database().ref('users/' + window.btoa(currentUser.email) + '/orders')
    const [orders, setOrders] = useState()
    const [loading, setLoading] = useState(true)
    const [pageIndex, setPageIndex] = useState(0)
    const symbol = [];
    var dataArray = []
    const [array,setArray]=useState([])
    var [response, setResponse] = useState()
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
        dataArray=[]
        setArray([])
        userRef.on('value', (snapshot) => fetchData(snapshot))

        /* const interval = setInterval(() => {
            buildtable(dataArray)
            console.log('ciao')
        }, 3000);
        return () => {
            window.clearInterval(interval);
        } */


    },[])

    var fetchData = (snapshot) => {
        //buildtable(dataArray)
        

        //console.log(snapshot.exportVal())

        snapshot.forEach((element) => {
            dataArray.push(element.val())
            //console.log(dataArray)
        })
        setArray(dataArray)
        setLoading(false)
    }

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
                <TableContainer component={Paper} >
                    <Table >
                        <TableHead >
                            <TableRow>

                                <TableCell align='left'>Company name</TableCell>
                                <TableCell align="left">Symbol</TableCell>
                                <TableCell align="left">Sector</TableCell>
                                <TableCell align='left'>Purchase date</TableCell>
                                <TableCell align='center'>Purchase quantity</TableCell>
                                <TableCell align='left'>Purchase price</TableCell>
                                <TableCell align='left'>Actual price</TableCell>
                                <TableCell align='left'>Profit/Loss</TableCell>

                            </TableRow>
                        </TableHead>


                        {!loading ?  <StocksHeld operations={array} />  : <p>You don't have any stock</p>}

                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

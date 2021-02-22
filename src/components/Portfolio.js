import React,{useEffect,useState} from 'react'
import {  TableCell, TableContainer } from "@material-ui/core";
import TableHead from '@material-ui/core/TableHead';
import { Table, TableRow } from "semantic-ui-react";
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase'
import { useAuth } from "../contexts/AuthContext"
import StocksHeld from './StocksHeld'


export default function Portfolio() {
    const divStyle = {
        marginLeft: '10px',
        marginRight: '10px',
    };
    const { currentUser } = useAuth()
    const userRef = firebase.database().ref('users/' + window.btoa(currentUser.email)+'/orders')
    const [orders,setOrders]=useState()
    const [loading,setLoading]=useState(true)
    const [pageIndex, setPageIndex] = useState(0)

    useEffect(() => {
        userRef.once('value').then(snapshot=>
            setOrders(snapshot.exportVal())
            
    ) 
    setLoading(false)
    console.log(orders)
        
      },[userRef])


      
    

    /*var getOrders=(snapshot)=>{
        setOrders(snapshot.exportVal())
        setLoading(false)
        //orders=snapshot.exportVal()
        
    }*/
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
            <div style={divStyle}>
                    <TableContainer component={Paper} >
                        <Table aria-label="collapsible table">
                            <TableHead >
                                <TableRow>

                                    <TableCell>Company name</TableCell>   
                                    <TableCell align="left">Sector</TableCell>
                                    <TableCell align="left">Symbol</TableCell>
                                    <TableCell align="right">Purchase date</TableCell>
                                    <TableCell align="right">Purchase quantity</TableCell>
                                    <TableCell align="right">Purchase price</TableCell>
                                    <TableCell align="right">Actual price</TableCell>
                                    <TableCell align="right">Profit/Loss</TableCell>

                                    </TableRow>
                                    </TableHead>
                                    
                                    
                                    {!loading? <StocksHeld operations={orders}/> : <p>You don't have any stock</p>}

                                    </Table>
                                    </TableContainer>
            </div>

            
        </div>
    )
}

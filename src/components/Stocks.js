import { TableCell, TableContainer, TableHead } from "@material-ui/core";
import { Component } from "react";
import { Header, Table, TableBody, TableRow } from "semantic-ui-react";
import { getStockInfo } from "../StockAPI";
import StockTable from "./StockTable";
import Paper from '@material-ui/core/Paper';
import StockRow from './StockRow'

const divStyle = {
    marginLeft: '15px',
    marginRight: '15px',
};

class Stock extends Component {
    state = {
        stockInfo: [],
        apiError: "",
    };



    render() {
        const { stockInfo, apiError } = this.state;
        return (
            <div>
                <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
                    Trading area
                </Header>
                <div style={divStyle}>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>Company name</TableCell>
                                    <TableCell align="right">Primary exchange</TableCell>
                                    <TableCell align="right">Sector</TableCell>
                                    <TableCell align="right">Symbol</TableCell>
                                    <TableCell align="right">Bid price</TableCell>
                                    <TableCell align="right">Ask price</TableCell>
                                    <TableCell align="right">Market cap</TableCell>
                                    <TableCell align="right">52 week high</TableCell>
                                    <TableCell align="right">52 week low</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                
                                <div>
                                {stockInfo.length > 0 && <StockRow articles={stockInfo} />}
                                {apiError && <p>Could not fetch any stock. Please try again.</p>}
                                </div> 


                            </TableBody>

                        </Table>
                    </TableContainer>
                </div>
            </div>


        );
    }
    async componentDidMount() {
        try {
            const response = await getStockInfo();
            this.setState({ stockInfo: response });
            console.log(response);
        } catch (error) {
            this.setState({ apiError: "Could not find any articles" });
        }
    }
}

export default Stock;
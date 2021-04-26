import { Button, TableCell, TableContainer } from "@material-ui/core";
import TableHead from '@material-ui/core/TableHead';
import { Component } from "react";
import { Header, Table, TableRow } from "semantic-ui-react";
import getStockInfo from "../StockAPI";
import Paper from '@material-ui/core/Paper';
import StockRows from './StockRows'
import SearchBar from "./SearchBar";
import LinearIndeterminate from './LoadingBar'
import GetCredit from "./Credit"



const divStyle = {
    marginLeft: '10px',
    marginRight: '10px',
    textAlign: 'center',
};


class Stocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocksInfo: [],
            apiError: "",
            loading: true,
            pageIndex: 0,
            stocks: [],
            error: "",
            searchParam: null,
        }
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }


    async componentDidMount() {
        this.setState({ loading: true });
        this.setState({ stocksInfo: [] });
        try {
            const response = await getStockInfo();
            this.setState({ stocksInfo: response, loading: false });
        } catch (error) {
            this.setState({ apiError: "Could not find any stock" });
        }
    }

    componentWillUnmount() {
        this.setState({ loading: false });
      }

    prevPage() {
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
            });
        } catch (error) {
            this.setState({ error: "No stocks found!" });
        }
        this.setState({ loading: false });
    }

    render() {
        const { stocksInfo, apiError, pageIndex, stocks, searchParam } = this.state;
        const page = searchParam !== null ? stocks.slice(pageIndex * 10, pageIndex * 10 + 10) : stocksInfo.slice(pageIndex * 10, pageIndex * 10 + 10);
        return (
            <div>
                <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
                    Trading area
                </Header>

                <div style={divStyle}>
                    Current credit: <GetCredit/> $
                    <TableContainer component={Paper} >
                        <Table aria-label="collapsible table">
                            <TableHead style={{ backgroundColor: "orange" }}>
                                <TableRow>
                                    <TableCell>
                                        <p style={{ textAlign: "left", margin: 0 }}>Search a company name</p>
                                        <SearchBar onChange={this.handleChangeSearch} />
                                    </TableCell>
                                    <TableCell>Company name</TableCell>
                                    <TableCell align="left">Primary exchange</TableCell>
                                    {/*<TableCell align="left">Sector</TableCell>*/}
                                    <TableCell align="left">Symbol</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Market cap</TableCell>
                                    <TableCell align="right">52 week high</TableCell>
                                    <TableCell align="right">52 week low</TableCell>
                                </TableRow>
                            </TableHead>

                            {!this.state.loading ? <StockRows stocksInfo={page}/> : null}
                            {apiError && <p>Could not fetch any stock. Please try again.</p>}
                        </Table>
                        {this.state.loading && !apiError ? <div><p>Loading...</p><LinearIndeterminate/></div> : null}
                    </TableContainer>

                    {(pageIndex > 0 ? <Button onClick={this.prevPage}>Prev</Button> : (stocksInfo.length) ? <Button disabled={true} onClick={this.prevPage}>Prev</Button>:null)}
                    {(stocksInfo.length) ? ((pageIndex + 1) * 10 < stocksInfo.length ? <Button onClick={this.nextPage}>Next</Button>:<Button disabled={true} onClick={this.nextPage}>Next</Button>) : null}

                </div>
            </div>
        );
    }

}

export default Stocks;
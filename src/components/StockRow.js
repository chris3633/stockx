import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Box, FormControlLabel, FormGroup, IconButton, Radio, RadioGroup, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { useAuth } from "../contexts/AuthContext"
import addOperation from './NewOperation'
import { Alert, Button } from 'react-bootstrap'
import { Form } from 'semantic-ui-react';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
    whiteSpace: 'pre',
  },
});



const StockRow = (props) => {
  const currentUser = useAuth();
  let quantity = useRef();
  const operationType = useRef()
  
  const { stock } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const symbol = stock.quote.symbol;
  const date = new Date().toLocaleString();

  const [value, setValue] = React.useState("default")
  const [size, setSize] = React.useState(0);

  //addOperation(currentUser,symbol,date,quantity,operationType,stock);
  /* const userEmail=currentUser.currentUser.email;
  const symbol=stock.quote.symbol;

  const date=new Date().toLocaleString();
  //const totalOperation=stock.quote.delayedPrice*quantity.current.value
  console.log(date)
  console.log(userEmail)
  console.log(symbol)
  //console.log(totalOperation) */

    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell >
            {stock.quote.companyName}
          </TableCell>
          <TableCell align="left">{stock.quote.primaryExchange}</TableCell>
          <TableCell align="left">{stock.quote.sector}</TableCell>
          <TableCell align="left">{stock.quote.symbol}</TableCell>
          <TableCell align="right">{stock.quote.delayedPrice} $</TableCell>
          <TableCell align="right">{stock.quote.marketCap} $</TableCell>
          <TableCell align="right">{stock.quote.week52High} $</TableCell>
          <TableCell align="right">{stock.quote.week52Low} $</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Trade
              </Typography>
                <FormGroup>
                  <Table size='small' aria-label='details'>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Quantity
                      </TableCell>
                        <TableCell >
                          Operation type
                      </TableCell>
                        <TableCell>
                          Position size
                      </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody >
                      <TableRow align="center" style={{ verticalAlign: 'middle' }}>
                        <TableCell align="left" style={{ verticalAlign: 'middle' }}>
                          <TextField value={size} onChange={(e) => setSize(e.target.value)} type="number" id="quantity" label="stock quantity" InputProps={{ inputProps: { min: 0 } }} required ref={quantity} />
                        </TableCell>
                        <TableCell align="left" style={{ verticalAlign: 'bottom' }}>
                          <RadioGroup row aria-label="position" name="position" defaultValue="top" align="center" style={{ verticalAlign: 'middle' }} required >
                            <FormControlLabel
                              align="left"
                              value="buy"
                              control={<Radio id='buy' name='radioButton' color="primary" align="center" style={{ verticalAlign: 'middle' }}/>}
                              label="Buy"
                              labelPlacement="start"
                              onChange={() => setValue("buy")}
                            />
                            <FormControlLabel
                              value="sell"
                              control={<Radio id='sell' name='radioButton' color='secondary' align="center" style={{ verticalAlign: 'middle' }}/>}
                              label="Sell"
                              labelPlacement="start"                         
                              onChange={() => setValue("sell")}                                             
                            />
                          </RadioGroup>
                        </TableCell>
                        <TableCell align="left" style={{ verticalAlign: 'middle' }}>
                          <label style={{ fontSize: '20px' }}> {(size*stock.quote.delayedPrice).toFixed(2)} $</label>
                        </TableCell>
                        <TableCell align="center" style={{ verticalAlign: 'middle' }}>
                          <Button variant="success" onClick={() => addOperation(currentUser, document.getElementById("quantity").value, value, stock)} type="submit"> Confirm</Button>
                          
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </FormGroup>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
}

export default StockRow;
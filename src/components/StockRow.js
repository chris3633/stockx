import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Box, FormControlLabel, IconButton, Radio, RadioGroup, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { useAuth } from "../contexts/AuthContext"
import addOperation from './NewOperation'
import { Button } from 'react-bootstrap'
import { Form } from 'semantic-ui-react';
import firebase from 'firebase'


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
    whiteSpace: 'pre',
  },
});



const StockRow = (props) => {
  const { currentUser } = useAuth();
  let quantity = useRef();

  const { stock } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const [value, setValue] = React.useState("buy")
  const [size, setSize] = React.useState(0.1);

  var userRef = firebase.database().ref('users/' + window.btoa(currentUser.email));
  var credit
  userRef.on('value', (snapshot) => {
    credit = snapshot.exportVal().credit
  })


  function checkCredit(total) {
    if (total > credit)
      return false
    else
      return true
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
          </IconButton>
        </TableCell>
        <TableCell>{stock.quote.companyName}</TableCell>
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
              <Form>
                <Table size='small' aria-label='details'>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        Quantity
                      </TableCell>
                      <TableCell>
                        Operation type
                      </TableCell>
                      <TableCell>
                        Position size
                      </TableCell>
                      <TableCell/>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow align="center" style={{ verticalAlign: 'middle' }}>
                      <TableCell align="left" style={{ verticalAlign: 'middle' }}>
                        <TextField value={size} onChange={(e) => setSize(e.target.value)} type="number" id="quantity" label="stock quantity" InputProps={{ inputProps: { min: 0.1, step: 0.1 } }} required ref={quantity}/>
                      </TableCell>
                      <TableCell align="left" style={{ verticalAlign: 'bottom' }}>
                        <RadioGroup row aria-label="position" defaultValue="buy" align="center" style={{ verticalAlign: 'middle' }} required>
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
                        <label style={{ fontSize: '20px' }}> {(size * stock.quote.delayedPrice).toFixed(2)} $</label>
                      </TableCell>
                      <TableCell align="center" style={{ verticalAlign: 'middle' }}>
                        <Button variant="success" onClick={() => { (size > 0) ? ((window.confirm('Are you sure?')) ? ((checkCredit(size * stock.quote.delayedPrice)) ? (addOperation(currentUser, document.getElementById("quantity").value, value, stock) && setOpen(!open)) : (alert("Ops! You don't have enough funds to proceed. You can top up your funds from the sidebar menu under My account->Add funds."))) : alert("Operation aborted!")) : alert("Position size must be a positive number.") }} type="submit"> Confirm</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Form>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default StockRow;
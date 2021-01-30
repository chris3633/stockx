import React, { useReducer, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Text from 'react'
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Box, Button, FormControlLabel, IconButton, Radio, RadioGroup, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import { useAuth } from "../contexts/AuthContext"
import firebase from '../firebase'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

//var userRef=firebase.database().ref('users');



const StockRow = (props) => {
  var currentUser = useAuth()
  var email = currentUser.email

  const quantity = useRef()
  const operationType = useRef()
  

  const { stock } = props;
  console.log(stock);
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  function addOperation(userEmail, symbol, operationType, date, totalOperation){
    userEmail=email;
    symbol=stock.quote.symbol;

    //date=date()
    totalOperation=stock.quote.delayedPrice*quantity

    console.log(operationType)
    console.log(userEmail)
    console.log(symbol)
    console.log(totalOperation)
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {stock.quote.companyName}
        </TableCell>
        <TableCell align="right">{stock.quote.primaryExchange}</TableCell>
        <TableCell align="right">{stock.quote.sector}</TableCell>
        <TableCell align="right">{stock.quote.symbol}</TableCell>
        <TableCell align="right">{stock.quote.delayedPrice} $</TableCell>
        <TableCell align="right">{stock.quote.delayedPrice-0.25} $</TableCell>
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
                      <TextField type="number" id="standard-basic" label="stock quantity"  required ref={quantity}/>
                    </TableCell>
                    <TableCell align="left" style={{ verticalAlign: 'bottom' }}>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top" align="center" style={{ verticalAlign: 'middle' }} required ref={operationType}>
                      <FormControlLabel
                        align="left"
                        value="buy"
                        control={<Radio color="primary" align="center" style={{ verticalAlign: 'middle' }}/>}
                        label="Buy"
                        labelPlacement="start"
                      />
                      <FormControlLabel
                        value="sell"
                        control={<Radio color='secondary'/>}
                        label="Sell"
                        labelPlacement="start"
                      />
                    </RadioGroup>
                    </TableCell>
                    <TableCell align="left" style={{ verticalAlign: 'middle' }}>
                      <label style={{ fontSize:'20px' }}>label</label>
                      </TableCell>
                    <TableCell align="center" style={{ verticalAlign: 'middle' }}>
                      <Button onClick={addOperation} type="submit"> Confirm</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default StockRow;
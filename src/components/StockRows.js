import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import StockRow from "./StockRow";
import { TableBody, TableCell, TableRow } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
}));

function StockRows(props){
  const {stocksInfo}=props;
  console.log(stocksInfo);
  const classes = useStyles();
 return( <TableBody>
  {stocksInfo.map((stock) => <StockRow stock={stock}/>)}
  </TableBody> ); 
  
};

export default StockRows;
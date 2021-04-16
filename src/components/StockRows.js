import React from "react";
import StockRow from "./StockRow";
import { TableBody } from "@material-ui/core";



function StockRows(props) {
  const { stocksInfo } = props;
  return (<TableBody>
    {stocksInfo.map((stock) => <StockRow stock={stock}/>)}
  </TableBody>);

};

export default StockRows;
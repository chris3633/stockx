 import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Text from 'react'

/*
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  text:{
    height: 100,
  },

});


const MediaCard = (props) => {
  const { article } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}  >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={article.promoImage.url}
        />
        <CardContent>
          <Typography noWrap className={classes.heading} gutterBottom variant="h5" component="h2" >
            {article.shorterHeadline}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {article.headline}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography >
          {article.dateLastPublished.split("T")[0]}
        </Typography>
        <a href={article.url} target="_blank" > Read article </a>
      </CardActions>
    </Card>
    
  );

}
export default MediaCard; */


import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
//import { Collapse } from 'bootstrap';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const StockRow=(props)=> {
  const { stock } = props;
  console.log(stock);
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

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
        <TableCell align="right">{stock.quote.delayedPrice} $</TableCell>
        <TableCell align="right">{stock.quote.marketCap}</TableCell>
        <TableCell align="right">{stock.quote.week52High} $</TableCell>
        <TableCell align="right">{stock.quote.week52Low} $</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">    
                History
              </Typography>
                <Table size='small' aria-label='details'>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        campo1
                      </TableCell>
                      <TableCell>
                        campo2
                      </TableCell>
                      <TableCell>
                        campo3
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                    <TableCell>
                        camporiga1
                      </TableCell>
                      <TableCell>
                      camporiga2
                      </TableCell>
                      <TableCell>
                      camporiga3
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
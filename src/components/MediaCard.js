import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Tab } from 'bootstrap';
import { rgbToHex, TableCell, TableRow } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';



const useStyles = makeStyles({
  root: {
    width: '49%',
    height:'100%',
    display: 'inline-block',
    margin: 5,
  },
  media: {
    height: 300,
  },
});

const MediaCard = (props)=> {
  const {article}=props;
  const classes = useStyles();
  return (
    
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={article.urlToImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography >
          {article.publishedAt.split("T")[0]}
        </Typography>
        <Link target='_blank' to={article.url}>
          Learn More
        </Link>
      </CardActions>
    </Card>
    
  );
  
}
export default MediaCard; 
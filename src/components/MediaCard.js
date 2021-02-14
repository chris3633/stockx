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


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  text: {
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
export default MediaCard; 
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 180,
  },
  text: {
    height: 50,
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
        <a href={article.url} target="_blank" rel="noreferrer"> Read article </a>
      </CardActions>
    </Card>

  );

}
export default MediaCard;
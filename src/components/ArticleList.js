import React from "react";
import MediaCard from "./MediaCard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
}));

const MediaCards = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      className={classes.root}
    >
      {props.articles.map((article, index) => (
        <Grid item xs={3} key={article.title + index}>
          <MediaCard article={article} key={article.title + index} />
        </Grid>
      ))}
    </Grid>
  );
};



export default MediaCards;
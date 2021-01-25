import { Container } from "@material-ui/core";
import React from "react";
import MediaCard from "./MediaCard";

const MediaCards = (props) => {
  return (
    <Container>
      {props.articles.map((article,index) => (
        <MediaCard article={article} key={article.title+index}/>
      ))}
    </Container>
  );
};

export default MediaCards;
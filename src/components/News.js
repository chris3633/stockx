import { Grid } from "@material-ui/core";
import React, {Component} from "react";
import { Container, Header } from "semantic-ui-react";
import { getBitcoinArticles } from "../NewsAPI";
import MediaCards from './ArticleList'


 class News extends Component {
    state = {
    articles: [],
    apiError: "",
  };


  render() {
    const { articles, apiError } = this.state;
  return (
    <div  >
      <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
        Bitcoin articles
      </Header>
      {articles.length > 0 && <MediaCards articles={articles} />}
      {apiError && <p>Could not fetch any articles. Please try again.</p>}
    </div>
  );  
  }
  async componentDidMount() {
    try {
      const response = await getBitcoinArticles();
      this.setState({ articles: response.articles });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }
}

export default News;
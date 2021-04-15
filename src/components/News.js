import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { getLatestArticles } from "../NewsAPI";
import MediaCards from './ArticleList'



class News extends Component {
  state = {
    articles: [],
    apiError: "",
  };


  render() {
    const { articles, apiError } = this.state;
    return (
      <div>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
          Latest news
      </Header>
        <div>
          {articles.length > 0 && <MediaCards articles={articles} />}
          {apiError && <p>Could not fetch any articles. Please try again.</p>}
        </div>

      </div>
    );
  }
  async componentDidMount() {
    try {
      const response = await getLatestArticles();
      this.setState({ articles: response.data.mostPopular.assets });
      //      console.log(response.data.mostPopular.assets);
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }
}

export default News;
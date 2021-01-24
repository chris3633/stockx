export const getBitcoinArticles = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      const json = await response.json();
      return json;
      
  };

  
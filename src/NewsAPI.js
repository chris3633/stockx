export const getLatestArticles = async () => {
  const response = await fetch(
     `https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`

  );
  const json = await response.json();
  return json;

};


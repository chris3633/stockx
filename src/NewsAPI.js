
export const getLatestArticles = async () => {
  const response = await fetch("https://cnbc.p.rapidapi.com/news/list-trending", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": process.env.REACT_APP_NEWS_API_KEY,
      "x-rapidapi-host": "cnbc.p.rapidapi.com"
    }
  })
  const json = await response.json();
  return json;

};

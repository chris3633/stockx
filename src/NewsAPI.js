/* export const getLatestArticles = async () => {
  const response = await fetch(
     `https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`

  );
  const json = await response.json();
  return json;

}; */



export const getLatestArticles = async () => {
  const response = await fetch("https://cnbc.p.rapidapi.com/news/list-trending", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": process.env.REACT_APP_NEWS_API_KEY,
      "x-rapidapi-host": "cnbc.p.rapidapi.com"
    }
  }) 
  const json = await response.json();
  console.log(json);
  return json; 

};

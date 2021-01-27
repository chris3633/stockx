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
      "x-rapidapi-key": "a94adea015mshbc01f81ba39516ep1f3c23jsna3b52a7d8eaa",
      "x-rapidapi-host": "cnbc.p.rapidapi.com"
    }
  }) 
  const json = await response.json();
  console.log(json);
  return json; 




};

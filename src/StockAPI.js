const stocksList = ['aapl', 'msft', 'intc', 'goog', 'amzn', 'tsla', 'fb', 'baba', 'v', 'jpm', 'wmt', 'nvda', 'pg',
    'ma', 'dis', 'hd', 'pypl', 'bac', 'nflx', 'vz', 'adbe', 'dal', 'luv', 'ual', 'ko', 't',
    'nke', 'pfe', 'xom', 'pep', 'orcl', 'csco', 'cvx', 'acn', 'azn', 'wfc', 'mcd'];

var lista = [];
var json;

async function getStockInfo(stocks) {
    var element
    if (!stocks) {
        lista = []
        for (element of stocksList) {
            /*const response = await fetch("https://investors-exchange-iex-trading.p.rapidapi.com/stock/" + element + "/book", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_STOCK_API_KEY,
                    "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com"
                }
            })*/
            const response = await fetch("https://cloud.iexapis.com/stable/stock/" + element + "/book?token=sk_663d0e47472540638ff26a8ba3ff7434")
            if(response.ok){
                json = await response.json();
                lista.push(json);
            }
        }
        return lista;
    }
    else {
        for (element of stocks) {
            /*const response = await fetch("https://investors-exchange-iex-trading.p.rapidapi.com/stock/" + element + "/book", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_STOCK_API_KEY,
                    "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com"
                }
            })*/
            const response = await fetch("https://cloud.iexapis.com/stable/stock/" + element + "/book?token=sk_663d0e47472540638ff26a8ba3ff7434")
            if(response.ok){
                json = await response.json();
                lista.push(json);
            }
        }
        return lista;
    }


};
export default getStockInfo;

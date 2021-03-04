const stocksList = ['aapl', 'msft', 'intc', 'goog', 'amzn', 'tsla', 'fb', 'baba', 'v', 'jpm', 'wmt', 'nvda', 'pg',
    'ma', 'dis', 'hd', 'pypl', 'bac', 'nflx', 'vz', 'adbe', 'dal', 'luv', 'ual', 'ko', 't',
    'nke', 'pfe', 'xom', 'pep', 'orcl', 'csco', 'cvx', 'acn', 'azn', 'wfc'];

var lista = [];
var json;

async function getStockInfo(stocks) {
    if (!stocks) {
        lista = []
        for (var element of stocksList) {
            const response = await fetch("https://investors-exchange-iex-trading.p.rapidapi.com/stock/" + element + "/book", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_STOCK_API_KEY,
                    "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com"
                }
            })
            json = await response.json();
            lista.push(json);
            console.log("check API trading area");
        }
        console.log(json);
        console.log(lista)
        return lista;
    }
    else {
        for (var element of stocks) {
            const response = await fetch("https://investors-exchange-iex-trading.p.rapidapi.com/stock/" + element + "/book", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_STOCK_API_KEY,
                    "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com"
                }
            })
            json = await response.json();
            lista.push(json);
            console.log("check API trading area");
        }
        console.log('return');
        return lista;
    }


};
export default getStockInfo;

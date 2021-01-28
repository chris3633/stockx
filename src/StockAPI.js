const stocksList = ['aapl', 'msft', 'intc', 'goog', 'amzn', 'tsla', 'fb', 'baba', 'v', 'jpm', 'wmt', 'nvda', 'pg',
    'ma', 'dis', 'hd', 'pypl', 'bac', 'nflx', 'vz', 'adbe', 'dal', 'luv', 'ual', 'ko', 't',
    'nke', 'pfe', 'xom', 'pep', 'orcl', 'csco', 'cvx', 'acn', 'azn', 'wfc'];
let response = [];
let lista = [];
let json;


/* export const getStockInfo = async () => {
    stocksList.forEach(async element => {
        response = (await fetch("https://investors-exchange-iex-trading.p.rapidapi.com/stock/" + element + "/book", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a94adea015mshbc01f81ba39516ep1f3c23jsna3b52a7d8eaa",
                "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com"
            }
        }))
        json = await response.json();
        //console.log("check Api1");

        lista.push(json);
    })

    //console.log("check return api");
    return lista;

};

export default getStockInfo; */
async function getStockInfo(){
    for( let element of stocksList) {
        const response = await fetch("https://investors-exchange-iex-trading.p.rapidapi.com/stock/" + element + "/book", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a94adea015mshbc01f81ba39516ep1f3c23jsna3b52a7d8eaa",
                "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com"
            }
        })
        json=await response.json();
        lista.push(json);
        console.log("check Api1");
    }
console.log('return');
   return lista;
    

};
export default getStockInfo;


var apiKey = {
    key: 'SUA API KEY AQUI:)'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((Response) => {
        if(!Response.ok) throw new Error ('Erro ao executar a requisição, status' + Response.status);
        return Response.json();
    })
    .then((api) => {
        console.log(api);
    })
    .catch((error) => {
        console.error(error.message);
    });
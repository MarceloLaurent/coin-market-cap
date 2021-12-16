
var apiKey = {
    key: 'SUA API KEY AQUI:)'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((Response) => {
        if(!Response.ok) throw new Error ('Erro ao executar a requisição, status' + Response.status);
        return Response.json();
    })
    .then((api) => {
        
        var texto = "";

        for(let i = 0; i < 10; i++){
            texto = texto + `
                  
            <div class="media">
                <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                </div>
            </div>
       
            `;

            document.getElementById("coins").innerHTML = texto;
            
        }
    })
    .catch((error) => {
        console.error(error.message);
    });
var anoData = [], modalidadeData = [], valorCrecheData = [], valorFundData = [];


async function repasseChart() {
    await getRepasseData()
    await getCrecheData()
    await getFundData

    const ctx = document.getElementById('line-chartVitoria').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoData,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheData,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Fundamental",
                            data: valorFundData,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                        },
                     ]
            }
        })

}

repasseChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseData(){
    var Rep = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=vitoria_do_jari&esferaGoverno=municipal"

    var response = await fetch(Rep,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var data = await response.json();
    
    const ano = data.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoData = anoU
}
async function getCrecheData(){
   var Crech = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsino=creche"

    response = await fetch(Crech,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    data = await response.json();
    const valorCreche = data.map((x) => x.valorTotalEscolas)
    valorCrecheData = valorCreche
}
async function getFundData(){
    var Fund = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsino=ensinoFundamental"

    response = await fetch(Fund,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    data = await response.json();
    console.log(data)
    const valorFund = data.map((x) => x.valorTotalEscolas)
    valorFundData = valorFund
    console.log(valorFundData)
}






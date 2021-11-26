var anoData = [], modalidadeData = [], valorCrecheData = [], valorFundData = [], preData = [], aeeData = [], ejaData = [], maisFundData = [], quiloData = [];


async function repasseChart() {
    await getRepasseData()
    await getCrecheData()
    await getFundData()
    await getPreData()
    await getAeeData()
    await getEjaData()
    await getMaisFundData()
    await getQuiloData()

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
                        {
                            label: "Pré-Escola",
                            data: preData,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                        },
                        {
                            label: "AEE",
                            data: aeeData,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                        },
                        {
                            label: "EJA",
                            data: ejaData,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundData,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                        },
                        {
                            label: "Quilombola",
                            data: quiloData,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
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
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=vitoria_do_jari&esferaGoverno=municipal"

    var response = await fetch(url,{
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

async function getFundData(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    data = await response.json();
    console.log(data)
    var valor = data.map((x) => x.valorTotalEscolas)
    valorFundData = valor
    console.log(valorFundData)
}

async function getCrecheData(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     data = await response.json();
     valor = data.map((x) => x.valorTotalEscolas)
     valorCrecheData = valor
 }
 async function getPreData(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    data = await response.json();
    valor = data.map((x) => x.valorTotalEscolas)
    preData = valor
}
async function getAeeData(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    data = await response.json();
    valor = data.map((x) => x.valorTotalEscolas)
    aeeData = valor
}
async function getEjaData(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    data = await response.json();
    valor = data.map((x) => x.valorTotalEscolas)
    ejaData = valor
}
async function getMaisFundData(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    data = await response.json();
    valor = data.map((x) => x.valorTotalEscolas)
    maisFundData = valor
}
async function getQuiloData(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    data = await response.json();
    valor = data.map((x) => x.valorTotalEscolas)
    quiloData = valor
}
var anoDataFerreira = [], modalidadeDataFerreira = [], valorCrecheDataFerreira = [], valorFundDataFerreira = [], preDataFerreira = [], aeeDataFerreira = [], ejaDataFerreira = [], maisFundDataFerreira = [], quiloDataFerreira = [];


async function ferreiraChart() {
    await getRepasseDataFerreira()
    await getCrecheDataFerreira()
    await getFundDataFerreira()
    await getPreDataFerreira()
    await getAeeDataFerreira()
    await getEjaDataFerreira()
    await getMaisFundDataFerreira()
    await getQuiloDataFerreira()

    const ctx = document.getElementById('line-chartFerreira').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataFerreira,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataFerreira,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataFerreira,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                            tension:0.3,
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataFerreira,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "AEE",
                            data: aeeDataFerreira,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "EJA",
                            data: ejaDataFerreira,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataFerreira,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataFerreira,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                            tension:0.3,
                        },
                     ]
            }
        })

}

ferreiraChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataFerreira(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=ferreira_gomes&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataFerreira = await response.json();
    
    const ano = DataFerreira.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataFerreira = anoU
}

async function getFundDataFerreira(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataFerreira = await response.json();
    console.log(DataFerreira)
    var valor = DataFerreira.map((x) => x.valorTotalEscolas)
    valorFundDataFerreira = valor
    console.log(valorFundDataFerreira)
}

async function getCrecheDataFerreira(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataFerreira = await response.json();
     valor = DataFerreira.map((x) => x.valorTotalEscolas)
     valorCrecheDataFerreira = valor
 }
 async function getPreDataFerreira(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataFerreira = await response.json();
    valor = DataFerreira.map((x) => x.valorTotalEscolas)
    preDataFerreira = valor
}
async function getAeeDataFerreira(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataFerreira = await response.json();
    valor = DataFerreira.map((x) => x.valorTotalEscolas)
    aeeDataFerreira = valor
}
async function getEjaDataFerreira(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataFerreira = await response.json();
    valor = DataFerreira.map((x) => x.valorTotalEscolas)
    ejaDataFerreira = valor
}
async function getMaisFundDataFerreira(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataFerreira = await response.json();
    valor = DataFerreira.map((x) => x.valorTotalEscolas)
    maisFundDataFerreira = valor
}
async function getQuiloDataFerreira(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataFerreira = await response.json();
    valor = DataFerreira.map((x) => x.valorTotalEscolas)
    quiloDataFerreira = valor
}
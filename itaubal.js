var anoDataItaubal = [], modalidadeDataItaubal = [], valorCrecheDataItaubal = [], valorFundDataItaubal = [], preDataItaubal = [], aeeDataItaubal = [], ejaDataItaubal = [], maisFundDataItaubal = [], quiloDataItaubal = [];


async function itaubalChart() {
    await getRepasseDataItaubal()
    await getCrecheDataItaubal()
    await getFundDataItaubal()
    await getPreDataItaubal()
    await getAeeDataItaubal()
    await getEjaDataItaubal()
    await getMaisFundDataItaubal()
    await getQuiloDataItaubal()

    const ctx = document.getElementById('line-chartItaubal').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataItaubal,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataItaubal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataItaubal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataItaubal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                        },
                        {
                            label: "AEE",
                            data: aeeDataItaubal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                        },
                        {
                            label: "EJA",
                            data: ejaDataItaubal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataItaubal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataItaubal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                        },
                     ]
            }
        })

}

itaubalChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataItaubal(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=itaubal&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataItaubal = await response.json();
    
    const ano = DataItaubal.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataItaubal = anoU
}

async function getFundDataItaubal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataItaubal = await response.json();
    console.log(DataItaubal)
    var valor = DataItaubal.map((x) => x.valorTotalEscolas)
    valorFundDataItaubal = valor
    console.log(valorFundDataItaubal)
}

async function getCrecheDataItaubal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataItaubal = await response.json();
     valor = DataItaubal.map((x) => x.valorTotalEscolas)
     valorCrecheDataItaubal = valor
 }
 async function getPreDataItaubal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataItaubal = await response.json();
    valor = DataItaubal.map((x) => x.valorTotalEscolas)
    preDataItaubal = valor
}
async function getAeeDataItaubal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataItaubal = await response.json();
    valor = DataItaubal.map((x) => x.valorTotalEscolas)
    aeeDataItaubal = valor
}
async function getEjaDataItaubal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataItaubal = await response.json();
    valor = DataItaubal.map((x) => x.valorTotalEscolas)
    ejaDataItaubal = valor
}
async function getMaisFundDataItaubal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataItaubal = await response.json();
    valor = DataItaubal.map((x) => x.valorTotalEscolas)
    maisFundDataItaubal = valor
}
async function getQuiloDataItaubal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataItaubal = await response.json();
    valor = DataItaubal.map((x) => x.valorTotalEscolas)
    quiloDataItaubal = valor
}
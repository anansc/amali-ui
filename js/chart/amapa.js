var anoDataAmapa = [], modalidadeDataAmapa = [], valorCrecheDataAmapa = [], valorFundDataAmapa = [], preDataAmapa = [], aeeDataAmapa = [], ejaDataAmapa = [], maisFundDataAmapa = [], quiloDataAmapa = [];


async function amapaChart() {
    await getRepasseDataAmapa()
    await getCrecheDataAmapa()
    await getFundDataAmapa()
    await getPreDataAmapa()
    await getAeeDataAmapa()
    await getEjaDataAmapa()
    await getMaisFundDataAmapa()
    await getQuiloDataAmapa()

    const ctx = document.getElementById('line-chartAmapa').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataAmapa,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataAmapa,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                            tension:0.3,
                            
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataAmapa,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                            tension:0.3,
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataAmapa,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "AEE",
                            data: aeeDataAmapa,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "EJA",
                            data: ejaDataAmapa,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataAmapa,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataAmapa,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                            tension:0.3,
                        },
                     ],
            }
        })

}

amapaChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataAmapa(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=amapa&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataAmapa = await response.json();
    
    const ano = DataAmapa.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataAmapa = anoU
}

async function getFundDataAmapa(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataAmapa = await response.json();
    console.log(DataAmapa)
    var valor = DataAmapa.map((x) => x.valorTotalEscolas)
    valorFundDataAmapa = valor
    console.log(valorFundDataAmapa)
}

async function getCrecheDataAmapa(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataAmapa = await response.json();
     valor = DataAmapa.map((x) => x.valorTotalEscolas)
     valorCrecheDataAmapa = valor
 }
 async function getPreDataAmapa(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    preDataAmapa = valor
}
async function getAeeDataAmapa(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    aeeDataAmapa = valor
}
async function getEjaDataAmapa(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    ejaDataAmapa = valor
}
async function getMaisFundDataAmapa(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    maisFundDataAmapa = valor
}
async function getQuiloDataAmapa(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    quiloDataAmapa = valor
}
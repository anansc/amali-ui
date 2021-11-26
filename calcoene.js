var anoDataCalcoene = [], modalidadeDataCalcoene = [], valorCrecheDataCalcoene = [], valorFundDataCalcoene = [], preDataCalcoene = [], aeeDataCalcoene = [], ejaDataCalcoene = [], maisFundDataCalcoene = [], quiloDataCalcoene = [];


async function calcoeneChart() {
    await getRepasseDataCalcoene()
    await getCrecheDataCalcoene()
    await getFundDataCalcoene()
    await getPreDataCalcoene()
    await getAeeDataCalcoene()
    await getEjaDataCalcoene()
    await getMaisFundDataCalcoene()
    await getQuiloDataCalcoene()

    const ctx = document.getElementById('line-chartCalcoene').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataCalcoene,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataCalcoene,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataCalcoene,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataCalcoene,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                        },
                        {
                            label: "AEE",
                            data: aeeDataCalcoene,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                        },
                        {
                            label: "EJA",
                            data: ejaDataCalcoene,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataCalcoene,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataCalcoene,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                        },
                     ]
            }
        })

}

calcoeneChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataCalcoene(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=calcoene&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataCalcoene = await response.json();
    
    const ano = DataCalcoene.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataCalcoene = anoU
}

async function getFundDataCalcoene(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataCalcoene = await response.json();
    console.log(DataCalcoene)
    var valor = DataCalcoene.map((x) => x.valorTotalEscolas)
    valorFundDataCalcoene = valor
    console.log(valorFundDataCalcoene)
}

async function getCrecheDataCalcoene(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataCalcoene = await response.json();
     valor = DataCalcoene.map((x) => x.valorTotalEscolas)
     valorCrecheDataCalcoene = valor
 }
 async function getPreDataCalcoene(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCalcoene = await response.json();
    valor = DataCalcoene.map((x) => x.valorTotalEscolas)
    preDataCalcoene = valor
}
async function getAeeDataCalcoene(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCalcoene = await response.json();
    valor = DataCalcoene.map((x) => x.valorTotalEscolas)
    aeeDataCalcoene = valor
}
async function getEjaDataCalcoene(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCalcoene = await response.json();
    valor = DataCalcoene.map((x) => x.valorTotalEscolas)
    ejaDataCalcoene = valor
}
async function getMaisFundDataCalcoene(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCalcoene = await response.json();
    valor = DataCalcoene.map((x) => x.valorTotalEscolas)
    maisFundDataCalcoene = valor
}
async function getQuiloDataCalcoene(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCalcoene = await response.json();
    valor = DataCalcoene.map((x) => x.valorTotalEscolas)
    quiloDataCalcoene = valor
}
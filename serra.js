var anoDataSerra = [], modalidadeDataSerra = [], valorCrecheDataSerra = [], valorFundDataSerra = [], preDataSerra = [], aeeDataSerra = [], ejaDataSerra = [], maisFundDataSerra = [], quiloDataSerra = [];


async function serraChart() {
    await getRepasseDataSerra()
    await getCrecheDataSerra()
    await getFundDataSerra()
    await getPreDataSerra()
    await getAeeDataSerra()
    await getEjaDataSerra()
    await getMaisFundDataSerra()
    await getQuiloDataSerra()

    const ctx = document.getElementById('line-chartSerra').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataSerra,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataSerra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataSerra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataSerra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                        },
                        {
                            label: "AEE",
                            data: aeeDataSerra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                        },
                        {
                            label: "EJA",
                            data: ejaDataSerra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataSerra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataSerra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                        },
                     ]
            }
        })

}

serraChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataSerra(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=serra_do_navio&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataSerra = await response.json();
    
    const ano = DataSerra.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataSerra = anoU
}

async function getFundDataSerra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataSerra = await response.json();
    console.log(DataSerra)
    var valor = DataSerra.map((x) => x.valorTotalEscolas)
    valorFundDataSerra = valor
    console.log(valorFundDataSerra)
}

async function getCrecheDataSerra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataSerra = await response.json();
     valor = DataSerra.map((x) => x.valorTotalEscolas)
     valorCrecheDataSerra = valor
 }
 async function getPreDataSerra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSerra = await response.json();
    valor = DataSerra.map((x) => x.valorTotalEscolas)
    preDataSerra = valor
}
async function getAeeDataSerra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSerra = await response.json();
    valor = DataSerra.map((x) => x.valorTotalEscolas)
    aeeDataSerra = valor
}
async function getEjaDataSerra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSerra = await response.json();
    valor = DataSerra.map((x) => x.valorTotalEscolas)
    ejaDataSerra = valor
}
async function getMaisFundDataSerra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSerra = await response.json();
    valor = DataSerra.map((x) => x.valorTotalEscolas)
    maisFundDataSerra = valor
}
async function getQuiloDataSerra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSerra = await response.json();
    valor = DataSerra.map((x) => x.valorTotalEscolas)
    quiloDataSerra = valor
}
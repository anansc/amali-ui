var anoDataSan = [], modalidadeDataSan = [], valorCrecheDataSan = [], valorFundDataSan = [], preDataSan = [], aeeDataSan = [], ejaDataSan = [], maisFundDataSan = [], quiloDataSan = [];


async function santanaChart() {
    await getRepasseDataSan()
    await getCrecheDataSan()
    await getFundDataSan()
    await getPreDataSan()
    await getAeeDataSan()
    await getEjaDataSan()
    await getMaisFundDataSan()
    await getQuiloDataSan()

    const ctx = document.getElementById('line-chartSantana').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataSan,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataSan,
                            tension:0.3,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataSan,
                            tension:0.3,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataSan,
                            backgroundColor:'transparent',
                            tension:0.3,
                            borderColor: 'rgba(2,233,14,0.6)',
                        },
                        {
                            label: "AEE",
                            data: aeeDataSan,
                            backgroundColor:'transparent',
                            tension:0.3,
                            borderColor: 'rgba(142,23,194,0.6)',
                        },
                        {
                            label: "EJA",
                            data: ejaDataSan,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataSan,
                            backgroundColor:'transparent',
                            tension:0.3,
                            borderColor: 'rgba(45,133,164,0.6)',
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataSan,
                            backgroundColor:'transparent',
                            tension:0.3,
                            borderColor: 'rgba(25,243,256,0.6)',
                        },
                     ]
            }
        })

}

santanaChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataSan(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=santana&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataSan = await response.json();
    
    const ano = DataSan.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataSan = anoU
}

async function getFundDataSan(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataSan = await response.json();
    console.log(DataSan)
    var valor = DataSan.map((x) => x.valorTotalEscolas)
    valorFundDataSan = valor
    console.log(valorFundDataSan)
}

async function getCrecheDataSan(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataSan = await response.json();
     valor = DataSan.map((x) => x.valorTotalEscolas)
     valorCrecheDataSan = valor
 }
 async function getPreDataSan(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSan = await response.json();
    valor = DataSan.map((x) => x.valorTotalEscolas)
    preDataSan = valor
}
async function getAeeDataSan(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSan = await response.json();
    valor = DataSan.map((x) => x.valorTotalEscolas)
    aeeDataSan = valor
}
async function getEjaDataSan(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSan = await response.json();
    valor = DataSan.map((x) => x.valorTotalEscolas)
    ejaDataSan = valor
}
async function getMaisFundDataSan(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSan = await response.json();
    valor = DataSan.map((x) => x.valorTotalEscolas)
    maisFundDataSan = valor
}
async function getQuiloDataSan(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataSan = await response.json();
    valor = DataSan.map((x) => x.valorTotalEscolas)
    quiloDataSan = valor
}
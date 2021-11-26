var anoDataOia = [], modalidadeDataOia = [], valorCrecheDataOia = [], valorFundDataOia = [], preDataOia = [], aeeDataOia = [], ejaDataOia = [], maisFundDataOia = [], quiloDataOia = [];


async function oiapoqueChart() {
    await getRepasseDataOia()
    await getCrecheDataOia()
    await getFundDataOia()
    await getPreDataOia()
    await getAeeDataOia()
    await getEjaDataOia()
    await getMaisFundDataOia()
    await getQuiloDataOia()

    const ctx = document.getElementById('line-chartOiapoque').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataOia,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataOia,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataOia,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataOia,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                        },
                        {
                            label: "AEE",
                            data: aeeDataOia,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                        },
                        {
                            label: "EJA",
                            data: ejaDataOia,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataOia,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataOia,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                        },
                     ]
            }
        })

}

oiapoqueChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataOia(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=oiapoque&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataOia = await response.json();
    
    const ano = DataOia.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataOia = anoU
}

async function getFundDataOia(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataOia = await response.json();
    console.log(DataOia)
    var valor = DataOia.map((x) => x.valorTotalEscolas)
    valorFundDataOia = valor
    console.log(valorFundDataOia)
}

async function getCrecheDataOia(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataOia = await response.json();
     valor = DataOia.map((x) => x.valorTotalEscolas)
     valorCrecheDataOia = valor
 }
 async function getPreDataOia(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOia = await response.json();
    valor = DataOia.map((x) => x.valorTotalEscolas)
    preDataOia = valor
}
async function getAeeDataOia(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOia = await response.json();
    valor = DataOia.map((x) => x.valorTotalEscolas)
    aeeDataOia = valor
}
async function getEjaDataOia(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOia = await response.json();
    valor = DataOia.map((x) => x.valorTotalEscolas)
    ejaDataOia = valor
}
async function getMaisFundDataOia(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOia = await response.json();
    valor = DataOia.map((x) => x.valorTotalEscolas)
    maisFundDataOia = valor
}
async function getQuiloDataOia(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOia = await response.json();
    valor = DataOia.map((x) => x.valorTotalEscolas)
    quiloDataOia = valor
}
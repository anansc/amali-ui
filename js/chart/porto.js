var anoDataPorto = [], modalidadeDataPorto = [], valorCrecheDataPorto = [], valorFundDataPorto = [], preDataPorto = [], aeeDataPorto = [], ejaDataPorto = [], maisFundDataPorto = [], quiloDataPorto = [];


async function portoChart() {
    await getRepasseDataPorto()
    await getCrecheDataPorto()
    await getFundDataPorto()
    await getPreDataPorto()
    await getAeeDataPorto()
    await getEjaDataPorto()
    await getMaisFundDataPorto()
    await getQuiloDataPorto()

    const ctx = document.getElementById('line-chartPorto').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataPorto,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataPorto,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataPorto,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                            tension:0.3,
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataPorto,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "AEE",
                            data: aeeDataPorto,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "EJA",
                            data: ejaDataPorto,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataPorto,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataPorto,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                            tension:0.3,
                        },
                     ]
            }
        })

}

portoChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataPorto(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=porto_grande&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataPorto = await response.json();
    
    const ano = DataPorto.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataPorto = anoU
}

async function getFundDataPorto(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto_grande&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataPorto = await response.json();
    console.log(DataPorto)
    var valor = DataPorto.map((x) => x.valorTotalEscolas)
    valorFundDataPorto = valor
    console.log(valorFundDataPorto)
}

async function getCrecheDataPorto(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto_grande&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataPorto = await response.json();
     valor = DataPorto.map((x) => x.valorTotalEscolas)
     valorCrecheDataPorto = valor
 }
 async function getPreDataPorto(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto_grande&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPorto = await response.json();
    valor = DataPorto.map((x) => x.valorTotalEscolas)
    preDataPorto = valor
}
async function getAeeDataPorto(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto_grande&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPorto = await response.json();
    valor = DataPorto.map((x) => x.valorTotalEscolas)
    aeeDataPorto = valor
}
async function getEjaDataPorto(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto_grande&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPorto = await response.json();
    valor = DataPorto.map((x) => x.valorTotalEscolas)
    ejaDataPorto = valor
}
async function getMaisFundDataPorto(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto_grande&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPorto = await response.json();
    valor = DataPorto.map((x) => x.valorTotalEscolas)
    maisFundDataPorto = valor
}
async function getQuiloDataPorto(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto_grande&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPorto = await response.json();
    valor = DataPorto.map((x) => x.valorTotalEscolas)
    quiloDataPorto = valor
}
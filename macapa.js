var anoDataMcp = [], modalidadeDataMcp = [], valorCrecheDataMcp = [], valorFundDataMcp = [], preDataMcp = [], aeeDataMcp = [], ejaDataMcp = [], maisFundDataMcp = [], quiloDataMcp = [];


async function macapaChart() {
    await getRepasseDataMcp()
    await getCrecheDataMcp()
    await getFundDataMcp()
    await getPreDataMcp()
    await getAeeDataMcp()
    await getEjaDataMcp()
    await getMaisFundDataMcp()
    await getQuiloDataMcp()

    const ctx = document.getElementById('line-chartMacapa').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataMcp,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataMcp,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataMcp,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataMcp,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                        },
                        {
                            label: "AEE",
                            data: aeeDataMcp,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                        },
                        {
                            label: "EJA",
                            data: ejaDataMcp,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataMcp,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataMcp,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                        },
                     ]
            }
        })

}

macapaChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataMcp(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=macapa&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataMcp = await response.json();
    
    const ano = DataMcp.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataMcp = anoU
}

async function getFundDataMcp(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataMcp = await response.json();
    console.log(DataMcp)
    var valor = DataMcp.map((x) => x.valorTotalEscolas)
    valorFundDataMcp = valor
    console.log(valorFundDataMcp)
}

async function getCrecheDataMcp(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataMcp = await response.json();
     valor = DataMcp.map((x) => x.valorTotalEscolas)
     valorCrecheDataMcp = valor
 }
 async function getPreDataMcp(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMcp = await response.json();
    valor = DataMcp.map((x) => x.valorTotalEscolas)
    preDataMcp = valor
}
async function getAeeDataMcp(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMcp = await response.json();
    valor = DataMcp.map((x) => x.valorTotalEscolas)
    aeeDataMcp = valor
}
async function getEjaDataMcp(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMcp = await response.json();
    valor = DataMcp.map((x) => x.valorTotalEscolas)
    ejaDataMcp = valor
}
async function getMaisFundDataMcp(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMcp = await response.json();
    valor = DataMcp.map((x) => x.valorTotalEscolas)
    maisFundDataMcp = valor
}
async function getQuiloDataMcp(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMcp = await response.json();
    valor = DataMcp.map((x) => x.valorTotalEscolas)
    quiloDataMcp = valor
}
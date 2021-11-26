var anoDataTartarugal = [], modalidadeDataTartarugal = [], valorCrecheDataTartarugal = [], valorFundDataTartarugal = [], preDataTartarugal = [], aeeDataTartarugal = [], ejaDataTartarugal = [], maisFundDataTartarugal = [], quiloDataTartarugal = [];


async function tartatugalChart() {
    await getRepasseDataTartarugal()
    await getCrecheDataTartarugal()
    await getFundDataTartarugal()
    await getPreDataTartarugal()
    await getAeeDataTartarugal()
    await getEjaDataTartarugal()
    await getMaisFundDataTartarugal()
    await getQuiloDataTartarugal()

    const ctx = document.getElementById('line-chartTartarugal').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataTartarugal,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataTartarugal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataTartarugal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataTartarugal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                        },
                        {
                            label: "AEE",
                            data: aeeDataTartarugal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                        },
                        {
                            label: "EJA",
                            data: ejaDataTartarugal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataTartarugal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataTartarugal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                        },
                     ]
            }
        })

}

tartatugalChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataTartarugal(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=tartarugalzinho&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataTartarugal = await response.json();
    
    const ano = DataTartarugal.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataTartarugal = anoU
}

async function getFundDataTartarugal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataTartarugal = await response.json();
    console.log(DataTartarugal)
    var valor = DataTartarugal.map((x) => x.valorTotalEscolas)
    valorFundDataTartarugal = valor
    console.log(valorFundDataTartarugal)
}

async function getCrecheDataTartarugal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataTartarugal = await response.json();
     valor = DataTartarugal.map((x) => x.valorTotalEscolas)
     valorCrecheDataTartarugal = valor
 }
 async function getPreDataTartarugal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataTartarugal = await response.json();
    valor = DataTartarugal.map((x) => x.valorTotalEscolas)
    preDataTartarugal = valor
}
async function getAeeDataTartarugal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataTartarugal = await response.json();
    valor = DataTartarugal.map((x) => x.valorTotalEscolas)
    aeeDataTartarugal = valor
}
async function getEjaDataTartarugal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataTartarugal = await response.json();
    valor = DataTartarugal.map((x) => x.valorTotalEscolas)
    ejaDataTartarugal = valor
}
async function getMaisFundDataTartarugal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataTartarugal = await response.json();
    valor = DataTartarugal.map((x) => x.valorTotalEscolas)
    maisFundDataTartarugal = valor
}
async function getQuiloDataTartarugal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataTartarugal = await response.json();
    valor = DataTartarugal.map((x) => x.valorTotalEscolas)
    quiloDataTartarugal = valor
}
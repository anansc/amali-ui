var anoDataPracuuba = [], modalidadeDataPracuuba = [], valorCrecheDataPracuuba = [], valorFundDataPracuuba = [], preDataPracuuba = [], aeeDataPracuuba = [], ejaDataPracuuba = [], maisFundDataPracuuba = [], quiloDataPracuuba = [];


async function pracuubaChart() {
    await getRepasseDataPracuuba()
    await getCrecheDataPracuuba()
    await getFundDataPracuuba()
    await getPreDataPracuuba()
    await getAeeDataPracuuba()
    await getEjaDataPracuuba()
    await getMaisFundDataPracuuba()
    await getQuiloDataPracuuba()

    const ctx = document.getElementById('line-chartPracuuba').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataPracuuba,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataPracuuba,
                            backgroundColor:'transparent',
                            tension:0.3,
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataPracuuba,
                            tension:0.3,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataPracuuba,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "AEE",
                            data: aeeDataPracuuba,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "EJA",
                            data: ejaDataPracuuba,
                            backgroundColor:'transparent',
                            tension:0.3,
                            borderColor: 'rgba(244,3,234,0.6)',
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataPracuuba,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataPracuuba,
                            backgroundColor:'transparent',
                            tension:0.3,
                            borderColor: 'rgba(25,243,256,0.6)',
                        },
                     ]
            }
        })

}

pracuubaChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataPracuuba(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=pracuuba&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataPracuuba = await response.json();
    
    const ano = DataPracuuba.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataPracuuba = anoU
}

async function getFundDataPracuuba(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataPracuuba = await response.json();
    console.log(DataPracuuba)
    var valor = DataPracuuba.map((x) => x.valorTotalEscolas)
    valorFundDataPracuuba = valor
    console.log(valorFundDataPracuuba)
}

async function getCrecheDataPracuuba(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataPracuuba = await response.json();
     valor = DataPracuuba.map((x) => x.valorTotalEscolas)
     valorCrecheDataPracuuba = valor
 }
 async function getPreDataPracuuba(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.valorTotalEscolas)
    preDataPracuuba = valor
}
async function getAeeDataPracuuba(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.valorTotalEscolas)
    aeeDataPracuuba = valor
}
async function getEjaDataPracuuba(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.valorTotalEscolas)
    ejaDataPracuuba = valor
}
async function getMaisFundDataPracuuba(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.valorTotalEscolas)
    maisFundDataPracuuba = valor
}
async function getQuiloDataPracuuba(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.valorTotalEscolas)
    quiloDataPracuuba = valor
}
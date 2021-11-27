var anoDataMaz = [], modalidadeDataMaz = [], valorCrecheDataMaz = [], valorFundDataMaz = [], preDataMaz = [], aeeDataMaz = [], ejaDataMaz = [], maisFundDataMaz = [], quiloDataMaz = [];


async function mazagaoChart() {
    await getRepasseDataMaz()
    await getCrecheDataMaz()
    await getFundDataMaz()
    await getPreDataMaz()
    await getAeeDataMaz()
    await getEjaDataMaz()
    await getMaisFundDataMaz()
    await getQuiloDataMaz()

    const ctx = document.getElementById('line-chartMazagao').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataMaz,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataMaz,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataMaz,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                            tension:0.3,
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataMaz,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "AEE",
                            data: aeeDataMaz,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "EJA",
                            data: ejaDataMaz,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataMaz,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataMaz,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                            tension:0.3,
                        },
                     ]
            }
        })

}

mazagaoChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataMaz(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=mazagao&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataMaz = await response.json();
    
    const ano = DataMaz.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataMaz = anoU
}

async function getFundDataMaz(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataMaz = await response.json();
    console.log(DataMaz)
    var valor = DataMaz.map((x) => x.valorTotalEscolas)
    valorFundDataMaz = valor
    console.log(valorFundDataMaz)
}

async function getCrecheDataMaz(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataMaz = await response.json();
     valor = DataMaz.map((x) => x.valorTotalEscolas)
     valorCrecheDataMaz = valor
 }
 async function getPreDataMaz(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMaz = await response.json();
    valor = DataMaz.map((x) => x.valorTotalEscolas)
    preDataMaz = valor
}
async function getAeeDataMaz(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMaz = await response.json();
    valor = DataMaz.map((x) => x.valorTotalEscolas)
    aeeDataMaz = valor
}
async function getEjaDataMaz(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMaz = await response.json();
    valor = DataMaz.map((x) => x.valorTotalEscolas)
    ejaDataMaz = valor
}
async function getMaisFundDataMaz(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMaz = await response.json();
    valor = DataMaz.map((x) => x.valorTotalEscolas)
    maisFundDataMaz = valor
}
async function getQuiloDataMaz(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataMaz = await response.json();
    valor = DataMaz.map((x) => x.valorTotalEscolas)
    quiloDataMaz = valor
}
var anoDataCut = [], modalidadeDataCut = [], valorCrecheDataCut = [], valorFundDataCut = [], preDataCut = [], aeeDataCut = [], ejaDataCut = [], maisFundDataCut = [], quiloDataCut = [];


async function cutiasChart() {
    await getRepasseDataCut()
    await getCrecheDataCut()
    await getFundDataCut()
    await getPreDataCut()
    await getAeeDataCut()
    await getEjaDataCut()
    await getMaisFundDataCut()
    await getQuiloDataCut()

    const ctx = document.getElementById('line-chartCutias').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataCut,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataCut,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataCut,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                            tension:0.3,
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataCut,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "AEE",
                            data: aeeDataCut,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "EJA",
                            data: ejaDataCut,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataCut,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataCut,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                            tension:0.3,
                        },

                     ]
            }
        })

}

cutiasChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataCut(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=cutias&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataCut = await response.json();
    
    const ano = DataCut.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataCut = anoU
}

async function getFundDataCut(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataCut = await response.json();
    console.log(DataCut)
    var valor = DataCut.map((x) => x.valorTotalEscolas)
    valorFundDataCut = valor
    console.log(valorFundDataCut)
}

async function getCrecheDataCut(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataCut = await response.json();
     valor = DataCut.map((x) => x.valorTotalEscolas)
     valorCrecheDataCut = valor
 }
 async function getPreDataCut(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCut = await response.json();
    valor = DataCut.map((x) => x.valorTotalEscolas)
    preDataCut = valor
}
async function getAeeDataCut(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCut = await response.json();
    valor = DataCut.map((x) => x.valorTotalEscolas)
    aeeDataCut = valor
}
async function getEjaDataCut(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCut = await response.json();
    valor = DataCut.map((x) => x.valorTotalEscolas)
    ejaDataCut = valor
}
async function getMaisFundDataCut(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCut = await response.json();
    valor = DataCut.map((x) => x.valorTotalEscolas)
    maisFundDataCut = valor
}
async function getQuiloDataCut(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataCut = await response.json();
    valor = DataCut.map((x) => x.valorTotalEscolas)
    quiloDataCut = valor
}
var anoDataLaranjal = [], modalidadeDataLaranjal = [], valorCrecheDataLaranjal = [], valorFundDataLaranjal = [], preDataLaranjal = [], aeeDataLaranjal = [], ejaDataLaranjal = [], maisFundDataLaranjal = [], quiloDataLaranjal = [];


async function laranjalChart() {
    await getRepasseDataLaranjal()
    await getCrecheDataLaranjal()
    await getFundDataLaranjal()
    await getPreDataLaranjal()
    await getAeeDataLaranjal()
    await getEjaDataLaranjal()
    await getMaisFundDataLaranjal()
    await getQuiloDataLaranjal()

    const ctx = document.getElementById('line-chartLaranjal').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataLaranjal,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataLaranjal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataLaranjal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                            tension:0.3,
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataLaranjal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "AEE",
                            data: aeeDataLaranjal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "EJA",
                            data: ejaDataLaranjal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataLaranjal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataLaranjal,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                            tension:0.3,
                        },
                     ]
            }
        })

}

laranjalChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataLaranjal(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=laranjal_do_jari&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataLaranjal = await response.json();
    
    const ano = DataLaranjal.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataLaranjal = anoU
}

async function getFundDataLaranjal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataLaranjal = await response.json();
    console.log(DataLaranjal)
    var valor = DataLaranjal.map((x) => x.valorTotalEscolas)
    valorFundDataLaranjal = valor
    console.log(valorFundDataLaranjal)
}

async function getCrecheDataLaranjal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataLaranjal = await response.json();
     valor = DataLaranjal.map((x) => x.valorTotalEscolas)
     valorCrecheDataLaranjal = valor
 }
 async function getPreDataLaranjal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataLaranjal = await response.json();
    valor = DataLaranjal.map((x) => x.valorTotalEscolas)
    preDataLaranjal = valor
}
async function getAeeDataLaranjal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataLaranjal = await response.json();
    valor = DataLaranjal.map((x) => x.valorTotalEscolas)
    aeeDataLaranjal = valor
}
async function getEjaDataLaranjal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataLaranjal = await response.json();
    valor = DataLaranjal.map((x) => x.valorTotalEscolas)
    ejaDataLaranjal = valor
}
async function getMaisFundDataLaranjal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataLaranjal = await response.json();
    valor = DataLaranjal.map((x) => x.valorTotalEscolas)
    maisFundDataLaranjal = valor
}
async function getQuiloDataLaranjal(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataLaranjal = await response.json();
    valor = DataLaranjal.map((x) => x.valorTotalEscolas)
    quiloDataLaranjal = valor
}
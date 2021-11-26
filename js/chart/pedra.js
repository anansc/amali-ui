var anoDataPedra = [], modalidadeDataPedra = [], valorCrecheDataPedra = [], valorFundDataPedra = [], preDataPedra = [], aeeDataPedra = [], ejaDataPedra = [], maisFundDataPedra = [], quiloDataPedra = [];


async function pedraChart() {
    await getRepasseDataPedra()
    await getCrecheDataPedra()
    await getFundDataPedra()
    await getPreDataPedra()
    await getAeeDataPedra()
    await getEjaDataPedra()
    await getMaisFundDataPedra()
    await getQuiloDataPedra()

    const ctx = document.getElementById('line-chartPedra').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoDataPedra,
                    datasets: [
                        {
                            label: "Creche",
                            data: valorCrecheDataPedra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Fundamental",
                            data: valorFundDataPedra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(154, 47, 102, 0.8)',
                            tension:0.3,
                        },
                        {
                            label: "Pré-Escola",
                            data: preDataPedra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,233,14,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "AEE",
                            data: aeeDataPedra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(142,23,194,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "EJA",
                            data: ejaDataPedra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(244,3,234,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "+Educação - Fundamental",
                            data: maisFundDataPedra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(45,133,164,0.6)',
                            tension:0.3,
                        },
                        {
                            label: "Quilombola",
                            data: quiloDataPedra,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(25,243,256,0.6)',
                            tension:0.3,
                        },
                     ]
            }
        })

}

pedraChart()
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
async function getRepasseDataPedra(){
    var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=pedra_branca_do_amapari&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataPedra = await response.json();
    
    const ano = DataPedra.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataPedra = anoU
}

async function getFundDataPedra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataPedra = await response.json();
    console.log(DataPedra)
    var valor = DataPedra.map((x) => x.valorTotalEscolas)
    valorFundDataPedra = valor
    console.log(valorFundDataPedra)
}

async function getCrecheDataPedra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataPedra = await response.json();
     valor = DataPedra.map((x) => x.valorTotalEscolas)
     valorCrecheDataPedra = valor
 }
 async function getPreDataPedra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPedra = await response.json();
    valor = DataPedra.map((x) => x.valorTotalEscolas)
    preDataPedra = valor
}
async function getAeeDataPedra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPedra = await response.json();
    valor = DataPedra.map((x) => x.valorTotalEscolas)
    aeeDataPedra = valor
}
async function getEjaDataPedra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPedra = await response.json();
    valor = DataPedra.map((x) => x.valorTotalEscolas)
    ejaDataPedra = valor
}
async function getMaisFundDataPedra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPedra = await response.json();
    valor = DataPedra.map((x) => x.valorTotalEscolas)
    maisFundDataPedra = valor
}
async function getQuiloDataPedra(){
    url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPedra = await response.json();
    valor = DataPedra.map((x) => x.valorTotalEscolas)
    quiloDataPedra = valor
}
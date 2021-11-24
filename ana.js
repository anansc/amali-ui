/*
async function repasseChart() {
    await getRepasseData()*/

    const ctx = document.getElementById('line-chartVitoria').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010.2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
                    datasets: [
                        {
                            label: "Creche",
                            data: [1,2,3,4,5,6,7,7,8,6,7,3,4,6,1,3,5,7,4,3,8,9],
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        },
                        {
                            label: "Especializada",
                            data: [4,7,6,2,3,2,5,1,7,8,9,4,5,3,7,6,8,4,7,2],
                            backgroundColor:'transparent',
                            borderColor: 'rgba(6,23,16,0.6)',
                        },
                        {
                            label: "AEE",
                            data: [4,3,5,2,6,4,7,3,,7,4,7,3,5,6,7,9,3,5,2],
                            backgroundColor:'transparent',
                            borderColor: 'rgba(92,123,36,0.6)',
                        },
                        {
                            label: "Eja",
                            data: [0,9,8,7,6,5,4,7,6,5,9,3,5,6,7,8,3,2,5],
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,255,236,0.6)',
                        },
                        {
                            label: "Medio",
                            data: [4,5,2,6,7,7,9,5,4,3,5,6,4,7,8,4,5,6,7],
                            backgroundColor:'transparent',
                            borderColor: 'rgba(20,133,176,0.6)',
                        },
                    
                     ],
            }
        });
/* 
}
*/
repasseChart()

async function getRepasseData(){
    const apiUrl = "http://127.0.0.1:5500/json.json"

    const response = await fetch(apiUrl,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    const data = await response.json();
console.log(data.Macapa[0])


    /*
    console.log(data[2018][0].Macapa)
    console.log(data[2019][0].Macapa)
    console.log(data[2020][0].Macapa)
    console.log(data[2021][0].Macapa)
//*
   // console.log(data.municipio[0].macapa.ano)
/*
    const ano = data.municipio[0].macapa.ano[0][2018][0]
    anoData = ano
    console.log(ano[0][2018][0])
    /*
    /*
    const ano = barChartData.content.map((x) => x.ano)
    const esfera = barChartData.content.map((x) => x.esferaGoverno)
    const valorTotal = barChartData.content.map((x) => x.valorTotalEscolas)
    const modalidade = barChartData.content.map((x) => x.modalidadeEnsino)
    
    

    modalidadeData = modalidade

    anoData = ano
    esferaData = esfera
    valorTotalData = valorTotal
    console.log(valorTotalData)
    
    */
}
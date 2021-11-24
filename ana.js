async function repasseChart() {
    await getRepasseData()

    const ctx = document.getElementById('line-chartTartaruga').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoData,
                datasets: [{
                    labels:esferaData,
                    datasets: valorTotalData,
                    backgroundColor:'rgba(2,33,36,0.6)',
                    borderColor: 'rgba(2,33,36,0.6)',

                    }
                ]
            }
        })
    
}


async function repasseChart() {
    await getRepasseData()

    const ctx = document.getElementById('line-chartVitoria').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [2018,2019,2020,2021],
                    datasets: [
                        {
                            label: "Creche",
                            data: [1,2,3,4],
                            backgroundColor:'transparent',
                            borderColor: 'rgba(2,33,36,0.6)',
                        },
                        {
                            label: "Ensino Fundamental",
                            data: [4,7,6,2],
                            backgroundColor:'transparent',
                            borderColor: 'rgba(6,243,16,0.6)',
                        }
                     ],
            }
        });
    
}

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
    const barChartData = await response.json();
    
    const ano = barChartData.content.map((x) => x.ano)
    const esfera = barChartData.content.map((x) => x.esferaGoverno)
    const valorTotal = barChartData.content.map((x) => x.valorTotalEscolas)
    const modalidade = barChartData.content.map((x) => x.modalidadeEnsino)
    
    

    modalidadeData = modalidade

    anoData = ano
    esferaData = esfera
    valorTotalData = valorTotal
    console.log(valorTotalData)
    
    
}
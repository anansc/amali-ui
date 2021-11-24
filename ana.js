
/*
async function repasseChart() {
    await getRepasseData()

    const ctx = document.getElementById('line-chartVitoria').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ano,
                    datasets: [
                        {
                            label: modalidadeData,
                            data: valor,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        }
                     ]
            }
        })

}

**/

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
    console.log(data)

var um = data.Macapa[0][2018];
var dois = data.Macapa[0][2019]
console.log(um)
console.log(dois)

const modalidadeUm = um["modalidadeEnsino"]
console.log(modalidadeUm)
const modalidadeDois = dois["modalidadeEnsino"]
console.log(modalidadeDois)
    /*
const ana = data
console.log(ana)
const modalidade = ana["modalidadeEnsino"]
modalidadeData =  modalidade.toString()
console.log(modalidadeData)

const esfera = ana["esferaGoverno"]

const valor = ana["valorTotalEscolas"]

const ano = ana["ano"]
anoData = ano.toString()
console.log(ano)
*/



}
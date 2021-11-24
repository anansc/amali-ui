var anoData = [], modalidadeData = [], valorData = [];

async function repasseChart() {
    await getRepasseData()

    const ctx = document.getElementById('line-chartVitoria').getContext('2d');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: anoData,
                    datasets: [
                        {
                            label: modalidadeData,
                            data: valorData,
                            backgroundColor:'transparent',
                            borderColor: 'rgba(82,33,143,0.6)',
                        }
                     ]
            }
        })

}



repasseChart()

async function getRepasseData(){
    const apiUrl = "http://localhost:8080/repasse/pMunicipio?municipio=vitoria_do_jari&esferaGoverno=municipal"

    const response = await fetch(apiUrl,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    const data = await response.json();


    const ano = data.map((x) => x.ano)
    const valor = data.map((x) => x.valorTotalEscolas)
    const modalidade = data.map((x) => x.modalidadeEnsino)

    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }    
    const modalidadeU = modalidade.filter(unique)
    
    anoData = ano
    modalidadeData = modalidadeU
    valorData = valor

   console.log(modalidadeData)


}
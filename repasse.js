//////////////// Grafico de repasse por municio///////////////////////////////

var ctx = document.getElementsByClassName ("line-chartMunicipio");

var chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Macapá","Santana","Laranjal do Jari","Oiapoque","Mazagão","Porto Grande","Tartarugalzinho","Pedra Branca do Amapari","Vitória do Jari","Calçoene","Amapá","Ferreira Gomes","Cutias","Itaubal","Serra do Navio","Pracuuba",],
        datasets: [{
            label:"Estado",
            data: [5,10,5,14,40,15,6,14,8,12,15,5,10,20,30,40],
             backgroundColor:'rgb(2,0,36)'
        },
       ]
    }
})

/////////////// Grafico de repasse por modalidade////////////////////////////////////

var ctx = document.getElementsByClassName ("line-chartModalidade");

                var chartGraph = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["Estadual","Municipal",],
                        datasets: [{
                            label:"EJA",
                            data: [2,5],
                             backgroundColor:'rgb(2,33,36)'
                        },
                        {
                            label:"Ensino Médio",
                            data: [38,29],
                             backgroundColor:'rgb(23,0,36)'
                        },
                        {
                            label:"Creche",
                            data: [23,89],
                             backgroundColor:'rgb(2,100,36)'
                        },
                        {
                            label:"Pré-escola",
                            data: [58,39],
                             backgroundColor:'rgb(39,0,36)'
                        },
                        {
                            label:"AEE",
                            data: [30,49],
                             backgroundColor:'rgb(200,0,36)'
                        },
                        {
                            label:"Ens Fundamental",
                            data: [39,49],
                             backgroundColor:'rgb(2,0,255)'
                        },
                        {
                            label:"Indígena",
                            data: [59,09],
                             backgroundColor:'rgb(2,90,106)'
                        },

                       ]
                    },
                    options:{
                     indexAxis: 'y',
                     elements:{
                       bar:{
                         borderWidth: 2,
                       }
                     },
                     responsive: true,
                     plugins: {
                       legend: {
                         position: 'right',
                       },
                    }
                },
              })

//////////////////////////////////// Grafico recursos repassados/////////////////////// 

var ctx = document.getElementsByClassName ("line-chartRecursos");

                   var chartGraph = new Chart(ctx, {
                       type: 'bar',
                       data: {
                           labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
                           datasets: [{
                               label:"Amapá",
                               data: [5,10,5,14,40,15,6,14,8,12,15,5,10],
                                backgroundColor:'rgb(2,0,36)'
                           },
                           {
                               label:"Pará",
                               data: [10,2,4,10,5,6,7,4,2,5,3,10],
                                backgroundColor:'rgb(2,0,36)'

                           }]
                       }
                   })      
              
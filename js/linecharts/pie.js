var chartDom = document.getElementById('pie-chart');
var pieChart = echarts.init(chartDom, 'vintage');
var option;
    window.onresize = function() {
        pieChart.resize();
      };

option = {
  title: {
    text: 'Visão Geral Recursos',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
      'rose1',
      'rose2',
      'rose3',
      'rose4',
      'rose5',
      'rose6',
      'rose7',
      'rose8'
    ]
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Valor Total',
      type: 'pie',
      radius: [20, 140],
      center: ['25%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 33, name: 'rose 2' },
        { value: 28, name: 'rose 3' },
        { value: 22, name: 'rose 4' },
        { value: 20, name: 'rose 5' },
        { value: 15, name: 'rose 6' },
        { value: 12, name: 'rose 7' },
        { value: 10, name: 'rose 8' }
      ]
    },
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [20, 140],
      center: ['75%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        { value: 30, name: 'rose 1' },
        { value: 28, name: 'rose 2' },
        { value: 26, name: 'rose 3' },
        { value: 24, name: 'rose 4' },
        { value: 22, name: 'rose 5' },
        { value: 20, name: 'rose 6' },
        { value: 18, name: 'rose 7' },
        { value: 16, name: 'rose 8' }
      ]
    }
  ]
};

option && myChart.setOption(option);






var anoDataCalcoene = [], modalidadeDataCalcoene = [], crecheDataCalcoene = [], fundDataCalcoene = [], preDataCalcoene = [], aeeDataCalcoene = [], ejaDataCalcoene = [], maisFundDataCalcoene = [], quiloDataCalcoene = [];
calcoeneChart()
async function calcoeneChart() {

    await getAeeDataCalcoene()
    await getCrecheDataCalcoene()
    await getEjaDataCalcoene()
    await getFundDataCalcoene()
    await getMaisFundDataCalcoene()
    await getPreDataCalcoene()
    await getQuiloDataCalcoene()
    await getRepasseDataCalcoene()

    var dom = document.getElementById("recursosCalcoene")
    var echartCalcoene = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartCalcoene.resize();
      };

            setTimeout(function () {

              option = {
                title: {
                  text: 'Visão Geral Recursos',
                  left: 'center'
                },
                tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                  left: 'center',
                  top: 'bottom',
                  data: [
                    'rose1',
                    'rose2',
                    'rose3',
                    'rose4',
                    'rose5',
                    'rose6',
                    'rose7',
                    'rose8'
                  ]
                },
                toolbox: {
                  show: true,
                  feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                  }
                },
                series: [
                  {
                    name: 'Valor Total',
                    type: 'pie',
                    radius: [20, 140],
                    center: ['25%', '50%'],
                    roseType: 'radius',
                    itemStyle: {
                      borderRadius: 5
                    },
                    label: {
                      show: false
                    },
                    emphasis: {
                      label: {
                        show: true
                      }
                    },
                    data: [
                      { value: 40, name: 'rose 1' },
                      { value: 33, name: 'rose 2' },
                      { value: 28, name: 'rose 3' },
                      { value: 22, name: 'rose 4' },
                      { value: 20, name: 'rose 5' },
                      { value: 15, name: 'rose 6' },
                      { value: 12, name: 'rose 7' },
                      { value: 10, name: 'rose 8' }
                    ]
                  },
                  {
                    name: 'Area Mode',
                    type: 'pie',
                    radius: [20, 140],
                    center: ['75%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                      borderRadius: 5
                    },
                    data: [
                      { value: 30, name: 'rose 1' },
                      { value: 28, name: 'rose 2' },
                      { value: 26, name: 'rose 3' },
                      { value: 24, name: 'rose 4' },
                      { value: 22, name: 'rose 5' },
                      { value: 20, name: 'rose 6' },
                      { value: 18, name: 'rose 7' },
                      { value: 16, name: 'rose 8' }
                    ]
                  }
                ],
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartCalcoene.setOption(option);
              };
               
            });

        if (option && typeof option === 'object') {
            echartCalcoene.setOption(option);
        }
}
async function getRepasseDataCalcoene(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=calcoene&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataCalcoene = await response.json();
        
        const ano = DataCalcoene.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataCalcoene = anoU
}
async function getFundDataCalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataCalcoene = await response.json();
    
        var valor = DataCalcoene.map((x) => x.valorTotalEscolas)
        fundDataCalcoene = valor
}
async function getCrecheDataCalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataCalcoene = await response.json();
         valor = DataCalcoene.map((x) => x.valorTotalEscolas)
         crecheDataCalcoene = valor
}
async function getPreDataCalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.valorTotalEscolas)
        preDataCalcoene = valor
}
async function getAeeDataCalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.valorTotalEscolas)
        aeeDataCalcoene = valor
}
async function getEjaDataCalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.valorTotalEscolas)
        ejaDataCalcoene = valor
}
async function getMaisFundDataCalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.valorTotalEscolas)
        maisFundDataCalcoene = valor
}
async function getQuiloDataCalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.valorTotalEscolas)
        quiloDataCalcoene = valor
}
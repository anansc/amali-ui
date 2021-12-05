
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
//////////////////////////// amapa   
var anoDataAmapa = [], modalidadeDataAmapa = [], crecheDataAmapa = [], fundDataAmapa = [], preDataAmapa = [], aeeDataAmapa = [], ejaDataAmapa = [], maisFundDataAmapa = [], quiloDataAmapa = [];
amapaChart()
async function amapaChart() {

await getAeeDataAmapa()
await getCrecheDataAmapa()
await getEjaDataAmapa()
await getFundDataAmapa()
await getMaisFundDataAmapa()
await getPreDataAmapa()
await getQuiloDataAmapa()
await getRepasseDataAmapa()

    
    var dom = document.getElementById("recursosAmapa")
    var echartAmapa = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartAmapa.resize();
      };

        setTimeout(function () {

            option = {
                animationDuration: 2000,
                animationEasing: "elasticOut" ,
                legend: {
                    data: [],
                    type: "scroll",
                    align: "left",
                    top: '8%',
                    left: '13%',
                    widht: '30px',
                    textStyle:{
                        fontSize: '9px',
                        align: 'right'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                grid: {
                    left: '1%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true, 
                },
                toolbox: {
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    },
                    right: '5%',
                    top: '4%',    
                },
                xAxis: [{ 
                    name: 'Anos',
                    nameLocation: 'middle',
                    nameGap: 23,
                    type: 'category',
                    boundaryGap: false, 
                    data: anoDataAmapa,
                    axisLine:{
                        show: false
                    }
                }],
                yAxis: {
                    type: 'value',
                    name: "R$     ",
                    nameLocation: "end",
                    nameTextStyle: {
                        align: "right"
                    }
                },
                series: [
                    
                {
                    name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataAmapa
                    
                    
                },
                {
                    name: 'Fundamental',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: fundDataAmapa
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: preDataAmapa
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: aeeDataAmapa
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: ejaDataAmapa 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: maisFundDataAmapa 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: quiloDataAmapa 
                },
                
                ]
            };
            option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
            echartAmapa.setOption(option);
        });

    if (option && typeof option === 'object') {
        echartAmapa.setOption(option);
    }
}
async function getRepasseDataAmapa(){
    var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=amapa&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataAmapa = await response.json();
    
    const ano = DataAmapa.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataAmapa = anoU
}
async function getFundDataAmapa(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataAmapa = await response.json();

    var valor = DataAmapa.map((x) => x.qtAlunos)
    fundDataAmapa = valor
}
async function getCrecheDataAmapa(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataAmapa = await response.json();
     valor = DataAmapa.map((x) => x.qtAlunos)
     crecheDataAmapa = valor
}
async function getPreDataAmapa(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.qtAlunos)
    preDataAmapa = valor
}
async function getAeeDataAmapa(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.qtAlunos)
    aeeDataAmapa = valor
}
async function getEjaDataAmapa(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.qtAlunos)
    ejaDataAmapa = valor
}
async function getMaisFundDataAmapa(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.qtAlunos)
    maisFundDataAmapa = valor
}
async function getQuiloDataAmapa(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.qtAlunos)
    quiloDataAmapa = valor
}

/////////////calcoene
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
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataCalcoene,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataCalcoene
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataCalcoene
                    },
                    
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataCalcoene
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataCalcoene
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataCalcoene 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataCalcoene 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataCalcoene 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartCalcoene.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartCalcoene.setOption(option);
        }
}
async function getRepasseDataCalcoene(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=calcoene&esferaGoverno=municipal"
    
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
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataCalcoene = await response.json();
    
        var valor = DataCalcoene.map((x) => x.qtAlunos)
        fundDataCalcoene = valor
}
async function getCrecheDataCalcoene(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataCalcoene = await response.json();
         valor = DataCalcoene.map((x) => x.qtAlunos)
         crecheDataCalcoene = valor
}
async function getPreDataCalcoene(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.qtAlunos)
        preDataCalcoene = valor
}
async function getAeeDataCalcoene(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.qtAlunos)
        aeeDataCalcoene = valor
}
async function getEjaDataCalcoene(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.qtAlunos)
        ejaDataCalcoene = valor
}
async function getMaisFundDataCalcoene(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.qtAlunos)
        maisFundDataCalcoene = valor
}
async function getQuiloDataCalcoene(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCalcoene = await response.json();
        valor = DataCalcoene.map((x) => x.qtAlunos)
        quiloDataCalcoene = valor
}

////////////cutias
var anoDataCutias = [], modalidadeDataCutias = [], crecheDataCutias = [], fundDataCutias = [], preDataCutias = [], aeeDataCutias = [], ejaDataCutias = [], maisFundDataCutias = [], quiloDataCutias = [];
cutiasChart()
async function cutiasChart() {

    await getAeeDataCutias()
    await getCrecheDataCutias()
    await getEjaDataCutias()
    await getFundDataCutias()
    await getMaisFundDataCutias()
    await getPreDataCutias()
    await getQuiloDataCutias()
    await getRepasseDataCutias()

        var dom = document.getElementById("recursosCutias")
    var echartCutias = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartCutias.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataCutias,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataCutias
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataCutias
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataCutias
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataCutias
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataCutias 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataCutias 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataCutias 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartCutias.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartCutias.setOption(option);
        }
}
async function getRepasseDataCutias(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=cutias&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataCutias = await response.json();
        
        const ano = DataCutias.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataCutias = anoU
}
async function getFundDataCutias(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataCutias = await response.json();
    
        var valor = DataCutias.map((x) => x.qtAlunos)
        fundDataCutias = valor
}
async function getCrecheDataCutias(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataCutias = await response.json();
         valor = DataCutias.map((x) => x.qtAlunos)
         crecheDataCutias = valor
}
async function getPreDataCutias(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCutias = await response.json();
        valor = DataCutias.map((x) => x.qtAlunos)
        preDataCutias = valor
}
async function getAeeDataCutias(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCutias = await response.json();
        valor = DataCutias.map((x) => x.qtAlunos)
        aeeDataCutias = valor
}
async function getEjaDataCutias(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCutias = await response.json();
        valor = DataCutias.map((x) => x.qtAlunos)
        ejaDataCutias = valor
}
async function getMaisFundDataCutias(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCutias = await response.json();
        valor = DataCutias.map((x) => x.qtAlunos)
        maisFundDataCutias = valor
}
async function getQuiloDataCutias(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataCutias = await response.json();
        valor = DataCutias.map((x) => x.qtAlunos)
        quiloDataCutias = valor
}

//////////macapa
var anoDataMacapa = [], modalidadeDataMacapa = [], crecheDataMacapa = [], fundDataMacapa = [], preDataMacapa = [], aeeDataMacapa = [], ejaDataMacapa = [], maisFundDataMacapa = [], quiloDataMacapa = [];
macapaChart()
async function macapaChart() {

    await getAeeDataMacapa()
    await getCrecheDataMacapa()
    await getEjaDataMacapa()
    await getFundDataMacapa()
    await getMaisFundDataMacapa()
    await getPreDataMacapa()
    await getQuiloDataMacapa()
    await getRepasseDataMacapa()

        var dom = document.getElementById("recursosMacapa")
    var echartMacapa = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartMacapa.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataMacapa,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataMacapa
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataMacapa
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataMacapa
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataMacapa
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataMacapa 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataMacapa 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataMacapa 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartMacapa.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartMacapa.setOption(option);
        }
}
async function getRepasseDataMacapa(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=macapa&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataMacapa = await response.json();
        
        const ano = DataMacapa.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataMacapa = anoU
}
async function getFundDataMacapa(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataMacapa = await response.json();
    
        var valor = DataMacapa.map((x) => x.qtAlunos)
        fundDataMacapa = valor
}
async function getCrecheDataMacapa(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataMacapa = await response.json();
         valor = DataMacapa.map((x) => x.qtAlunos)
         crecheDataMacapa = valor
}
async function getPreDataMacapa(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMacapa = await response.json();
        valor = DataMacapa.map((x) => x.qtAlunos)
        preDataMacapa = valor
}
async function getAeeDataMacapa(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMacapa = await response.json();
        valor = DataMacapa.map((x) => x.qtAlunos)
        aeeDataMacapa = valor
}
async function getEjaDataMacapa(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMacapa = await response.json();
        valor = DataMacapa.map((x) => x.qtAlunos)
        ejaDataMacapa = valor
}
async function getMaisFundDataMacapa(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMacapa = await response.json();
        valor = DataMacapa.map((x) => x.qtAlunos)
        maisFundDataMacapa = valor
}
async function getQuiloDataMacapa(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMacapa = await response.json();
        valor = DataMacapa.map((x) => x.qtAlunos)
        quiloDataMacapa = valor
}

//////////PedraBranca
var anoDataPedra = [], modalidadeDataPedra = [], crecheDataPedra = [], fundDataPedra = [], preDataPedra = [], aeeDataPedra = [], ejaDataPedra = [], maisFundDataPedra = [], quiloDataPedra = [];
pedraChart()
async function pedraChart() {

    await getAeeDataPedra()
    await getCrecheDataPedra()
    await getEjaDataPedra()
    await getFundDataPedra()
    await getMaisFundDataPedra()
    await getPreDataPedra()
    await getQuiloDataPedra()
    await getRepasseDataPedra()

        var dom = document.getElementById("recursosPedra")
    var echartPedra = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartPedra.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataPedra,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataPedra
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataPedra
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataPedra
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataPedra
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataPedra 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataPedra 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataPedra 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartPedra.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartPedra.setOption(option);
        }
}
async function getRepasseDataPedra(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=pedra_branca_do_amapari&esferaGoverno=municipal"
    
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
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataPedra = await response.json();
    
        var valor = DataPedra.map((x) => x.qtAlunos)
        fundDataPedra = valor
}
async function getCrecheDataPedra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataPedra = await response.json();
         valor = DataPedra.map((x) => x.qtAlunos)
         crecheDataPedra = valor
}
async function getPreDataPedra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPedra = await response.json();
        valor = DataPedra.map((x) => x.qtAlunos)
        preDataPedra = valor
}
async function getAeeDataPedra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPedra = await response.json();
        valor = DataPedra.map((x) => x.qtAlunos)
        aeeDataPedra = valor
}
async function getEjaDataPedra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPedra = await response.json();
        valor = DataPedra.map((x) => x.qtAlunos)
        ejaDataPedra = valor
}
async function getMaisFundDataPedra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPedra = await response.json();
        valor = DataPedra.map((x) => x.qtAlunos)
        maisFundDataPedra = valor
}
async function getQuiloDataPedra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPedra = await response.json();
        valor = DataPedra.map((x) => x.qtAlunos)
        quiloDataPedra = valor
}

/////////ferreira
var anoDataFerreira = [], modalidadeDataFerreira = [], crecheDataFerreira = [], fundDataFerreira = [], preDataFerreira = [], aeeDataFerreira = [], ejaDataFerreira = [], maisFundDataFerreira = [], quiloDataFerreira = [];
ferreiraChart()
async function ferreiraChart() {

    await getAeeDataFerreira()
    await getCrecheDataFerreira()
    await getEjaDataFerreira()
    await getFundDataFerreira()
    await getMaisFundDataFerreira()
    await getPreDataFerreira()
    await getQuiloDataFerreira()
    await getRepasseDataFerreira()

        var dom = document.getElementById("recursosFerreira")
    var echartFerreira = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartFerreira.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataFerreira,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataFerreira
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataFerreira
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataFerreira
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataFerreira
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataFerreira 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataFerreira 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataFerreira 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartFerreira.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartFerreira.setOption(option);
        }
}
async function getRepasseDataFerreira(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=ferreira_gomes_gomes&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataFerreira = await response.json();
        
        const ano = DataFerreira.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataFerreira = anoU
}
async function getFundDataFerreira(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataFerreira = await response.json();
    
        var valor = DataFerreira.map((x) => x.qtAlunos)
        fundDataFerreira = valor
}
async function getCrecheDataFerreira(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataFerreira = await response.json();
         valor = DataFerreira.map((x) => x.qtAlunos)
         crecheDataFerreira = valor
         console.log(crecheDataFerreira)
}
async function getPreDataFerreira(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataFerreira = await response.json();
        valor = DataFerreira.map((x) => x.qtAlunos)
        preDataFerreira = valor
}
async function getAeeDataFerreira(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataFerreira = await response.json();
        console.log(DataFerreira)
        valor = DataFerreira.map((x) => x.qtAlunos)
        aeeDataFerreira = valor
}
async function getEjaDataFerreira(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataFerreira = await response.json();
        valor = DataFerreira.map((x) => x.qtAlunos)
        ejaDataFerreira = valor
}
async function getMaisFundDataFerreira(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataFerreira = await response.json();
        valor = DataFerreira.map((x) => x.qtAlunos)
        maisFundDataFerreira = valor
}
async function getQuiloDataFerreira(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataFerreira = await response.json();
        valor = DataFerreira.map((x) => x.qtAlunos)
        quiloDataFerreira = valor
}

/////////////itaubal

var anoDataItaubal = [], modalidadeDataItaubal = [], crecheDataItaubal = [], fundDataItaubal = [], preDataItaubal = [], aeeDataItaubal = [], ejaDataItaubal = [], maisFundDataItaubal = [], quiloDataItaubal = [];
itaubalChart()
async function itaubalChart() {

    await getAeeDataItaubal()
    await getCrecheDataItaubal()
    await getEjaDataItaubal()
    await getFundDataItaubal()
    await getMaisFundDataItaubal()
    await getPreDataItaubal()
    await getQuiloDataItaubal()
    await getRepasseDataItaubal()

        var dom = document.getElementById("recursosItaubal")
    var echartItaubal = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartItaubal.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataItaubal,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataItaubal
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataItaubal
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataItaubal
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataItaubal
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataItaubal 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataItaubal 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataItaubal 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartItaubal.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartItaubal.setOption(option);
        }
}
async function getRepasseDataItaubal(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=itaubal&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataItaubal = await response.json();
        
        const ano = DataItaubal.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataItaubal = anoU
}
async function getFundDataItaubal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataItaubal = await response.json();
    
        var valor = DataItaubal.map((x) => x.qtAlunos)
        fundDataItaubal = valor
}
async function getCrecheDataItaubal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataItaubal = await response.json();
         valor = DataItaubal.map((x) => x.qtAlunos)
         crecheDataItaubal = valor
}
async function getPreDataItaubal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataItaubal = await response.json();
        valor = DataItaubal.map((x) => x.qtAlunos)
        preDataItaubal = valor
}
async function getAeeDataItaubal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataItaubal = await response.json();
        valor = DataItaubal.map((x) => x.qtAlunos)
        aeeDataItaubal = valor
}
async function getEjaDataItaubal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataItaubal = await response.json();
        valor = DataItaubal.map((x) => x.qtAlunos)
        ejaDataItaubal = valor
}
async function getMaisFundDataItaubal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataItaubal = await response.json();
        valor = DataItaubal.map((x) => x.qtAlunos)
        maisFundDataItaubal = valor
}
async function getQuiloDataItaubal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataItaubal = await response.json();
        valor = DataItaubal.map((x) => x.qtAlunos)
        quiloDataItaubal = valor
}

/////////////laranjal
var anoDataLaranjal = [], modalidadeDataLaranjal = [], crecheDataLaranjal = [], fundDataLaranjal = [], preDataLaranjal = [], aeeDataLaranjal = [], ejaDataLaranjal = [], maisFundDataLaranjal = [], quiloDataLaranjal = [];
laranjalChart()
async function laranjalChart() {

    await getAeeDataLaranjal()
    await getCrecheDataLaranjal()
    await getEjaDataLaranjal()
    await getFundDataLaranjal()
    await getMaisFundDataLaranjal()
    await getPreDataLaranjal()
    await getQuiloDataLaranjal()
    await getRepasseDataLaranjal()

        var dom = document.getElementById("recursosLaranjal")
    var echartLaranjal = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartLaranjal.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataLaranjal,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataLaranjal
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataLaranjal
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataLaranjal
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataLaranjal
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataLaranjal 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataLaranjal 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataLaranjal 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartLaranjal.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartLaranjal.setOption(option);
        }
}
async function getRepasseDataLaranjal(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=laranjal_do_jari&esferaGoverno=municipal"
    
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
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataLaranjal = await response.json();
    
        var valor = DataLaranjal.map((x) => x.qtAlunos)
        fundDataLaranjal = valor
}
async function getCrecheDataLaranjal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataLaranjal = await response.json();
         valor = DataLaranjal.map((x) => x.qtAlunos)
         crecheDataLaranjal = valor
}
async function getPreDataLaranjal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataLaranjal = await response.json();
        valor = DataLaranjal.map((x) => x.qtAlunos)
        preDataLaranjal = valor
}
async function getAeeDataLaranjal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataLaranjal = await response.json();
        valor = DataLaranjal.map((x) => x.qtAlunos)
        aeeDataLaranjal = valor
}
async function getEjaDataLaranjal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataLaranjal = await response.json();
        valor = DataLaranjal.map((x) => x.qtAlunos)
        ejaDataLaranjal = valor
}
async function getMaisFundDataLaranjal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataLaranjal = await response.json();
        valor = DataLaranjal.map((x) => x.qtAlunos)
        maisFundDataLaranjal = valor
}
async function getQuiloDataLaranjal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataLaranjal = await response.json();
        valor = DataLaranjal.map((x) => x.qtAlunos)
        quiloDataLaranjal = valor
}

///////////mazagao
var anoDataMazagao = [], modalidadeDataMazagao = [], crecheDataMazagao = [], fundDataMazagao = [], preDataMazagao = [], aeeDataMazagao = [], ejaDataMazagao = [], maisFundDataMazagao = [], quiloDataMazagao = [];
mazagaoChart()
async function mazagaoChart() {

    await getAeeDataMazagao()
    await getCrecheDataMazagao()
    await getEjaDataMazagao()
    await getFundDataMazagao()
    await getMaisFundDataMazagao()
    await getPreDataMazagao()
    await getQuiloDataMazagao()
    await getRepasseDataMazagao()

        var dom = document.getElementById("recursosMazagao")
    var echartMazagao = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartMazagao.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataMazagao,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataMazagao
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataMazagao
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataMazagao
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataMazagao
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataMazagao 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataMazagao 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataMazagao 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartMazagao.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartMazagao.setOption(option);
        }
}
async function getRepasseDataMazagao(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=mazagao&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataMazagao = await response.json();
        
        const ano = DataMazagao.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataMazagao = anoU
}
async function getFundDataMazagao(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataMazagao = await response.json();
    
        var valor = DataMazagao.map((x) => x.qtAlunos)
        fundDataMazagao = valor
}
async function getCrecheDataMazagao(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataMazagao = await response.json();
         valor = DataMazagao.map((x) => x.qtAlunos)
         crecheDataMazagao = valor
}
async function getPreDataMazagao(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMazagao = await response.json();
        valor = DataMazagao.map((x) => x.qtAlunos)
        preDataMazagao = valor
}
async function getAeeDataMazagao(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMazagao = await response.json();
        valor = DataMazagao.map((x) => x.qtAlunos)
        aeeDataMazagao = valor
}
async function getEjaDataMazagao(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMazagao = await response.json();
        valor = DataMazagao.map((x) => x.qtAlunos)
        ejaDataMazagao = valor
}
async function getMaisFundDataMazagao(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMazagao = await response.json();
        valor = DataMazagao.map((x) => x.qtAlunos)
        maisFundDataMazagao = valor
}
async function getQuiloDataMazagao(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataMazagao = await response.json();
        valor = DataMazagao.map((x) => x.qtAlunos)
        quiloDataMazagao = valor
}

////////////porto
var anoDataPorto = [], modalidadeDataPorto = [], crecheDataPorto = [], fundDataPorto = [], preDataPorto = [], aeeDataPorto = [], ejaDataPorto = [], maisFundDataPorto = [], quiloDataPorto = [];
portoChart()
async function portoChart() {

    await getAeeDataPorto()
    await getCrecheDataPorto()
    await getEjaDataPorto()
    await getFundDataPorto()
    await getMaisFundDataPorto()
    await getPreDataPorto()
    await getQuiloDataPorto()
    await getRepasseDataPorto()

        var dom = document.getElementById("recursosPorto")
    var echartPorto = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartPorto.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataPorto,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataPorto
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataPorto
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataPorto
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataPorto
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataPorto 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataPorto 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataPorto 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartPorto.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartPorto.setOption(option);
        }
}
async function getRepasseDataPorto(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=porto_grande&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataPorto = await response.json();
        
        const ano = DataPorto.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataPorto = anoU
}
async function getFundDataPorto(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataPorto = await response.json();
    
        var valor = DataPorto.map((x) => x.qtAlunos)
        fundDataPorto = valor
}
async function getCrecheDataPorto(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataPorto = await response.json();
         valor = DataPorto.map((x) => x.qtAlunos)
         crecheDataPorto = valor
}
async function getPreDataPorto(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPorto = await response.json();
        valor = DataPorto.map((x) => x.qtAlunos)
        preDataPorto = valor
}
async function getAeeDataPorto(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPorto = await response.json();
        valor = DataPorto.map((x) => x.qtAlunos)
        aeeDataPorto = valor
}
async function getEjaDataPorto(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPorto = await response.json();
        valor = DataPorto.map((x) => x.qtAlunos)
        ejaDataPorto = valor
}
async function getMaisFundDataPorto(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPorto = await response.json();
        valor = DataPorto.map((x) => x.qtAlunos)
        maisFundDataPorto = valor
}
async function getQuiloDataPorto(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataPorto = await response.json();
        valor = DataPorto.map((x) => x.qtAlunos)
        quiloDataPorto = valor
}

/////////santana
var anoDataSantana = [], modalidadeDataSantana = [], crecheDataSantana = [], fundDataSantana = [], preDataSantana = [], aeeDataSantana = [], ejaDataSantana = [], maisFundDataSantana = [], quiloDataSantana = [];
santanaChart()
async function santanaChart() {

    await getAeeDataSantana()
    await getCrecheDataSantana()
    await getEjaDataSantana()
    await getFundDataSantana()
    await getMaisFundDataSantana()
    await getPreDataSantana()
    await getQuiloDataSantana()
    await getRepasseDataSantana()

        var dom = document.getElementById("recursosSantana")
    var echartSantana = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartSantana.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataSantana,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataSantana
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataSantana
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataSantana
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataSantana
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataSantana 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataSantana 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataSantana 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartSantana.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartSantana.setOption(option);
        }
}
async function getRepasseDataSantana(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=santana&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataSantana = await response.json();
        
        const ano = DataSantana.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataSantana = anoU
}
async function getFundDataSantana(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataSantana = await response.json();
    
        var valor = DataSantana.map((x) => x.qtAlunos)
        fundDataSantana = valor
}
async function getCrecheDataSantana(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataSantana = await response.json();
         valor = DataSantana.map((x) => x.qtAlunos)
         crecheDataSantana = valor
}
async function getPreDataSantana(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSantana = await response.json();
        valor = DataSantana.map((x) => x.qtAlunos)
        preDataSantana = valor
}
async function getAeeDataSantana(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSantana = await response.json();
        valor = DataSantana.map((x) => x.qtAlunos)
        aeeDataSantana = valor
}
async function getEjaDataSantana(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSantana = await response.json();
        valor = DataSantana.map((x) => x.qtAlunos)
        ejaDataSantana = valor
}
async function getMaisFundDataSantana(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSantana = await response.json();
        valor = DataSantana.map((x) => x.qtAlunos)
        maisFundDataSantana = valor
}
async function getQuiloDataSantana(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSantana = await response.json();
        valor = DataSantana.map((x) => x.qtAlunos)
        quiloDataSantana = valor
}
////////serra do navio

var anoDataSerra = [], modalidadeDataSerra = [], crecheDataSerra = [], fundDataSerra = [], preDataSerra = [], aeeDataSerra = [], ejaDataSerra = [], maisFundDataSerra = [], quiloDataSerra = [];
serraChart()
async function serraChart() {

    await getAeeDataSerra()
    await getCrecheDataSerra()
    await getEjaDataSerra()
    await getFundDataSerra()
    await getMaisFundDataSerra()
    await getPreDataSerra()
    await getQuiloDataSerra()
    await getRepasseDataSerra()

        var dom = document.getElementById("recursosSerra")
    var echartSerra = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartSerra.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataSerra,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataSerra
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataSerra
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataSerra
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataSerra
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataSerra 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataSerra 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataSerra 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartSerra.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartSerra.setOption(option);
        }
}
async function getRepasseDataSerra(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=serra_do_navio&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataSerra = await response.json();
        
        const ano = DataSerra.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataSerra = anoU
}
async function getFundDataSerra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataSerra = await response.json();
    
        var valor = DataSerra.map((x) => x.qtAlunos)
        fundDataSerra = valor
}
async function getCrecheDataSerra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataSerra = await response.json();
         valor = DataSerra.map((x) => x.qtAlunos)
         crecheDataSerra = valor
}
async function getPreDataSerra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSerra = await response.json();
        valor = DataSerra.map((x) => x.qtAlunos)
        preDataSerra = valor
}
async function getAeeDataSerra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSerra = await response.json();
        valor = DataSerra.map((x) => x.qtAlunos)
        aeeDataSerra = valor
}
async function getEjaDataSerra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSerra = await response.json();
        valor = DataSerra.map((x) => x.qtAlunos)
        ejaDataSerra = valor
}
async function getMaisFundDataSerra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSerra = await response.json();
        valor = DataSerra.map((x) => x.qtAlunos)
        maisFundDataSerra = valor
}
async function getQuiloDataSerra(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataSerra = await response.json();
        valor = DataSerra.map((x) => x.qtAlunos)
        quiloDataSerra = valor
}

////////////////////tartarugal
var anoDataTartarugal = [], modalidadeDataTartarugal = [], crecheDataTartarugal = [], fundDataTartarugal = [], preDataTartarugal = [], aeeDataTartarugal = [], ejaDataTartarugal = [], maisFundDataTartarugal = [], quiloDataTartarugal = [];
tartarugalChart()
async function tartarugalChart() {

    await getAeeDataTartarugal()
    await getCrecheDataTartarugal()
    await getEjaDataTartarugal()
    await getFundDataTartarugal()
    await getMaisFundDataTartarugal()
    await getPreDataTartarugal()
    await getQuiloDataTartarugal()
    await getRepasseDataTartarugal()

    var dom = document.getElementById("recursosTartarugal")
    var echartTartarugal = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartTartarugal.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataTartarugal,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataTartarugal
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataTartarugal
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataTartarugal
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataTartarugal
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataTartarugal 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataTartarugal 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataTartarugal 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartTartarugal.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartTartarugal.setOption(option);
        }
}
async function getRepasseDataTartarugal(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=tartarugalzinho&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataTartarugal = await response.json();
        
        const ano = DataTartarugal.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataTartarugal = anoU
}
async function getFundDataTartarugal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataTartarugal = await response.json();
    
        var valor = DataTartarugal.map((x) => x.qtAlunos)
        fundDataTartarugal = valor
}
async function getCrecheDataTartarugal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataTartarugal = await response.json();
         valor = DataTartarugal.map((x) => x.qtAlunos)
         crecheDataTartarugal = valor
}
async function getPreDataTartarugal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataTartarugal = await response.json();
        valor = DataTartarugal.map((x) => x.qtAlunos)
        preDataTartarugal = valor
}
async function getAeeDataTartarugal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataTartarugal = await response.json();
        valor = DataTartarugal.map((x) => x.qtAlunos)
        aeeDataTartarugal = valor
}
async function getEjaDataTartarugal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataTartarugal = await response.json();
        valor = DataTartarugal.map((x) => x.qtAlunos)
        ejaDataTartarugal = valor
}
async function getMaisFundDataTartarugal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataTartarugal = await response.json();
        valor = DataTartarugal.map((x) => x.qtAlunos)
        maisFundDataTartarugal = valor
}
async function getQuiloDataTartarugal(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataTartarugal = await response.json();
        valor = DataTartarugal.map((x) => x.qtAlunos)
        quiloDataTartarugal = valor
}
/////////vitoria

var anoDataVitoria = [], modalidadeDataVitoria = [], crecheDataVitoria = [], fundDataVitoria = [], preDataVitoria = [], aeeDataVitoria = [], ejaDataVitoria = [], maisFundDataVitoria = [], quiloDataVitoria = [];
vitoriaChart()
async function vitoriaChart() {

    await getAeeDataVitoria()
    await getCrecheDataVitoria()
    await getEjaDataVitoria()
    await getFundDataVitoria()
    await getMaisFundDataVitoria()
    await getPreDataVitoria()
    await getQuiloDataVitoria()
    await getRepasseDataVitoria()

        var dom = document.getElementById("recursosVitoria")
    var echartVitoria = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartVitoria.resize();
      };

            setTimeout(function () {

                option = {
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    legend: {
                        data: [],
                        type: "scroll",
                        align: "left",
                        top: '8%',
                        left: '13%',
                        widht: '30px',
                        textStyle:{
                            fontSize: '9px',
                            align: 'right'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true, 
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {
                                show: true
                            }
                        },
                        right: '5%',
                        top: '4%',    
                    },
                    xAxis: [{ 
                        name: 'Anos',
                        nameLocation: 'middle',
                        nameGap: 23,
                        type: 'category',
                        boundaryGap: false, 
                        data: anoDataVitoria,
                        axisLine:{
                            show: false
                        }
                    }],
                    yAxis: {
                        type: 'value',
                        name: "R$     ",
                        nameLocation: "end",
                        nameTextStyle: {
                            align: "right"
                        }
                    },
                    series: [
                        
                    {
                        name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: crecheDataVitoria
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataVitoria
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataVitoria
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataVitoria
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataVitoria 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataVitoria 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataVitoria 
                    },
                    
                    ]
                };
                option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
                echartVitoria.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartVitoria.setOption(option);
        }
}
async function getRepasseDataVitoria(){
        var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=vitoria_do_jari&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataVitoria = await response.json();
        
        const ano = DataVitoria.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataVitoria = anoU
}
async function getFundDataVitoria(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataVitoria = await response.json();
    
        var valor = DataVitoria.map((x) => x.qtAlunos)
        fundDataVitoria = valor
}
async function getCrecheDataVitoria(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataVitoria = await response.json();
         valor = DataVitoria.map((x) => x.qtAlunos)
         crecheDataVitoria = valor
}
async function getPreDataVitoria(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataVitoria = await response.json();
        valor = DataVitoria.map((x) => x.qtAlunos)
        preDataVitoria = valor
}
async function getAeeDataVitoria(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataVitoria = await response.json();
        valor = DataVitoria.map((x) => x.qtAlunos)
        aeeDataVitoria = valor
}
async function getEjaDataVitoria(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataVitoria = await response.json();
        valor = DataVitoria.map((x) => x.qtAlunos)
        ejaDataVitoria = valor
}
async function getMaisFundDataVitoria(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataVitoria = await response.json();
        valor = DataVitoria.map((x) => x.qtAlunos)
        maisFundDataVitoria = valor
}
async function getQuiloDataVitoria(){
        url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataVitoria = await response.json();
        valor = DataVitoria.map((x) => x.qtAlunos)
        quiloDataVitoria = valor
}

/////////oiapoque
var anoDataOiapoque = [], modalidadeDataOiapoque = [], crecheDataOiapoque = [], fundDataOiapoque = [], preDataOiapoque = [], aeeDataOiapoque = [], ejaDataOiapoque = [], maisFundDataOiapoque = [], quiloDataOiapoque = [];
oiapoqueChart()
async function oiapoqueChart() {

await getAeeDataOiapoque()
await getCrecheDataOiapoque()
await getEjaDataOiapoque()
await getFundDataOiapoque()
await getMaisFundDataOiapoque()
await getPreDataOiapoque()
await getQuiloDataOiapoque()
await getRepasseDataOiapoque()

    
    var dom = document.getElementById("recursosOiapoque")
    var echartOiapoque = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartOiapoque.resize();
      };

        setTimeout(function () {

            option = {
                animationDuration: 2000,
                animationEasing: "elasticOut" ,
                legend: {
                    data: [],
                    type: "scroll",
                    align: "left",
                    top: '8%',
                    left: '13%',
                    widht: '30px',
                    textStyle:{
                        fontSize: '9px',
                        align: 'right'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                grid: {
                    left: '1%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true, 
                },
                toolbox: {
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    },
                    right: '5%',
                    top: '4%',    
                },
                xAxis: [{ 
                    name: 'Anos',
                    nameLocation: 'middle',
                    nameGap: 23,
                    type: 'category',
                    boundaryGap: false, 
                    data: anoDataOiapoque,
                    axisLine:{
                        show: false
                    }
                }],
                yAxis: {
                    type: 'value',
                    name: "R$     ",
                    nameLocation: "end",
                    nameTextStyle: {
                        align: "right"
                    }
                },
                series: [
                    
                {
                    name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    emphasis: { focus: 'series' },
                    
                    
                },
                {
                    name: 'Fundamental',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: fundDataOiapoque
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: preDataOiapoque
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: aeeDataOiapoque
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: ejaDataOiapoque 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: maisFundDataOiapoque 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: quiloDataOiapoque 
                },
                
                ]
            };
            option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
            echartOiapoque.setOption(option);
        });

    if (option && typeof option === 'object') {
        echartOiapoque.setOption(option);
    }
}
async function getRepasseDataOiapoque(){
    var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=oiapoque&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataOiapoque = await response.json();
    
    const ano = DataOiapoque.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataOiapoque = anoU
}
async function getFundDataOiapoque(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataOiapoque = await response.json();

    var valor = DataOiapoque.map((x) => x.qtAlunos)
    fundDataOiapoque = valor
}
async function getCrecheDataOiapoque(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataOiapoque = await response.json();
     valor = DataOiapoque.map((x) => x.qtAlunos)
     crecheDataOiapoque = valor
}
async function getPreDataOiapoque(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOiapoque = await response.json();
    valor = DataOiapoque.map((x) => x.qtAlunos)
    preDataOiapoque = valor
}
async function getAeeDataOiapoque(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOiapoque = await response.json();
    valor = DataOiapoque.map((x) => x.qtAlunos)
    aeeDataOiapoque = valor
}
async function getEjaDataOiapoque(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOiapoque = await response.json();
    valor = DataOiapoque.map((x) => x.qtAlunos)
    ejaDataOiapoque = valor
}
async function getMaisFundDataOiapoque(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOiapoque = await response.json();
    valor = DataOiapoque.map((x) => x.qtAlunos)
    maisFundDataOiapoque = valor
}
async function getQuiloDataOiapoque(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataOiapoque = await response.json();
    valor = DataOiapoque.map((x) => x.qtAlunos)
    quiloDataOiapoque = valor
}




////////////////pracuuba
var anoDataPracuuba = [], modalidadeDataPracuuba = [], crecheDataPracuuba = [], fundDataPracuuba = [], preDataPracuuba = [], aeeDataPracuuba = [], ejaDataPracuuba = [], maisFundDataPracuuba = [], quiloDataPracuuba = [];
pracuubaChart()
async function pracuubaChart() {

await getAeeDataPracuuba()
await getCrecheDataPracuuba()
await getEjaDataPracuuba()
await getFundDataPracuuba()
await getMaisFundDataPracuuba()
await getPreDataPracuuba()
await getQuiloDataPracuuba()
await getRepasseDataPracuuba()

    
    var dom = document.getElementById("recursosPracuuba")
    var echartPracuuba = echarts.init(dom, 'vintage');
    var option;
    window.onresize = function() {
        echartPracuuba.resize();
      };

        setTimeout(function () {

            option = {
                animationDuration: 2000,
                animationEasing: "elasticOut" ,
                legend: {
                    data: [],
                    type: "scroll",
                    align: "left",
                    top: '8%',
                    left: '13%',
                    widht: '30px',
                    textStyle:{
                        fontSize: '9px',
                        align: 'right'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                grid: {
                    left: '1%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true, 
                },
                toolbox: {
                    feature: {
                        saveAsImage: {
                            show: true
                        }
                    },
                    right: '5%',
                    top: '4%',    
                },
                xAxis: [{ 
                    name: 'Anos',
                    nameLocation: 'middle',
                    nameGap: 23,
                    type: 'category',
                    boundaryGap: false, 
                    data: anoDataPracuuba,
                    axisLine:{
                        show: false
                    }
                }],
                yAxis: {
                    type: 'value',
                    name: "R$     ",
                    nameLocation: "end",
                    nameTextStyle: {
                        align: "right"
                    }
                },
                series: [
                    
                {
                    name: 'Creche',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    emphasis: { focus: 'series' },
                    
                    
                },
                {
                    name: 'Fundamental',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: fundDataPracuuba
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: preDataPracuuba
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: aeeDataPracuuba
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: ejaDataPracuuba 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: maisFundDataPracuuba 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: quiloDataPracuuba 
                },
                
                ]
            };
            option.legend.data.push('Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola'),
            echartPracuuba.setOption(option);
        });

    if (option && typeof option === 'object') {
        echartPracuuba.setOption(option);
    }
}
async function getRepasseDataPracuuba(){
    var url = "https://amali-api.herokuapp.com/alunos/pMunicipio?municipio=pracuuba&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataPracuuba = await response.json();
    
    const ano = DataPracuuba.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataPracuuba = anoU
}
async function getFundDataPracuuba(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataPracuuba = await response.json();

    var valor = DataPracuuba.map((x) => x.qtAlunos)
    fundDataPracuuba = valor
}
async function getCrecheDataPracuuba(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataPracuuba = await response.json();
     valor = DataPracuuba.map((x) => x.qtAlunos)
     crecheDataPracuuba = valor
}
async function getPreDataPracuuba(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.qtAlunos)
    preDataPracuuba = valor
}
async function getAeeDataPracuuba(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.qtAlunos)
    aeeDataPracuuba = valor
}
async function getEjaDataPracuuba(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.qtAlunos)
    ejaDataPracuuba = valor
}
async function getMaisFundDataPracuuba(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.qtAlunos)
    maisFundDataPracuuba = valor
}
async function getQuiloDataPracuuba(){
    url = "https://amali-api.herokuapp.com/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataPracuuba = await response.json();
    valor = DataPracuuba.map((x) => x.qtAlunos)
    quiloDataPracuuba = valor
}
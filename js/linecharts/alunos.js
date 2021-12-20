
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
//////////////////////////// amapa   
var anoDataAlunosAmapa = [], modalidadeDataAlunosAmapa = [], crecheDataAlunosAmapa = [], fundDataAlunosAmapa = [], preDataAlunosAmapa = [], aeeDataAlunosAmapa = [], ejaDataAlunosAmapa = [], maisFundDataAlunosAmapa = [], quiloDataAlunosAmapa = [];
amapaChart()
async function amapaChart() {

await getAeeDataAlunosAmapa()
await getCrecheDataAlunosAmapa()
await getEjaDataAlunosAmapa()
await getFundDataAlunosAmapa()
await getMaisFundDataAlunosAmapa()
await getPreDataAlunosAmapa()
await getQuiloDataAlunosAmapa()
await getRepasseDataAlunosAmapa()

    
    var dom = document.getElementById("chart-aluno-amapa")
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
                    data: anoDataAlunosAmapa,
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
                    data: crecheDataAlunosAmapa
                    
                    
                },
                {
                    name: 'Fundamental',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: fundDataAlunosAmapa
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: preDataAlunosAmapa
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: aeeDataAlunosAmapa
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: ejaDataAlunosAmapa 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: maisFundDataAlunosAmapa 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: quiloDataAlunosAmapa 
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
async function getRepasseDataAlunosAmapa(){
    var url = "http://localhost:8080/alunos/pMunicipio?municipio=amapa&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataAlunosAmapa = await response.json();
    
    const ano = DataAlunosAmapa.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataAlunosAmapa = anoU
}
async function getFundDataAlunosAmapa(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataAlunosAmapa = await response.json();

    var valor = DataAlunosAmapa.map((x) => x.qtAlunos)
    fundDataAlunosAmapa = valor
}
async function getCrecheDataAlunosAmapa(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataAlunosAmapa = await response.json();
     valor = DataAlunosAmapa.map((x) => x.qtAlunos)
     crecheDataAlunosAmapa = valor
}
async function getPreDataAlunosAmapa(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosAmapa = await response.json();
    valor = DataAlunosAmapa.map((x) => x.qtAlunos)
    preDataAlunosAmapa = valor
}
async function getAeeDataAlunosAmapa(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosAmapa = await response.json();
    valor = DataAlunosAmapa.map((x) => x.qtAlunos)
    aeeDataAlunosAmapa = valor
}
async function getEjaDataAlunosAmapa(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosAmapa = await response.json();
    valor = DataAlunosAmapa.map((x) => x.qtAlunos)
    ejaDataAlunosAmapa = valor
}
async function getMaisFundDataAlunosAmapa(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosAmapa = await response.json();
    valor = DataAlunosAmapa.map((x) => x.qtAlunos)
    maisFundDataAlunosAmapa = valor
}
async function getQuiloDataAlunosAmapa(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=amapa&esferaGoverno=municipal&etapaEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosAmapa = await response.json();
    valor = DataAlunosAmapa.map((x) => x.qtAlunos)
    quiloDataAlunosAmapa = valor
}

/////////////calcoene
var anoDataAlunosCalcoene = [], modalidadeDataAlunosCalcoene = [], crecheDataAlunosCalcoene = [], fundDataAlunosCalcoene = [], preDataAlunosCalcoene = [], aeeDataAlunosCalcoene = [], ejaDataAlunosCalcoene = [], maisFundDataAlunosCalcoene = [], quiloDataAlunosCalcoene = [];
calcoeneChart()
async function calcoeneChart() {

    await getAeeDataAlunosCalcoene()
    await getCrecheDataAlunosCalcoene()
    await getEjaDataAlunosCalcoene()
    await getFundDataAlunosCalcoene()
    await getMaisFundDataAlunosCalcoene()
    await getPreDataAlunosCalcoene()
    await getQuiloDataAlunosCalcoene()
    await getRepasseDataAlunosCalcoene()

        var dom = document.getElementById("chart-aluno-calcoene")
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
                        data: anoDataAlunosCalcoene,
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
                    data: crecheDataAlunosCalcoene
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosCalcoene
                    },
                    
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosCalcoene
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosCalcoene
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosCalcoene 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosCalcoene 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosCalcoene 
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
async function getRepasseDataAlunosCalcoene(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=calcoene&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosCalcoene = await response.json();
        
        const ano = DataAlunosCalcoene.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosCalcoene = anoU
}
async function getFundDataAlunosCalcoene(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosCalcoene = await response.json();
    
        var valor = DataAlunosCalcoene.map((x) => x.qtAlunos)
        fundDataAlunosCalcoene = valor
}
async function getCrecheDataAlunosCalcoene(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosCalcoene = await response.json();
         valor = DataAlunosCalcoene.map((x) => x.qtAlunos)
         crecheDataAlunosCalcoene = valor
}
async function getPreDataAlunosCalcoene(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCalcoene = await response.json();
        valor = DataAlunosCalcoene.map((x) => x.qtAlunos)
        preDataAlunosCalcoene = valor
}
async function getAeeDataAlunosCalcoene(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCalcoene = await response.json();
        valor = DataAlunosCalcoene.map((x) => x.qtAlunos)
        aeeDataAlunosCalcoene = valor
}
async function getEjaDataAlunosCalcoene(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCalcoene = await response.json();
        valor = DataAlunosCalcoene.map((x) => x.qtAlunos)
        ejaDataAlunosCalcoene = valor
}
async function getMaisFundDataAlunosCalcoene(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCalcoene = await response.json();
        valor = DataAlunosCalcoene.map((x) => x.qtAlunos)
        maisFundDataAlunosCalcoene = valor
}
async function getQuiloDataAlunosCalcoene(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=calcoene&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCalcoene = await response.json();
        valor = DataAlunosCalcoene.map((x) => x.qtAlunos)
        quiloDataAlunosCalcoene = valor
}

////////////cutias
var anoDataAlunosCutias = [], modalidadeDataAlunosCutias = [], crecheDataAlunosCutias = [], fundDataAlunosCutias = [], preDataAlunosCutias = [], aeeDataAlunosCutias = [], ejaDataAlunosCutias = [], maisFundDataAlunosCutias = [], quiloDataAlunosCutias = [];
cutiasChart()
async function cutiasChart() {

    await getAeeDataAlunosCutias()
    await getCrecheDataAlunosCutias()
    await getEjaDataAlunosCutias()
    await getFundDataAlunosCutias()
    await getMaisFundDataAlunosCutias()
    await getPreDataAlunosCutias()
    await getQuiloDataAlunosCutias()
    await getRepasseDataAlunosCutias()

        var dom = document.getElementById("chart-aluno-cutias")
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
                        data: anoDataAlunosCutias,
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
                    data: crecheDataAlunosCutias
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosCutias
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosCutias
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosCutias
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosCutias 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosCutias 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosCutias 
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
async function getRepasseDataAlunosCutias(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=cutias&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosCutias = await response.json();
        
        const ano = DataAlunosCutias.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosCutias = anoU
}
async function getFundDataAlunosCutias(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosCutias = await response.json();
    
        var valor = DataAlunosCutias.map((x) => x.qtAlunos)
        fundDataAlunosCutias = valor
}
async function getCrecheDataAlunosCutias(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosCutias = await response.json();
         valor = DataAlunosCutias.map((x) => x.qtAlunos)
         crecheDataAlunosCutias = valor
}
async function getPreDataAlunosCutias(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCutias = await response.json();
        valor = DataAlunosCutias.map((x) => x.qtAlunos)
        preDataAlunosCutias = valor
}
async function getAeeDataAlunosCutias(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCutias = await response.json();
        valor = DataAlunosCutias.map((x) => x.qtAlunos)
        aeeDataAlunosCutias = valor
}
async function getEjaDataAlunosCutias(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCutias = await response.json();
        valor = DataAlunosCutias.map((x) => x.qtAlunos)
        ejaDataAlunosCutias = valor
}
async function getMaisFundDataAlunosCutias(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCutias = await response.json();
        valor = DataAlunosCutias.map((x) => x.qtAlunos)
        maisFundDataAlunosCutias = valor
}
async function getQuiloDataAlunosCutias(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=cutias&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosCutias = await response.json();
        valor = DataAlunosCutias.map((x) => x.qtAlunos)
        quiloDataAlunosCutias = valor
}

//////////macapa
var anoDataAlunosMacapa = [], modalidadeDataAlunosMacapa = [], crecheDataAlunosMacapa = [], fundDataAlunosMacapa = [], preDataAlunosMacapa = [], aeeDataAlunosMacapa = [], ejaDataAlunosMacapa = [], maisFundDataAlunosMacapa = [], quiloDataAlunosMacapa = [];
macapaChart()
async function macapaChart() {

    await getAeeDataAlunosMacapa()
    await getCrecheDataAlunosMacapa()
    await getEjaDataAlunosMacapa()
    await getFundDataAlunosMacapa()
    await getMaisFundDataAlunosMacapa()
    await getPreDataAlunosMacapa()
    await getQuiloDataAlunosMacapa()
    await getRepasseDataAlunosMacapa()

        var dom = document.getElementById("chart-aluno-macapa")
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
                        data: anoDataAlunosMacapa,
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
                    data: crecheDataAlunosMacapa
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosMacapa
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosMacapa
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosMacapa
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosMacapa 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosMacapa 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosMacapa 
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
async function getRepasseDataAlunosMacapa(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=macapa&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosMacapa = await response.json();
        
        const ano = DataAlunosMacapa.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosMacapa = anoU
}
async function getFundDataAlunosMacapa(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosMacapa = await response.json();
    
        var valor = DataAlunosMacapa.map((x) => x.qtAlunos)
        fundDataAlunosMacapa = valor
}
async function getCrecheDataAlunosMacapa(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosMacapa = await response.json();
         valor = DataAlunosMacapa.map((x) => x.qtAlunos)
         crecheDataAlunosMacapa = valor
}
async function getPreDataAlunosMacapa(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMacapa = await response.json();
        valor = DataAlunosMacapa.map((x) => x.qtAlunos)
        preDataAlunosMacapa = valor
}
async function getAeeDataAlunosMacapa(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMacapa = await response.json();
        valor = DataAlunosMacapa.map((x) => x.qtAlunos)
        aeeDataAlunosMacapa = valor
}
async function getEjaDataAlunosMacapa(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMacapa = await response.json();
        valor = DataAlunosMacapa.map((x) => x.qtAlunos)
        ejaDataAlunosMacapa = valor
}
async function getMaisFundDataAlunosMacapa(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMacapa = await response.json();
        valor = DataAlunosMacapa.map((x) => x.qtAlunos)
        maisFundDataAlunosMacapa = valor
}
async function getQuiloDataAlunosMacapa(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=macapa&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMacapa = await response.json();
        valor = DataAlunosMacapa.map((x) => x.qtAlunos)
        quiloDataAlunosMacapa = valor
}

//////////PedraBranca
var anoDataAlunosPedra = [], modalidadeDataAlunosPedra = [], crecheDataAlunosPedra = [], fundDataAlunosPedra = [], preDataAlunosPedra = [], aeeDataAlunosPedra = [], ejaDataAlunosPedra = [], maisFundDataAlunosPedra = [], quiloDataAlunosPedra = [];
pedraChart()
async function pedraChart() {

    await getAeeDataAlunosPedra()
    await getCrecheDataAlunosPedra()
    await getEjaDataAlunosPedra()
    await getFundDataAlunosPedra()
    await getMaisFundDataAlunosPedra()
    await getPreDataAlunosPedra()
    await getQuiloDataAlunosPedra()
    await getRepasseDataAlunosPedra()

        var dom = document.getElementById("chart-aluno-pedra")
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
                        data: anoDataAlunosPedra,
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
                    data: crecheDataAlunosPedra
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosPedra
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosPedra
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosPedra
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosPedra 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosPedra 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosPedra 
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
async function getRepasseDataAlunosPedra(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=pedra_branca_do_amapari&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosPedra = await response.json();
        
        const ano = DataAlunosPedra.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosPedra = anoU
}
async function getFundDataAlunosPedra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosPedra = await response.json();
    
        var valor = DataAlunosPedra.map((x) => x.qtAlunos)
        fundDataAlunosPedra = valor
}
async function getCrecheDataAlunosPedra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosPedra = await response.json();
         valor = DataAlunosPedra.map((x) => x.qtAlunos)
         crecheDataAlunosPedra = valor
}
async function getPreDataAlunosPedra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPedra = await response.json();
        valor = DataAlunosPedra.map((x) => x.qtAlunos)
        preDataAlunosPedra = valor
}
async function getAeeDataAlunosPedra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPedra = await response.json();
        valor = DataAlunosPedra.map((x) => x.qtAlunos)
        aeeDataAlunosPedra = valor
}
async function getEjaDataAlunosPedra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPedra = await response.json();
        valor = DataAlunosPedra.map((x) => x.qtAlunos)
        ejaDataAlunosPedra = valor
}
async function getMaisFundDataAlunosPedra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPedra = await response.json();
        valor = DataAlunosPedra.map((x) => x.qtAlunos)
        maisFundDataAlunosPedra = valor
}
async function getQuiloDataAlunosPedra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=pedra_branca_do_amapari&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPedra = await response.json();
        valor = DataAlunosPedra.map((x) => x.qtAlunos)
        quiloDataAlunosPedra = valor
}

/////////ferreira
var anoDataAlunosFerreira = [], modalidadeDataAlunosFerreira = [], crecheDataAlunosFerreira = [], fundDataAlunosFerreira = [], preDataAlunosFerreira = [], aeeDataAlunosFerreira = [], ejaDataAlunosFerreira = [], maisFundDataAlunosFerreira = [], quiloDataAlunosFerreira = [];
ferreiraChart()
async function ferreiraChart() {

    await getAeeDataAlunosFerreira()
    await getCrecheDataAlunosFerreira()
    await getEjaDataAlunosFerreira()
    await getFundDataAlunosFerreira()
    await getMaisFundDataAlunosFerreira()
    await getPreDataAlunosFerreira()
    await getQuiloDataAlunosFerreira()
    await getRepasseDataAlunosFerreira()

        var dom = document.getElementById("chart-aluno-ferreira")
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
                        data: anoDataAlunosFerreira,
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
                    data: crecheDataAlunosFerreira
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosFerreira
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosFerreira
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosFerreira
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosFerreira 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosFerreira 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosFerreira 
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
async function getRepasseDataAlunosFerreira(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=ferreira_gomes_gomes&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosFerreira = await response.json();
        
        const ano = DataAlunosFerreira.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosFerreira = anoU
}
async function getFundDataAlunosFerreira(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosFerreira = await response.json();
    
        var valor = DataAlunosFerreira.map((x) => x.qtAlunos)
        fundDataAlunosFerreira = valor
}
async function getCrecheDataAlunosFerreira(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosFerreira = await response.json();
         valor = DataAlunosFerreira.map((x) => x.qtAlunos)
         crecheDataAlunosFerreira = valor
         console.log(crecheDataAlunosFerreira)
}
async function getPreDataAlunosFerreira(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosFerreira = await response.json();
        valor = DataAlunosFerreira.map((x) => x.qtAlunos)
        preDataAlunosFerreira = valor
}
async function getAeeDataAlunosFerreira(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosFerreira = await response.json();
        console.log(DataAlunosFerreira)
        valor = DataAlunosFerreira.map((x) => x.qtAlunos)
        aeeDataAlunosFerreira = valor
}
async function getEjaDataAlunosFerreira(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosFerreira = await response.json();
        valor = DataAlunosFerreira.map((x) => x.qtAlunos)
        ejaDataAlunosFerreira = valor
}
async function getMaisFundDataAlunosFerreira(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosFerreira = await response.json();
        valor = DataAlunosFerreira.map((x) => x.qtAlunos)
        maisFundDataAlunosFerreira = valor
}
async function getQuiloDataAlunosFerreira(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=ferreira_gomes&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosFerreira = await response.json();
        valor = DataAlunosFerreira.map((x) => x.qtAlunos)
        quiloDataAlunosFerreira = valor
}

/////////////itaubal

var anoDataAlunosItaubal = [], modalidadeDataAlunosItaubal = [], crecheDataAlunosItaubal = [], fundDataAlunosItaubal = [], preDataAlunosItaubal = [], aeeDataAlunosItaubal = [], ejaDataAlunosItaubal = [], maisFundDataAlunosItaubal = [], quiloDataAlunosItaubal = [];
itaubalChart()
async function itaubalChart() {

    await getAeeDataAlunosItaubal()
    await getCrecheDataAlunosItaubal()
    await getEjaDataAlunosItaubal()
    await getFundDataAlunosItaubal()
    await getMaisFundDataAlunosItaubal()
    await getPreDataAlunosItaubal()
    await getQuiloDataAlunosItaubal()
    await getRepasseDataAlunosItaubal()

        var dom = document.getElementById("chart-aluno-itaubal")
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
                        data: anoDataAlunosItaubal,
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
                    data: crecheDataAlunosItaubal
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosItaubal
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosItaubal
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosItaubal
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosItaubal 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosItaubal 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosItaubal 
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
async function getRepasseDataAlunosItaubal(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=itaubal&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosItaubal = await response.json();
        
        const ano = DataAlunosItaubal.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosItaubal = anoU
}
async function getFundDataAlunosItaubal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosItaubal = await response.json();
    
        var valor = DataAlunosItaubal.map((x) => x.qtAlunos)
        fundDataAlunosItaubal = valor
}
async function getCrecheDataAlunosItaubal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosItaubal = await response.json();
         valor = DataAlunosItaubal.map((x) => x.qtAlunos)
         crecheDataAlunosItaubal = valor
}
async function getPreDataAlunosItaubal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosItaubal = await response.json();
        valor = DataAlunosItaubal.map((x) => x.qtAlunos)
        preDataAlunosItaubal = valor
}
async function getAeeDataAlunosItaubal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosItaubal = await response.json();
        valor = DataAlunosItaubal.map((x) => x.qtAlunos)
        aeeDataAlunosItaubal = valor
}
async function getEjaDataAlunosItaubal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosItaubal = await response.json();
        valor = DataAlunosItaubal.map((x) => x.qtAlunos)
        ejaDataAlunosItaubal = valor
}
async function getMaisFundDataAlunosItaubal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosItaubal = await response.json();
        valor = DataAlunosItaubal.map((x) => x.qtAlunos)
        maisFundDataAlunosItaubal = valor
}
async function getQuiloDataAlunosItaubal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=itaubal&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosItaubal = await response.json();
        valor = DataAlunosItaubal.map((x) => x.qtAlunos)
        quiloDataAlunosItaubal = valor
}

/////////////laranjal
var anoDataAlunosLaranjal = [], modalidadeDataAlunosLaranjal = [], crecheDataAlunosLaranjal = [], fundDataAlunosLaranjal = [], preDataAlunosLaranjal = [], aeeDataAlunosLaranjal = [], ejaDataAlunosLaranjal = [], maisFundDataAlunosLaranjal = [], quiloDataAlunosLaranjal = [];
laranjalChart()
async function laranjalChart() {

    await getAeeDataAlunosLaranjal()
    await getCrecheDataAlunosLaranjal()
    await getEjaDataAlunosLaranjal()
    await getFundDataAlunosLaranjal()
    await getMaisFundDataAlunosLaranjal()
    await getPreDataAlunosLaranjal()
    await getQuiloDataAlunosLaranjal()
    await getRepasseDataAlunosLaranjal()

        var dom = document.getElementById("chart-aluno-laranjal")
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
                        data: anoDataAlunosLaranjal,
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
                    data: crecheDataAlunosLaranjal
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosLaranjal
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosLaranjal
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosLaranjal
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosLaranjal 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosLaranjal 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosLaranjal 
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
async function getRepasseDataAlunosLaranjal(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=laranjal_do_jari&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosLaranjal = await response.json();
        
        const ano = DataAlunosLaranjal.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosLaranjal = anoU
}
async function getFundDataAlunosLaranjal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosLaranjal = await response.json();
    
        var valor = DataAlunosLaranjal.map((x) => x.qtAlunos)
        fundDataAlunosLaranjal = valor
}
async function getCrecheDataAlunosLaranjal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosLaranjal = await response.json();
         valor = DataAlunosLaranjal.map((x) => x.qtAlunos)
         crecheDataAlunosLaranjal = valor
}
async function getPreDataAlunosLaranjal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosLaranjal = await response.json();
        valor = DataAlunosLaranjal.map((x) => x.qtAlunos)
        preDataAlunosLaranjal = valor
}
async function getAeeDataAlunosLaranjal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosLaranjal = await response.json();
        valor = DataAlunosLaranjal.map((x) => x.qtAlunos)
        aeeDataAlunosLaranjal = valor
}
async function getEjaDataAlunosLaranjal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosLaranjal = await response.json();
        valor = DataAlunosLaranjal.map((x) => x.qtAlunos)
        ejaDataAlunosLaranjal = valor
}
async function getMaisFundDataAlunosLaranjal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosLaranjal = await response.json();
        valor = DataAlunosLaranjal.map((x) => x.qtAlunos)
        maisFundDataAlunosLaranjal = valor
}
async function getQuiloDataAlunosLaranjal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=laranjal_do_jari&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosLaranjal = await response.json();
        valor = DataAlunosLaranjal.map((x) => x.qtAlunos)
        quiloDataAlunosLaranjal = valor
}

///////////mazagao
var anoDataAlunosMazagao = [], modalidadeDataAlunosMazagao = [], crecheDataAlunosMazagao = [], fundDataAlunosMazagao = [], preDataAlunosMazagao = [], aeeDataAlunosMazagao = [], ejaDataAlunosMazagao = [], maisFundDataAlunosMazagao = [], quiloDataAlunosMazagao = [];
mazagaoChart()
async function mazagaoChart() {

    await getAeeDataAlunosMazagao()
    await getCrecheDataAlunosMazagao()
    await getEjaDataAlunosMazagao()
    await getFundDataAlunosMazagao()
    await getMaisFundDataAlunosMazagao()
    await getPreDataAlunosMazagao()
    await getQuiloDataAlunosMazagao()
    await getRepasseDataAlunosMazagao()

        var dom = document.getElementById("chart-aluno-mazagao")
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
                        data: anoDataAlunosMazagao,
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
                    data: crecheDataAlunosMazagao
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosMazagao
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosMazagao
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosMazagao
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosMazagao 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosMazagao 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosMazagao 
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
async function getRepasseDataAlunosMazagao(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=mazagao&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosMazagao = await response.json();
        
        const ano = DataAlunosMazagao.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosMazagao = anoU
}
async function getFundDataAlunosMazagao(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosMazagao = await response.json();
    
        var valor = DataAlunosMazagao.map((x) => x.qtAlunos)
        fundDataAlunosMazagao = valor
}
async function getCrecheDataAlunosMazagao(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosMazagao = await response.json();
         valor = DataAlunosMazagao.map((x) => x.qtAlunos)
         crecheDataAlunosMazagao = valor
}
async function getPreDataAlunosMazagao(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMazagao = await response.json();
        valor = DataAlunosMazagao.map((x) => x.qtAlunos)
        preDataAlunosMazagao = valor
}
async function getAeeDataAlunosMazagao(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMazagao = await response.json();
        valor = DataAlunosMazagao.map((x) => x.qtAlunos)
        aeeDataAlunosMazagao = valor
}
async function getEjaDataAlunosMazagao(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMazagao = await response.json();
        valor = DataAlunosMazagao.map((x) => x.qtAlunos)
        ejaDataAlunosMazagao = valor
}
async function getMaisFundDataAlunosMazagao(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMazagao = await response.json();
        valor = DataAlunosMazagao.map((x) => x.qtAlunos)
        maisFundDataAlunosMazagao = valor
}
async function getQuiloDataAlunosMazagao(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=mazagao&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosMazagao = await response.json();
        valor = DataAlunosMazagao.map((x) => x.qtAlunos)
        quiloDataAlunosMazagao = valor
}

////////////porto
var anoDataAlunosPorto = [], modalidadeDataAlunosPorto = [], crecheDataAlunosPorto = [], fundDataAlunosPorto = [], preDataAlunosPorto = [], aeeDataAlunosPorto = [], ejaDataAlunosPorto = [], maisFundDataAlunosPorto = [], quiloDataAlunosPorto = [];
portoChart()
async function portoChart() {

    await getAeeDataAlunosPorto()
    await getCrecheDataAlunosPorto()
    await getEjaDataAlunosPorto()
    await getFundDataAlunosPorto()
    await getMaisFundDataAlunosPorto()
    await getPreDataAlunosPorto()
    await getQuiloDataAlunosPorto()
    await getRepasseDataAlunosPorto()

        var dom = document.getElementById("chart-aluno-porto")
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
                        data: anoDataAlunosPorto,
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
                    data: crecheDataAlunosPorto
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosPorto
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosPorto
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosPorto
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosPorto 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosPorto 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosPorto 
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
async function getRepasseDataAlunosPorto(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=porto_grande&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosPorto = await response.json();
        
        const ano = DataAlunosPorto.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosPorto = anoU
}
async function getFundDataAlunosPorto(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosPorto = await response.json();
    
        var valor = DataAlunosPorto.map((x) => x.qtAlunos)
        fundDataAlunosPorto = valor
}
async function getCrecheDataAlunosPorto(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosPorto = await response.json();
         valor = DataAlunosPorto.map((x) => x.qtAlunos)
         crecheDataAlunosPorto = valor
}
async function getPreDataAlunosPorto(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPorto = await response.json();
        valor = DataAlunosPorto.map((x) => x.qtAlunos)
        preDataAlunosPorto = valor
}
async function getAeeDataAlunosPorto(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPorto = await response.json();
        valor = DataAlunosPorto.map((x) => x.qtAlunos)
        aeeDataAlunosPorto = valor
}
async function getEjaDataAlunosPorto(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPorto = await response.json();
        valor = DataAlunosPorto.map((x) => x.qtAlunos)
        ejaDataAlunosPorto = valor
}
async function getMaisFundDataAlunosPorto(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPorto = await response.json();
        valor = DataAlunosPorto.map((x) => x.qtAlunos)
        maisFundDataAlunosPorto = valor
}
async function getQuiloDataAlunosPorto(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=porto_grande&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosPorto = await response.json();
        valor = DataAlunosPorto.map((x) => x.qtAlunos)
        quiloDataAlunosPorto = valor
}

/////////santana
var anoDataAlunosSantana = [], modalidadeDataAlunosSantana = [], crecheDataAlunosSantana = [], fundDataAlunosSantana = [], preDataAlunosSantana = [], aeeDataAlunosSantana = [], ejaDataAlunosSantana = [], maisFundDataAlunosSantana = [], quiloDataAlunosSantana = [];
santanaChart()
async function santanaChart() {

    await getAeeDataAlunosSantana()
    await getCrecheDataAlunosSantana()
    await getEjaDataAlunosSantana()
    await getFundDataAlunosSantana()
    await getMaisFundDataAlunosSantana()
    await getPreDataAlunosSantana()
    await getQuiloDataAlunosSantana()
    await getRepasseDataAlunosSantana()

        var dom = document.getElementById("chart-aluno-santana")
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
                        data: anoDataAlunosSantana,
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
                    data: crecheDataAlunosSantana
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosSantana
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosSantana
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosSantana
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosSantana 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosSantana 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosSantana 
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
async function getRepasseDataAlunosSantana(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=santana&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosSantana = await response.json();
        
        const ano = DataAlunosSantana.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosSantana = anoU
}
async function getFundDataAlunosSantana(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosSantana = await response.json();
    
        var valor = DataAlunosSantana.map((x) => x.qtAlunos)
        fundDataAlunosSantana = valor
}
async function getCrecheDataAlunosSantana(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosSantana = await response.json();
         valor = DataAlunosSantana.map((x) => x.qtAlunos)
         crecheDataAlunosSantana = valor
}
async function getPreDataAlunosSantana(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSantana = await response.json();
        valor = DataAlunosSantana.map((x) => x.qtAlunos)
        preDataAlunosSantana = valor
}
async function getAeeDataAlunosSantana(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSantana = await response.json();
        valor = DataAlunosSantana.map((x) => x.qtAlunos)
        aeeDataAlunosSantana = valor
}
async function getEjaDataAlunosSantana(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSantana = await response.json();
        valor = DataAlunosSantana.map((x) => x.qtAlunos)
        ejaDataAlunosSantana = valor
}
async function getMaisFundDataAlunosSantana(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSantana = await response.json();
        valor = DataAlunosSantana.map((x) => x.qtAlunos)
        maisFundDataAlunosSantana = valor
}
async function getQuiloDataAlunosSantana(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=santana&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSantana = await response.json();
        valor = DataAlunosSantana.map((x) => x.qtAlunos)
        quiloDataAlunosSantana = valor
}
////////serra do navio

var anoDataAlunosSerra = [], modalidadeDataAlunosSerra = [], crecheDataAlunosSerra = [], fundDataAlunosSerra = [], preDataAlunosSerra = [], aeeDataAlunosSerra = [], ejaDataAlunosSerra = [], maisFundDataAlunosSerra = [], quiloDataAlunosSerra = [];
serraChart()
async function serraChart() {

    await getAeeDataAlunosSerra()
    await getCrecheDataAlunosSerra()
    await getEjaDataAlunosSerra()
    await getFundDataAlunosSerra()
    await getMaisFundDataAlunosSerra()
    await getPreDataAlunosSerra()
    await getQuiloDataAlunosSerra()
    await getRepasseDataAlunosSerra()

        var dom = document.getElementById("chart-aluno-serra")
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
                        data: anoDataAlunosSerra,
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
                    data: crecheDataAlunosSerra
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosSerra
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosSerra
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosSerra
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosSerra 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosSerra 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosSerra 
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
async function getRepasseDataAlunosSerra(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=serra_do_navio&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosSerra = await response.json();
        
        const ano = DataAlunosSerra.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosSerra = anoU
}
async function getFundDataAlunosSerra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosSerra = await response.json();
    
        var valor = DataAlunosSerra.map((x) => x.qtAlunos)
        fundDataAlunosSerra = valor
}
async function getCrecheDataAlunosSerra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosSerra = await response.json();
         valor = DataAlunosSerra.map((x) => x.qtAlunos)
         crecheDataAlunosSerra = valor
}
async function getPreDataAlunosSerra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSerra = await response.json();
        valor = DataAlunosSerra.map((x) => x.qtAlunos)
        preDataAlunosSerra = valor
}
async function getAeeDataAlunosSerra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSerra = await response.json();
        valor = DataAlunosSerra.map((x) => x.qtAlunos)
        aeeDataAlunosSerra = valor
}
async function getEjaDataAlunosSerra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSerra = await response.json();
        valor = DataAlunosSerra.map((x) => x.qtAlunos)
        ejaDataAlunosSerra = valor
}
async function getMaisFundDataAlunosSerra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSerra = await response.json();
        valor = DataAlunosSerra.map((x) => x.qtAlunos)
        maisFundDataAlunosSerra = valor
}
async function getQuiloDataAlunosSerra(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=serra_do_navio&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosSerra = await response.json();
        valor = DataAlunosSerra.map((x) => x.qtAlunos)
        quiloDataAlunosSerra = valor
}

////////////////////tartarugal
var anoDataAlunosTartarugal = [], modalidadeDataAlunosTartarugal = [], crecheDataAlunosTartarugal = [], fundDataAlunosTartarugal = [], preDataAlunosTartarugal = [], aeeDataAlunosTartarugal = [], ejaDataAlunosTartarugal = [], maisFundDataAlunosTartarugal = [], quiloDataAlunosTartarugal = [];
tartarugalChart()
async function tartarugalChart() {

    await getAeeDataAlunosTartarugal()
    await getCrecheDataAlunosTartarugal()
    await getEjaDataAlunosTartarugal()
    await getFundDataAlunosTartarugal()
    await getMaisFundDataAlunosTartarugal()
    await getPreDataAlunosTartarugal()
    await getQuiloDataAlunosTartarugal()
    await getRepasseDataAlunosTartarugal()

    var dom = document.getElementById("chart-aluno-tartarugal")
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
                        data: anoDataAlunosTartarugal,
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
                    data: crecheDataAlunosTartarugal
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosTartarugal
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosTartarugal
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosTartarugal
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosTartarugal 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosTartarugal 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosTartarugal 
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
async function getRepasseDataAlunosTartarugal(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=tartarugalzinho&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosTartarugal = await response.json();
        
        const ano = DataAlunosTartarugal.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosTartarugal = anoU
}
async function getFundDataAlunosTartarugal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosTartarugal = await response.json();
    
        var valor = DataAlunosTartarugal.map((x) => x.qtAlunos)
        fundDataAlunosTartarugal = valor
}
async function getCrecheDataAlunosTartarugal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosTartarugal = await response.json();
         valor = DataAlunosTartarugal.map((x) => x.qtAlunos)
         crecheDataAlunosTartarugal = valor
}
async function getPreDataAlunosTartarugal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosTartarugal = await response.json();
        valor = DataAlunosTartarugal.map((x) => x.qtAlunos)
        preDataAlunosTartarugal = valor
}
async function getAeeDataAlunosTartarugal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosTartarugal = await response.json();
        valor = DataAlunosTartarugal.map((x) => x.qtAlunos)
        aeeDataAlunosTartarugal = valor
}
async function getEjaDataAlunosTartarugal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosTartarugal = await response.json();
        valor = DataAlunosTartarugal.map((x) => x.qtAlunos)
        ejaDataAlunosTartarugal = valor
}
async function getMaisFundDataAlunosTartarugal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosTartarugal = await response.json();
        valor = DataAlunosTartarugal.map((x) => x.qtAlunos)
        maisFundDataAlunosTartarugal = valor
}
async function getQuiloDataAlunosTartarugal(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=tartarugalzinho&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosTartarugal = await response.json();
        valor = DataAlunosTartarugal.map((x) => x.qtAlunos)
        quiloDataAlunosTartarugal = valor
}
/////////vitoria

var anoDataAlunosVitoria = [], modalidadeDataAlunosVitoria = [], crecheDataAlunosVitoria = [], fundDataAlunosVitoria = [], preDataAlunosVitoria = [], aeeDataAlunosVitoria = [], ejaDataAlunosVitoria = [], maisFundDataAlunosVitoria = [], quiloDataAlunosVitoria = [];
vitoriaChart()
async function vitoriaChart() {

    await getAeeDataAlunosVitoria()
    await getCrecheDataAlunosVitoria()
    await getEjaDataAlunosVitoria()
    await getFundDataAlunosVitoria()
    await getMaisFundDataAlunosVitoria()
    await getPreDataAlunosVitoria()
    await getQuiloDataAlunosVitoria()
    await getRepasseDataAlunosVitoria()

        var dom = document.getElementById("chart-aluno-vitoria")
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
                        data: anoDataAlunosVitoria,
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
                    data: crecheDataAlunosVitoria
                        
                        
                    },
                    {
                        name: 'Fundamental',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: fundDataAlunosVitoria
                    },
                    {
                        name: 'Pré-Escola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: preDataAlunosVitoria
                    },
                    {
                        name: 'AEE',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: aeeDataAlunosVitoria
                    },
                    {
                        name: 'EJA',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: ejaDataAlunosVitoria 
                    },
                    {
                        name: '+Educação',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: maisFundDataAlunosVitoria 
                    },
                    {
                        name: 'Quilombola',
                        type: 'line',
                        smooth: true,
                        emphasis: { focus: 'series' },
                        connectNulls: true,
                        data: quiloDataAlunosVitoria 
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
async function getRepasseDataAlunosVitoria(){
        var url = "http://localhost:8080/alunos/pMunicipio?municipio=vitoria_do_jari&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var DataAlunosVitoria = await response.json();
        
        const ano = DataAlunosVitoria.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataAlunosVitoria = anoU
}
async function getFundDataAlunosVitoria(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAlunosVitoria = await response.json();
    
        var valor = DataAlunosVitoria.map((x) => x.qtAlunos)
        fundDataAlunosVitoria = valor
}
async function getCrecheDataAlunosVitoria(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         DataAlunosVitoria = await response.json();
         valor = DataAlunosVitoria.map((x) => x.qtAlunos)
         crecheDataAlunosVitoria = valor
}
async function getPreDataAlunosVitoria(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosVitoria = await response.json();
        valor = DataAlunosVitoria.map((x) => x.qtAlunos)
        preDataAlunosVitoria = valor
}
async function getAeeDataAlunosVitoria(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosVitoria = await response.json();
        valor = DataAlunosVitoria.map((x) => x.qtAlunos)
        aeeDataAlunosVitoria = valor
}
async function getEjaDataAlunosVitoria(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosVitoria = await response.json();
        valor = DataAlunosVitoria.map((x) => x.qtAlunos)
        ejaDataAlunosVitoria = valor
}
async function getMaisFundDataAlunosVitoria(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosVitoria = await response.json();
        valor = DataAlunosVitoria.map((x) => x.qtAlunos)
        maisFundDataAlunosVitoria = valor
}
async function getQuiloDataAlunosVitoria(){
        url = "http://localhost:8080/alunos/pModalidade?municipio=vitoria_do_jari&esferaGoverno=municipal&etapaEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        DataAlunosVitoria = await response.json();
        valor = DataAlunosVitoria.map((x) => x.qtAlunos)
        quiloDataAlunosVitoria = valor
}

/////////oiapoque
var anoDataAlunosOiapoque = [], modalidadeDataAlunosOiapoque = [], crecheDataAlunosOiapoque = [], fundDataAlunosOiapoque = [], preDataAlunosOiapoque = [], aeeDataAlunosOiapoque = [], ejaDataAlunosOiapoque = [], maisFundDataAlunosOiapoque = [], quiloDataAlunosOiapoque = [];
oiapoqueChart()
async function oiapoqueChart() {

await getAeeDataAlunosOiapoque()
await getCrecheDataAlunosOiapoque()
await getEjaDataAlunosOiapoque()
await getFundDataAlunosOiapoque()
await getMaisFundDataAlunosOiapoque()
await getPreDataAlunosOiapoque()
await getQuiloDataAlunosOiapoque()
await getRepasseDataAlunosOiapoque()

    
    var dom = document.getElementById("chart-aluno-oiapoque")
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
                    data: anoDataAlunosOiapoque,
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
                    data: fundDataAlunosOiapoque
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: preDataAlunosOiapoque
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: aeeDataAlunosOiapoque
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: ejaDataAlunosOiapoque 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: maisFundDataAlunosOiapoque 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: quiloDataAlunosOiapoque 
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
async function getRepasseDataAlunosOiapoque(){
    var url = "http://localhost:8080/alunos/pMunicipio?municipio=oiapoque&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataAlunosOiapoque = await response.json();
    
    const ano = DataAlunosOiapoque.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataAlunosOiapoque = anoU
}
async function getFundDataAlunosOiapoque(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataAlunosOiapoque = await response.json();

    var valor = DataAlunosOiapoque.map((x) => x.qtAlunos)
    fundDataAlunosOiapoque = valor
}
async function getCrecheDataAlunosOiapoque(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataAlunosOiapoque = await response.json();
     valor = DataAlunosOiapoque.map((x) => x.qtAlunos)
     crecheDataAlunosOiapoque = valor
}
async function getPreDataAlunosOiapoque(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosOiapoque = await response.json();
    valor = DataAlunosOiapoque.map((x) => x.qtAlunos)
    preDataAlunosOiapoque = valor
}
async function getAeeDataAlunosOiapoque(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosOiapoque = await response.json();
    valor = DataAlunosOiapoque.map((x) => x.qtAlunos)
    aeeDataAlunosOiapoque = valor
}
async function getEjaDataAlunosOiapoque(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosOiapoque = await response.json();
    valor = DataAlunosOiapoque.map((x) => x.qtAlunos)
    ejaDataAlunosOiapoque = valor
}
async function getMaisFundDataAlunosOiapoque(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosOiapoque = await response.json();
    valor = DataAlunosOiapoque.map((x) => x.qtAlunos)
    maisFundDataAlunosOiapoque = valor
}
async function getQuiloDataAlunosOiapoque(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=oiapoque&esferaGoverno=municipal&etapaEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosOiapoque = await response.json();
    valor = DataAlunosOiapoque.map((x) => x.qtAlunos)
    quiloDataAlunosOiapoque = valor
}




////////////////pracuuba
var anoDataAlunosPracuuba = [], modalidadeDataAlunosPracuuba = [], crecheDataAlunosPracuuba = [], fundDataAlunosPracuuba = [], preDataAlunosPracuuba = [], aeeDataAlunosPracuuba = [], ejaDataAlunosPracuuba = [], maisFundDataAlunosPracuuba = [], quiloDataAlunosPracuuba = [];
pracuubaChart()
async function pracuubaChart() {

await getAeeDataAlunosPracuuba()
await getCrecheDataAlunosPracuuba()
await getEjaDataAlunosPracuuba()
await getFundDataAlunosPracuuba()
await getMaisFundDataAlunosPracuuba()
await getPreDataAlunosPracuuba()
await getQuiloDataAlunosPracuuba()
await getRepasseDataAlunosPracuuba()

    
    var dom = document.getElementById("chart-aluno-pracuuba")
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
                    data: anoDataAlunosPracuuba,
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
                    data: fundDataAlunosPracuuba
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: preDataAlunosPracuuba
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: aeeDataAlunosPracuuba
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: ejaDataAlunosPracuuba 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: maisFundDataAlunosPracuuba 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    connectNulls: true,
                    data: quiloDataAlunosPracuuba 
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
async function getRepasseDataAlunosPracuuba(){
    var url = "http://localhost:8080/alunos/pMunicipio?municipio=pracuuba&esferaGoverno=municipal"

    var response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
            }});
    var DataAlunosPracuuba = await response.json();
    
    const ano = DataAlunosPracuuba.map((x) => x.ano)
    const anoU = ano.filter(unique) 
    anoDataAlunosPracuuba = anoU
}
async function getFundDataAlunosPracuuba(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataAlunosPracuuba = await response.json();

    var valor = DataAlunosPracuuba.map((x) => x.qtAlunos)
    fundDataAlunosPracuuba = valor
}
async function getCrecheDataAlunosPracuuba(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataAlunosPracuuba = await response.json();
     valor = DataAlunosPracuuba.map((x) => x.qtAlunos)
     crecheDataAlunosPracuuba = valor
}
async function getPreDataAlunosPracuuba(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosPracuuba = await response.json();
    valor = DataAlunosPracuuba.map((x) => x.qtAlunos)
    preDataAlunosPracuuba = valor
}
async function getAeeDataAlunosPracuuba(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=atendimento_educacional_especializado_(aee)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosPracuuba = await response.json();
    valor = DataAlunosPracuuba.map((x) => x.qtAlunos)
    aeeDataAlunosPracuuba = valor
}
async function getEjaDataAlunosPracuuba(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=educacao_de_jovens_e_adultos_(eja)"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosPracuuba = await response.json();
    valor = DataAlunosPracuuba.map((x) => x.qtAlunos)
    ejaDataAlunosPracuuba = valor
}
async function getMaisFundDataAlunosPracuuba(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosPracuuba = await response.json();
    valor = DataAlunosPracuuba.map((x) => x.qtAlunos)
    maisFundDataAlunosPracuuba = valor
}
async function getQuiloDataAlunosPracuuba(){
    url = "http://localhost:8080/alunos/pModalidade?municipio=pracuuba&esferaGoverno=municipal&etapaEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAlunosPracuuba = await response.json();
    valor = DataAlunosPracuuba.map((x) => x.qtAlunos)
    quiloDataAlunosPracuuba = valor
}
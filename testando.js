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

    var alt = {width: 600,  height: 300}
    var dom = document.getElementById("recursosAmapa")
    var echartAmapa = echarts.init(dom, 'vintage', alt);
    var app = {};
    var option;

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
                    emphasis: { focus: 'series' },
                    
                    
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
    var url = "http://localhost:8080/repasse/pMunicipio?municipio=amapa&esferaGoverno=municipal"

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
    url = "http://localhost:8080/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"

    response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
          }});
    DataAmapa = await response.json();

    var valor = DataAmapa.map((x) => x.valorTotalEscolas)
    fundDataAmapa = valor
}
async function getCrecheDataAmapa(){
    url = "http://localhost:8080/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=creche"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
     DataAmapa = await response.json();
     valor = DataAmapa.map((x) => x.valorTotalEscolas)
     crecheDataAmapa = valor
}
async function getPreDataAmapa(){
    url = "http://localhost:8080/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    preDataAmapa = valor
}
async function getAeeDataAmapa(){
    url = "http://localhost:8080/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=aee"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    aeeDataAmapa = valor
}
async function getEjaDataAmapa(){
    url = "http://localhost:8080/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=eja"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    ejaDataAmapa = valor
}
async function getMaisFundDataAmapa(){
    url = "http://localhost:8080/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    maisFundDataAmapa = valor
}
async function getQuiloDataAmapa(){
    url = "http://localhost:8080/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=quilombola"
 
    response = await fetch(url,{
         method: 'GET',
         headers: {
           'Content-type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
           }});
    DataAmapa = await response.json();
    valor = DataAmapa.map((x) => x.valorTotalEscolas)
    quiloDataAmapa = valor
}
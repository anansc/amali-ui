var anoDataserra = [], modalidadeDataserra = [], crecheDataserra = [], fundDataserra = [], preDataserra = [], aeeDataserra = [], ejaDataserra = [], maisFundDataserra = [], quiloDataserra = [];


async function serraChart() {
    await getRepasseDataserra()
    await getCrecheDataserra()
    await getFundDataserra()
    await getPreDataserra()
    await getAeeDataserra()
    await getEjaDataserra()
    await getMaisFundDataserra()
    await getQuiloDataserra()

        var dom = document.getElementById("line-chartSerra");
        var echartserra = echarts.init(dom, 'vintage', {
            width: 600,
            height: 300
        });
        var app = {};
        var option;

            setTimeout(function () {
            option = {
                
                legend: {
                    data: ['Creche', 'Fundamental', 'Pré-Escola', 'AEE', 'EJA', '+Educação - Fundamental', 'Quilombola']
                },
                tooltip: {
                    trigger: 'axis',
                    showContent: false,
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                    saveAsImage: {show: true}
                    }
                },
                xAxis: { 
                    type: 'category',
                    boundaryGap: false, 
                    data: anoDataserra
                },
                yAxis: {
                    nameGap: 30,
                    type: 'value'
                },
                series: [
                {
                    name: 'Creche',
                    type: 'line',
                    smooth: true,
                    data: crecheDataserra,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    
                    
                },
                {
                    name: 'Fundamental',
                    type: 'line',
                    smooth: true,
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut" ,
                    data: fundDataserra
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDataserra
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDataserra
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDataserra 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDataserra 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDataserra 
                },
                
                ]
            };
            echartserra.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartserra.setOption({
                    series: {
                        id: 'pie',
                        label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                        value: dimension,
                        tooltip: dimension
                        }
                    }
                });
                }
            });
            echartserra.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartserra.setOption(option);
        }
    }


    serraChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDataserra(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=serra&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Dataserra = await response.json();
        
        const ano = Dataserra.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataserra = anoU
    }
    
    async function getFundDataserra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Dataserra = await response.json();
        console.log(Dataserra)
        var valor = Dataserra.map((x) => x.valorTotalEscolas)
        fundDataserra = valor
        console.log(fundDataserra)
    }
    
    async function getCrecheDataserra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Dataserra = await response.json();
         valor = Dataserra.map((x) => x.valorTotalEscolas)
         crecheDataserra = valor
     }
     async function getPreDataserra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataserra = await response.json();
        valor = Dataserra.map((x) => x.valorTotalEscolas)
        preDataserra = valor
    }
    async function getAeeDataserra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataserra = await response.json();
        valor = Dataserra.map((x) => x.valorTotalEscolas)
        aeeDataserra = valor
    }
    async function getEjaDataserra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataserra = await response.json();
        valor = Dataserra.map((x) => x.valorTotalEscolas)
        ejaDataserra = valor
    }
    async function getMaisFundDataserra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataserra = await response.json();
        valor = Dataserra.map((x) => x.valorTotalEscolas)
        maisFundDataserra = valor
    }
    async function getQuiloDataserra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=serra&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataserra = await response.json();
        valor = Dataserra.map((x) => x.valorTotalEscolas)
        quiloDataserra = valor
    }
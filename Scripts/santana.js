var anoDatasantana = [], modalidadeDatasantana = [], crecheDatasantana = [], fundDatasantana = [], preDatasantana = [], aeeDatasantana = [], ejaDatasantana = [], maisFundDatasantana = [], quiloDatasantana = [];


async function santanaChart() {
    await getRepasseDatasantana()
    await getCrecheDatasantana()
    await getFundDatasantana()
    await getPreDatasantana()
    await getAeeDatasantana()
    await getEjaDatasantana()
    await getMaisFundDatasantana()
    await getQuiloDatasantana()

        var dom = document.getElementById("line-chartSantana");
        var echartsantana = echarts.init(dom, 'vintage', {
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
                    data: anoDatasantana
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
                    data: crecheDatasantana,
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
                    data: fundDatasantana
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatasantana
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatasantana
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatasantana 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatasantana 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatasantana 
                },
                
                ]
            };
            echartsantana.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartsantana.setOption({
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
            echartsantana.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartsantana.setOption(option);
        }
    }


    santanaChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatasantana(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=santana&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datasantana = await response.json();
        
        const ano = Datasantana.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatasantana = anoU
    }
    
    async function getFundDatasantana(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datasantana = await response.json();
        console.log(Datasantana)
        var valor = Datasantana.map((x) => x.valorTotalEscolas)
        fundDatasantana = valor
        console.log(fundDatasantana)
    }
    
    async function getCrecheDatasantana(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datasantana = await response.json();
         valor = Datasantana.map((x) => x.valorTotalEscolas)
         crecheDatasantana = valor
     }
     async function getPreDatasantana(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datasantana = await response.json();
        valor = Datasantana.map((x) => x.valorTotalEscolas)
        preDatasantana = valor
    }
    async function getAeeDatasantana(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datasantana = await response.json();
        valor = Datasantana.map((x) => x.valorTotalEscolas)
        aeeDatasantana = valor
    }
    async function getEjaDatasantana(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datasantana = await response.json();
        valor = Datasantana.map((x) => x.valorTotalEscolas)
        ejaDatasantana = valor
    }
    async function getMaisFundDatasantana(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datasantana = await response.json();
        valor = Datasantana.map((x) => x.valorTotalEscolas)
        maisFundDatasantana = valor
    }
    async function getQuiloDatasantana(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=santana&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datasantana = await response.json();
        valor = Datasantana.map((x) => x.valorTotalEscolas)
        quiloDatasantana = valor
    }
var anoDataitaubal = [], modalidadeDataitaubal = [], crecheDataitaubal = [], fundDataitaubal = [], preDataitaubal = [], aeeDataitaubal = [], ejaDataitaubal = [], maisFundDataitaubal = [], quiloDataitaubal = [];


async function itaubalChart() {
    await getRepasseDataitaubal()
    await getCrecheDataitaubal()
    await getFundDataitaubal()
    await getPreDataitaubal()
    await getAeeDataitaubal()
    await getEjaDataitaubal()
    await getMaisFundDataitaubal()
    await getQuiloDataitaubal()

        var dom = document.getElementById("line-chartItaubal");
        var echartitaubal = echarts.init(dom, 'vintage', {
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
                    data: anoDataitaubal
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
                    data: crecheDataitaubal,
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
                    data: fundDataitaubal
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDataitaubal
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDataitaubal
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDataitaubal 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDataitaubal 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDataitaubal 
                },
                
                ]
            };
            echartitaubal.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartitaubal.setOption({
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
            echartitaubal.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartitaubal.setOption(option);
        }
    }


    itaubalChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDataitaubal(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=itaubal&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Dataitaubal = await response.json();
        
        const ano = Dataitaubal.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataitaubal = anoU
    }
    
    async function getFundDataitaubal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Dataitaubal = await response.json();
        console.log(Dataitaubal)
        var valor = Dataitaubal.map((x) => x.valorTotalEscolas)
        fundDataitaubal = valor
        console.log(fundDataitaubal)
    }
    
    async function getCrecheDataitaubal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Dataitaubal = await response.json();
         valor = Dataitaubal.map((x) => x.valorTotalEscolas)
         crecheDataitaubal = valor
     }
     async function getPreDataitaubal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataitaubal = await response.json();
        valor = Dataitaubal.map((x) => x.valorTotalEscolas)
        preDataitaubal = valor
    }
    async function getAeeDataitaubal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataitaubal = await response.json();
        valor = Dataitaubal.map((x) => x.valorTotalEscolas)
        aeeDataitaubal = valor
    }
    async function getEjaDataitaubal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataitaubal = await response.json();
        valor = Dataitaubal.map((x) => x.valorTotalEscolas)
        ejaDataitaubal = valor
    }
    async function getMaisFundDataitaubal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataitaubal = await response.json();
        valor = Dataitaubal.map((x) => x.valorTotalEscolas)
        maisFundDataitaubal = valor
    }
    async function getQuiloDataitaubal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=itaubal&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataitaubal = await response.json();
        valor = Dataitaubal.map((x) => x.valorTotalEscolas)
        quiloDataitaubal = valor
    }
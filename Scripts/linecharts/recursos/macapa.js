var anoDatamacapa = [], modalidadeDatamacapa = [], crecheDatamacapa = [], fundDatamacapa = [], preDatamacapa = [], aeeDatamacapa = [], ejaDatamacapa = [], maisFundDatamacapa = [], quiloDatamacapa = [];


async function macapaChart() {
    await getRepasseDatamacapa()
    await getCrecheDatamacapa()
    await getFundDatamacapa()
    await getPreDatamacapa()
    await getAeeDatamacapa()
    await getEjaDatamacapa()
    await getMaisFundDatamacapa()
    await getQuiloDatamacapa()

        var dom = document.getElementById("line-chartMacapa");
        var echartmacapa = echarts.init(dom, 'vintage', {
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
                    data: anoDatamacapa
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
                    data: crecheDatamacapa,
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
                    data: fundDatamacapa
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatamacapa
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatamacapa
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatamacapa 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatamacapa 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatamacapa 
                },
                
                ]
            };
            echartmacapa.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartmacapa.setOption({
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
            echartmacapa.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartmacapa.setOption(option);
        }
    }


    macapaChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatamacapa(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=macapa&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datamacapa = await response.json();
        
        const ano = Datamacapa.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatamacapa = anoU
    }
    
    async function getFundDatamacapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datamacapa = await response.json();
        console.log(Datamacapa)
        var valor = Datamacapa.map((x) => x.valorTotalEscolas)
        fundDatamacapa = valor
        console.log(fundDatamacapa)
    }
    
    async function getCrecheDatamacapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datamacapa = await response.json();
         valor = Datamacapa.map((x) => x.valorTotalEscolas)
         crecheDatamacapa = valor
     }
     async function getPreDatamacapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamacapa = await response.json();
        valor = Datamacapa.map((x) => x.valorTotalEscolas)
        preDatamacapa = valor
    }
    async function getAeeDatamacapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamacapa = await response.json();
        valor = Datamacapa.map((x) => x.valorTotalEscolas)
        aeeDatamacapa = valor
    }
    async function getEjaDatamacapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamacapa = await response.json();
        valor = Datamacapa.map((x) => x.valorTotalEscolas)
        ejaDatamacapa = valor
    }
    async function getMaisFundDatamacapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamacapa = await response.json();
        valor = Datamacapa.map((x) => x.valorTotalEscolas)
        maisFundDatamacapa = valor
    }
    async function getQuiloDatamacapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=macapa&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamacapa = await response.json();
        valor = Datamacapa.map((x) => x.valorTotalEscolas)
        quiloDatamacapa = valor
    }
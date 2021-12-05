var anoDataamapa = [], modalidadeDataamapa = [], crecheDataamapa = [], fundDataamapa = [], preDataamapa = [], aeeDataamapa = [], ejaDataamapa = [], maisFundDataamapa = [], quiloDataamapa = [];


async function amapaChart() {
    await getRepasseDataamapa()
    await getCrecheDataamapa()
    await getFundDataamapa()
    await getPreDataamapa()
    await getAeeDataamapa()
    await getEjaDataamapa()
    await getMaisFundDataamapa()
    await getQuiloDataamapa()

        var dom = document.getElementById("line-chartAmapa");
        var echartamapa = echarts.init(dom, 'vintage', {
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
                    data: anoDataamapa
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
                    data: crecheDataamapa,
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
                    data: fundDataamapa
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDataamapa
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDataamapa
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDataamapa 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDataamapa 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDataamapa 
                },
                
                ]
            };
            echartamapa.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartamapa.setOption({
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
            echartamapa.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartamapa.setOption(option);
        }
    }


    amapaChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDataamapa(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=amapa&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Dataamapa = await response.json();
        
        const ano = Dataamapa.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataamapa = anoU
    }
    
    async function getFundDataamapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Dataamapa = await response.json();
        console.log(Dataamapa)
        var valor = Dataamapa.map((x) => x.valorTotalEscolas)
        fundDataamapa = valor
        console.log(fundDataamapa)
    }
    
    async function getCrecheDataamapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Dataamapa = await response.json();
         valor = Dataamapa.map((x) => x.valorTotalEscolas)
         crecheDataamapa = valor
     }
     async function getPreDataamapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataamapa = await response.json();
        valor = Dataamapa.map((x) => x.valorTotalEscolas)
        preDataamapa = valor
    }
    async function getAeeDataamapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataamapa = await response.json();
        valor = Dataamapa.map((x) => x.valorTotalEscolas)
        aeeDataamapa = valor
    }
    async function getEjaDataamapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataamapa = await response.json();
        valor = Dataamapa.map((x) => x.valorTotalEscolas)
        ejaDataamapa = valor
    }
    async function getMaisFundDataamapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataamapa = await response.json();
        valor = Dataamapa.map((x) => x.valorTotalEscolas)
        maisFundDataamapa = valor
    }
    async function getQuiloDataamapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataamapa = await response.json();
        valor = Dataamapa.map((x) => x.valorTotalEscolas)
        quiloDataamapa = valor
    }
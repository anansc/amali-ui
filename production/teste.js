var anoDataAmapa = [], modalidadeDataAmapa = [], crecheDataAmapa = [], fundDataAmapa = [], preDataAmapa = [], aeeDataAmapa = [], ejaDataAmapa = [], maisFundDataAmapa = [], quiloDataAmapa = [];


async function amapaChart() {
    await getRepasseDataAmapa()
    await getCrecheDataAmapa()
    await getFundDataAmapa()
    await getPreDataAmapa()
    await getAeeDataAmapa()
    await getEjaDataAmapa()
    await getMaisFundDataAmapa()
    await getQuiloDataAmapa()

        var dom = document.getElementById("line-chartAmapa");
        var echartAmapa = echarts.init(dom, 'vintage', {
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
                    data: anoDataAmapa
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
                    data: crecheDataAmapa,
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
                    data: fundDataAmapa
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDataAmapa
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDataAmapa
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDataAmapa 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDataAmapa 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDataAmapa 
                },
                
                ]
            };
            echartAmapa.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartAmapa.setOption({
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
            echartAmapa.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartAmapa.setOption(option);
        }
    }


    amapaChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDataAmapa(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=amapa&esferaGoverno=municipal"
    
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
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        DataAmapa = await response.json();
        console.log(DataAmapa)
        var valor = DataAmapa.map((x) => x.valorTotalEscolas)
        fundDataAmapa = valor
        console.log(fundDataAmapa)
    }
    
    async function getCrecheDataAmapa(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=creche"
     
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
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
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
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=aee"
     
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
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=eja"
     
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
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
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
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=amapa&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
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
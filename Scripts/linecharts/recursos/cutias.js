var anoDatacutias = [], modalidadeDatacutias = [], crecheDatacutias = [], fundDatacutias = [], preDatacutias = [], aeeDatacutias = [], ejaDatacutias = [], maisFundDatacutias = [], quiloDatacutias = [];


async function cutiasChart() {
    await getRepasseDatacutias()
    await getCrecheDatacutias()
    await getFundDatacutias()
    await getPreDatacutias()
    await getAeeDatacutias()
    await getEjaDatacutias()
    await getMaisFundDatacutias()
    await getQuiloDatacutias()

        var dom = document.getElementById("line-chartCutias");
        var echartcutias = echarts.init(dom, 'vintage', {
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
                    data: anoDatacutias
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
                    data: crecheDatacutias,
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
                    data: fundDatacutias
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatacutias
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatacutias
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatacutias 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatacutias 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatacutias 
                },
                
                ]
            };
            echartcutias.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartcutias.setOption({
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
            echartcutias.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartcutias.setOption(option);
        }
    }


    cutiasChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatacutias(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=cutias&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datacutias = await response.json();
        
        const ano = Datacutias.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatacutias = anoU
    }
    
    async function getFundDatacutias(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datacutias = await response.json();
        console.log(Datacutias)
        var valor = Datacutias.map((x) => x.valorTotalEscolas)
        fundDatacutias = valor
        console.log(fundDatacutias)
    }
    
    async function getCrecheDatacutias(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datacutias = await response.json();
         valor = Datacutias.map((x) => x.valorTotalEscolas)
         crecheDatacutias = valor
     }
     async function getPreDatacutias(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacutias = await response.json();
        valor = Datacutias.map((x) => x.valorTotalEscolas)
        preDatacutias = valor
    }
    async function getAeeDatacutias(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacutias = await response.json();
        valor = Datacutias.map((x) => x.valorTotalEscolas)
        aeeDatacutias = valor
    }
    async function getEjaDatacutias(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacutias = await response.json();
        valor = Datacutias.map((x) => x.valorTotalEscolas)
        ejaDatacutias = valor
    }
    async function getMaisFundDatacutias(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacutias = await response.json();
        valor = Datacutias.map((x) => x.valorTotalEscolas)
        maisFundDatacutias = valor
    }
    async function getQuiloDatacutias(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=cutias&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacutias = await response.json();
        valor = Datacutias.map((x) => x.valorTotalEscolas)
        quiloDatacutias = valor
    }
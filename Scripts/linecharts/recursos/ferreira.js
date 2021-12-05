var anoDataferreira = [], modalidadeDataferreira = [], crecheDataferreira = [], fundDataferreira = [], preDataferreira = [], aeeDataferreira = [], ejaDataferreira = [], maisFundDataferreira = [], quiloDataferreira = [];


async function ferreiraChart() {
    await getRepasseDataferreira()
    await getCrecheDataferreira()
    await getFundDataferreira()
    await getPreDataferreira()
    await getAeeDataferreira()
    await getEjaDataferreira()
    await getMaisFundDataferreira()
    await getQuiloDataferreira()

        var dom = document.getElementById("line-chartFerreira");
        var echartferreira = echarts.init(dom, 'vintage', {
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
                    data: anoDataferreira
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
                    data: crecheDataferreira,
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
                    data: fundDataferreira
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDataferreira
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDataferreira
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDataferreira 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDataferreira 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDataferreira 
                },
                
                ]
            };
            echartferreira.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartferreira.setOption({
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
            echartferreira.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartferreira.setOption(option);
        }
    }


    ferreiraChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDataferreira(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=ferreira&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Dataferreira = await response.json();
        
        const ano = Dataferreira.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataferreira = anoU
    }
    
    async function getFundDataferreira(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Dataferreira = await response.json();
        console.log(Dataferreira)
        var valor = Dataferreira.map((x) => x.valorTotalEscolas)
        fundDataferreira = valor
        console.log(fundDataferreira)
    }
    
    async function getCrecheDataferreira(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Dataferreira = await response.json();
         valor = Dataferreira.map((x) => x.valorTotalEscolas)
         crecheDataferreira = valor
     }
     async function getPreDataferreira(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataferreira = await response.json();
        valor = Dataferreira.map((x) => x.valorTotalEscolas)
        preDataferreira = valor
    }
    async function getAeeDataferreira(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataferreira = await response.json();
        valor = Dataferreira.map((x) => x.valorTotalEscolas)
        aeeDataferreira = valor
    }
    async function getEjaDataferreira(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataferreira = await response.json();
        valor = Dataferreira.map((x) => x.valorTotalEscolas)
        ejaDataferreira = valor
    }
    async function getMaisFundDataferreira(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataferreira = await response.json();
        valor = Dataferreira.map((x) => x.valorTotalEscolas)
        maisFundDataferreira = valor
    }
    async function getQuiloDataferreira(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=ferreira&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataferreira = await response.json();
        valor = Dataferreira.map((x) => x.valorTotalEscolas)
        quiloDataferreira = valor
    }
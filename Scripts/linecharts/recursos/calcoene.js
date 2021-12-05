var anoDatacalcoene = [], modalidadeDatacalcoene = [], crecheDatacalcoene = [], fundDatacalcoene = [], preDatacalcoene = [], aeeDatacalcoene = [], ejaDatacalcoene = [], maisFundDatacalcoene = [], quiloDatacalcoene = [];


async function calcoeneChart() {
    await getRepasseDatacalcoene()
    await getCrecheDatacalcoene()
    await getFundDatacalcoene()
    await getPreDatacalcoene()
    await getAeeDatacalcoene()
    await getEjaDatacalcoene()
    await getMaisFundDatacalcoene()
    await getQuiloDatacalcoene()

        var dom = document.getElementById("line-chartCalcoene");
        var echartcalcoene = echarts.init(dom, 'vintage', {
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
                    data: anoDatacalcoene
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
                    data: crecheDatacalcoene,
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
                    data: fundDatacalcoene
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatacalcoene
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatacalcoene
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatacalcoene 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatacalcoene 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatacalcoene 
                },
                
                ]
            };
            echartcalcoene.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartcalcoene.setOption({
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
            echartcalcoene.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartcalcoene.setOption(option);
        }
    }


    calcoeneChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatacalcoene(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=calcoene&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datacalcoene = await response.json();
        
        const ano = Datacalcoene.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatacalcoene = anoU
    }
    
    async function getFundDatacalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datacalcoene = await response.json();
        console.log(Datacalcoene)
        var valor = Datacalcoene.map((x) => x.valorTotalEscolas)
        fundDatacalcoene = valor
        console.log(fundDatacalcoene)
    }
    
    async function getCrecheDatacalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datacalcoene = await response.json();
         valor = Datacalcoene.map((x) => x.valorTotalEscolas)
         crecheDatacalcoene = valor
     }
     async function getPreDatacalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacalcoene = await response.json();
        valor = Datacalcoene.map((x) => x.valorTotalEscolas)
        preDatacalcoene = valor
    }
    async function getAeeDatacalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacalcoene = await response.json();
        valor = Datacalcoene.map((x) => x.valorTotalEscolas)
        aeeDatacalcoene = valor
    }
    async function getEjaDatacalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacalcoene = await response.json();
        valor = Datacalcoene.map((x) => x.valorTotalEscolas)
        ejaDatacalcoene = valor
    }
    async function getMaisFundDatacalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacalcoene = await response.json();
        valor = Datacalcoene.map((x) => x.valorTotalEscolas)
        maisFundDatacalcoene = valor
    }
    async function getQuiloDatacalcoene(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=calcoene&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datacalcoene = await response.json();
        valor = Datacalcoene.map((x) => x.valorTotalEscolas)
        quiloDatacalcoene = valor
    }
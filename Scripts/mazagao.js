var anoDatamazagao = [], modalidadeDatamazagao = [], crecheDatamazagao = [], fundDatamazagao = [], preDatamazagao = [], aeeDatamazagao = [], ejaDatamazagao = [], maisFundDatamazagao = [], quiloDatamazagao = [];


async function mazagaoChart() {
    await getRepasseDatamazagao()
    await getCrecheDatamazagao()
    await getFundDatamazagao()
    await getPreDatamazagao()
    await getAeeDatamazagao()
    await getEjaDatamazagao()
    await getMaisFundDatamazagao()
    await getQuiloDatamazagao()

        var dom = document.getElementById("line-chartMazagao");
        var echartmazagao = echarts.init(dom, 'vintage', {
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
                    data: anoDatamazagao
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
                    data: crecheDatamazagao,
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
                    data: fundDatamazagao
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatamazagao
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatamazagao
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatamazagao 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatamazagao 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatamazagao 
                },
                
                ]
            };
            echartmazagao.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartmazagao.setOption({
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
            echartmazagao.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartmazagao.setOption(option);
        }
    }


    mazagaoChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatamazagao(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=mazagao&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datamazagao = await response.json();
        
        const ano = Datamazagao.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatamazagao = anoU
    }
    
    async function getFundDatamazagao(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datamazagao = await response.json();
        console.log(Datamazagao)
        var valor = Datamazagao.map((x) => x.valorTotalEscolas)
        fundDatamazagao = valor
        console.log(fundDatamazagao)
    }
    
    async function getCrecheDatamazagao(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datamazagao = await response.json();
         valor = Datamazagao.map((x) => x.valorTotalEscolas)
         crecheDatamazagao = valor
     }
     async function getPreDatamazagao(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamazagao = await response.json();
        valor = Datamazagao.map((x) => x.valorTotalEscolas)
        preDatamazagao = valor
    }
    async function getAeeDatamazagao(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamazagao = await response.json();
        valor = Datamazagao.map((x) => x.valorTotalEscolas)
        aeeDatamazagao = valor
    }
    async function getEjaDatamazagao(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamazagao = await response.json();
        valor = Datamazagao.map((x) => x.valorTotalEscolas)
        ejaDatamazagao = valor
    }
    async function getMaisFundDatamazagao(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamazagao = await response.json();
        valor = Datamazagao.map((x) => x.valorTotalEscolas)
        maisFundDatamazagao = valor
    }
    async function getQuiloDatamazagao(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=mazagao&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datamazagao = await response.json();
        valor = Datamazagao.map((x) => x.valorTotalEscolas)
        quiloDatamazagao = valor
    }
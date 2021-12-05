var anoDatalaranjal = [], modalidadeDatalaranjal = [], crecheDatalaranjal = [], fundDatalaranjal = [], preDatalaranjal = [], aeeDatalaranjal = [], ejaDatalaranjal = [], maisFundDatalaranjal = [], quiloDatalaranjal = [];


async function laranjalChart() {
    await getRepasseDatalaranjal()
    await getCrecheDatalaranjal()
    await getFundDatalaranjal()
    await getPreDatalaranjal()
    await getAeeDatalaranjal()
    await getEjaDatalaranjal()
    await getMaisFundDatalaranjal()
    await getQuiloDatalaranjal()

        var dom = document.getElementById("line-chartLaranjal");
        var echartlaranjal = echarts.init(dom, 'vintage', {
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
                    data: anoDatalaranjal
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
                    data: crecheDatalaranjal,
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
                    data: fundDatalaranjal
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatalaranjal
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatalaranjal
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatalaranjal 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatalaranjal 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatalaranjal 
                },
                
                ]
            };
            echartlaranjal.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartlaranjal.setOption({
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
            echartlaranjal.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartlaranjal.setOption(option);
        }
    }


    laranjalChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatalaranjal(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=laranjal&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datalaranjal = await response.json();
        
        const ano = Datalaranjal.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatalaranjal = anoU
    }
    
    async function getFundDatalaranjal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datalaranjal = await response.json();
        console.log(Datalaranjal)
        var valor = Datalaranjal.map((x) => x.valorTotalEscolas)
        fundDatalaranjal = valor
        console.log(fundDatalaranjal)
    }
    
    async function getCrecheDatalaranjal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datalaranjal = await response.json();
         valor = Datalaranjal.map((x) => x.valorTotalEscolas)
         crecheDatalaranjal = valor
     }
     async function getPreDatalaranjal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datalaranjal = await response.json();
        valor = Datalaranjal.map((x) => x.valorTotalEscolas)
        preDatalaranjal = valor
    }
    async function getAeeDatalaranjal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datalaranjal = await response.json();
        valor = Datalaranjal.map((x) => x.valorTotalEscolas)
        aeeDatalaranjal = valor
    }
    async function getEjaDatalaranjal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datalaranjal = await response.json();
        valor = Datalaranjal.map((x) => x.valorTotalEscolas)
        ejaDatalaranjal = valor
    }
    async function getMaisFundDatalaranjal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datalaranjal = await response.json();
        valor = Datalaranjal.map((x) => x.valorTotalEscolas)
        maisFundDatalaranjal = valor
    }
    async function getQuiloDatalaranjal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=laranjal&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datalaranjal = await response.json();
        valor = Datalaranjal.map((x) => x.valorTotalEscolas)
        quiloDatalaranjal = valor
    }
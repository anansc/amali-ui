var anoDatatartarugal = [], modalidadeDatatartarugal = [], crecheDatatartarugal = [], fundDatatartarugal = [], preDatatartarugal = [], aeeDatatartarugal = [], ejaDatatartarugal = [], maisFundDatatartarugal = [], quiloDatatartarugal = [];


async function tarugalChart() {
    await getRepasseDatatartarugal()
    await getCrecheDatatartarugal()
    await getFundDatatartarugal()
    await getPreDatatartarugal()
    await getAeeDatatartarugal()
    await getEjaDatatartarugal()
    await getMaisFundDatatartarugal()
    await getQuiloDatatartarugal()

        var dom = document.getElementById("line-chartTartarugal");
        var echarttarugal = echarts.init(dom, 'vintage', {
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
                    data: anoDatatartarugal
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
                    data: crecheDatatartarugal,
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
                    data: fundDatatartarugal
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatatartarugal
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatatartarugal
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatatartarugal 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatatartarugal 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatatartarugal 
                },
                
                ]
            };
            echarttarugal.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echarttarugal.setOption({
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
            echarttarugal.setOption(option);
            });

        if (option && typeof option === 'object') {
            echarttarugal.setOption(option);
        }
    }


    tarugalChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatatartarugal(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=tarugal&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datatartarugal = await response.json();
        
        const ano = Datatartarugal.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatatartarugal = anoU
    }
    
    async function getFundDatatartarugal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tarugal&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datatartarugal = await response.json();
        console.log(Datatartarugal)
        var valor = Datatartarugal.map((x) => x.valorTotalEscolas)
        fundDatatartarugal = valor
        console.log(fundDatatartarugal)
    }
    
    async function getCrecheDatatartarugal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tarugal&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datatartarugal = await response.json();
         valor = Datatartarugal.map((x) => x.valorTotalEscolas)
         crecheDatatartarugal = valor
     }
     async function getPreDatatartarugal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tarugal&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datatartarugal = await response.json();
        valor = Datatartarugal.map((x) => x.valorTotalEscolas)
        preDatatartarugal = valor
    }
    async function getAeeDatatartarugal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tarugal&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datatartarugal = await response.json();
        valor = Datatartarugal.map((x) => x.valorTotalEscolas)
        aeeDatatartarugal = valor
    }
    async function getEjaDatatartarugal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tarugal&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datatartarugal = await response.json();
        valor = Datatartarugal.map((x) => x.valorTotalEscolas)
        ejaDatatartarugal = valor
    }
    async function getMaisFundDatatartarugal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tarugal&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datatartarugal = await response.json();
        valor = Datatartarugal.map((x) => x.valorTotalEscolas)
        maisFundDatatartarugal = valor
    }
    async function getQuiloDatatartarugal(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=tarugal&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datatartarugal = await response.json();
        valor = Datatartarugal.map((x) => x.valorTotalEscolas)
        quiloDatatartarugal = valor
    }
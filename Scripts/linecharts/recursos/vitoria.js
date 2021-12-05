var anoDatavitoria = [], modalidadeDatavitoria = [], crecheDatavitoria = [], fundDatavitoria = [], preDatavitoria = [], aeeDatavitoria = [], ejaDatavitoria = [], maisFundDatavitoria = [], quiloDatavitoria = [];


async function vitoriaChart() {
    await getRepasseDatavitoria()
    await getCrecheDatavitoria()
    await getFundDatavitoria()
    await getPreDatavitoria()
    await getAeeDatavitoria()
    await getEjaDatavitoria()
    await getMaisFundDatavitoria()
    await getQuiloDatavitoria()

        var dom = document.getElementById("line-chartVitoria");
        var echartvitoria = echarts.init(dom, 'vintage', {
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
                    data: anoDatavitoria
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
                    data: crecheDatavitoria,
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
                    data: fundDatavitoria
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatavitoria
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatavitoria
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatavitoria 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatavitoria 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatavitoria 
                },
                
                ]
            };
            echartvitoria.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartvitoria.setOption({
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
            echartvitoria.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartvitoria.setOption(option);
        }
    }


    vitoriaChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatavitoria(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=vitoria&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datavitoria = await response.json();
        
        const ano = Datavitoria.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatavitoria = anoU
    }
    
    async function getFundDatavitoria(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datavitoria = await response.json();
        console.log(Datavitoria)
        var valor = Datavitoria.map((x) => x.valorTotalEscolas)
        fundDatavitoria = valor
        console.log(fundDatavitoria)
    }
    
    async function getCrecheDatavitoria(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datavitoria = await response.json();
         valor = Datavitoria.map((x) => x.valorTotalEscolas)
         crecheDatavitoria = valor
     }
     async function getPreDatavitoria(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datavitoria = await response.json();
        valor = Datavitoria.map((x) => x.valorTotalEscolas)
        preDatavitoria = valor
    }
    async function getAeeDatavitoria(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datavitoria = await response.json();
        valor = Datavitoria.map((x) => x.valorTotalEscolas)
        aeeDatavitoria = valor
    }
    async function getEjaDatavitoria(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datavitoria = await response.json();
        valor = Datavitoria.map((x) => x.valorTotalEscolas)
        ejaDatavitoria = valor
    }
    async function getMaisFundDatavitoria(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datavitoria = await response.json();
        valor = Datavitoria.map((x) => x.valorTotalEscolas)
        maisFundDatavitoria = valor
    }
    async function getQuiloDatavitoria(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=vitoria&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datavitoria = await response.json();
        valor = Datavitoria.map((x) => x.valorTotalEscolas)
        quiloDatavitoria = valor
    }
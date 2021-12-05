var anoDataporto = [], modalidadeDataporto = [], crecheDataporto = [], fundDataporto = [], preDataporto = [], aeeDataporto = [], ejaDataporto = [], maisFundDataporto = [], quiloDataporto = [];


async function portoChart() {
    await getRepasseDataporto()
    await getCrecheDataporto()
    await getFundDataporto()
    await getPreDataporto()
    await getAeeDataporto()
    await getEjaDataporto()
    await getMaisFundDataporto()
    await getQuiloDataporto()

        var dom = document.getElementById("line-chartPorto");
        var echartporto = echarts.init(dom, 'vintage', {
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
                    data: anoDataporto
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
                    data: crecheDataporto,
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
                    data: fundDataporto
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDataporto
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDataporto
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDataporto 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDataporto 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDataporto 
                },
                
                ]
            };
            echartporto.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartporto.setOption({
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
            echartporto.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartporto.setOption(option);
        }
    }


    portoChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDataporto(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=porto&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Dataporto = await response.json();
        
        const ano = Dataporto.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataporto = anoU
    }
    
    async function getFundDataporto(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Dataporto = await response.json();
        console.log(Dataporto)
        var valor = Dataporto.map((x) => x.valorTotalEscolas)
        fundDataporto = valor
        console.log(fundDataporto)
    }
    
    async function getCrecheDataporto(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Dataporto = await response.json();
         valor = Dataporto.map((x) => x.valorTotalEscolas)
         crecheDataporto = valor
     }
     async function getPreDataporto(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataporto = await response.json();
        valor = Dataporto.map((x) => x.valorTotalEscolas)
        preDataporto = valor
    }
    async function getAeeDataporto(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataporto = await response.json();
        valor = Dataporto.map((x) => x.valorTotalEscolas)
        aeeDataporto = valor
    }
    async function getEjaDataporto(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataporto = await response.json();
        valor = Dataporto.map((x) => x.valorTotalEscolas)
        ejaDataporto = valor
    }
    async function getMaisFundDataporto(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataporto = await response.json();
        valor = Dataporto.map((x) => x.valorTotalEscolas)
        maisFundDataporto = valor
    }
    async function getQuiloDataporto(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=porto&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataporto = await response.json();
        valor = Dataporto.map((x) => x.valorTotalEscolas)
        quiloDataporto = valor
    }
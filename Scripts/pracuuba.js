var anoDatapracuuba = [], modalidadeDatapracuuba = [], crecheDatapracuuba = [], fundDatapracuuba = [], preDatapracuuba = [], aeeDatapracuuba = [], ejaDatapracuuba = [], maisFundDatapracuuba = [], quiloDatapracuuba = [];


async function pracuubaChart() {
    await getRepasseDatapracuuba()
    await getCrecheDatapracuuba()
    await getFundDatapracuuba()
    await getPreDatapracuuba()
    await getAeeDatapracuuba()
    await getEjaDatapracuuba()
    await getMaisFundDatapracuuba()
    await getQuiloDatapracuuba()

        var dom = document.getElementById("line-chartPracuuba");
        var echartpracuuba = echarts.init(dom, 'vintage', {
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
                    data: anoDatapracuuba
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
                    data: crecheDatapracuuba,
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
                    data: fundDatapracuuba
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatapracuuba
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatapracuuba
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatapracuuba 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatapracuuba 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatapracuuba 
                },
                
                ]
            };
            echartpracuuba.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartpracuuba.setOption({
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
            echartpracuuba.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartpracuuba.setOption(option);
        }
    }


    pracuubaChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatapracuuba(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=pracuuba&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datapracuuba = await response.json();
        
        const ano = Datapracuuba.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatapracuuba = anoU
    }
    
    async function getFundDatapracuuba(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datapracuuba = await response.json();
        console.log(Datapracuuba)
        var valor = Datapracuuba.map((x) => x.valorTotalEscolas)
        fundDatapracuuba = valor
        console.log(fundDatapracuuba)
    }
    
    async function getCrecheDatapracuuba(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datapracuuba = await response.json();
         valor = Datapracuuba.map((x) => x.valorTotalEscolas)
         crecheDatapracuuba = valor
     }
     async function getPreDatapracuuba(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapracuuba = await response.json();
        valor = Datapracuuba.map((x) => x.valorTotalEscolas)
        preDatapracuuba = valor
    }
    async function getAeeDatapracuuba(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapracuuba = await response.json();
        valor = Datapracuuba.map((x) => x.valorTotalEscolas)
        aeeDatapracuuba = valor
    }
    async function getEjaDatapracuuba(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapracuuba = await response.json();
        valor = Datapracuuba.map((x) => x.valorTotalEscolas)
        ejaDatapracuuba = valor
    }
    async function getMaisFundDatapracuuba(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapracuuba = await response.json();
        valor = Datapracuuba.map((x) => x.valorTotalEscolas)
        maisFundDatapracuuba = valor
    }
    async function getQuiloDatapracuuba(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pracuuba&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapracuuba = await response.json();
        valor = Datapracuuba.map((x) => x.valorTotalEscolas)
        quiloDatapracuuba = valor
    }
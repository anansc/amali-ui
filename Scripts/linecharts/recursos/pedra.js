var anoDatapedra = [], modalidadeDatapedra = [], crecheDatapedra = [], fundDatapedra = [], preDatapedra = [], aeeDatapedra = [], ejaDatapedra = [], maisFundDatapedra = [], quiloDatapedra = [];


async function pedraChart() {
    await getRepasseDatapedra()
    await getCrecheDatapedra()
    await getFundDatapedra()
    await getPreDatapedra()
    await getAeeDatapedra()
    await getEjaDatapedra()
    await getMaisFundDatapedra()
    await getQuiloDatapedra()

        var dom = document.getElementById("line-chartPedra");
        var echartpedra = echarts.init(dom, 'vintage', {
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
                    data: anoDatapedra
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
                    data: crecheDatapedra,
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
                    data: fundDatapedra
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDatapedra
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDatapedra
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDatapedra 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDatapedra 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDatapedra 
                },
                
                ]
            };
            echartpedra.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartpedra.setOption({
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
            echartpedra.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartpedra.setOption(option);
        }
    }


    pedraChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDatapedra(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=pedra&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Datapedra = await response.json();
        
        const ano = Datapedra.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDatapedra = anoU
    }
    
    async function getFundDatapedra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Datapedra = await response.json();
        console.log(Datapedra)
        var valor = Datapedra.map((x) => x.valorTotalEscolas)
        fundDatapedra = valor
        console.log(fundDatapedra)
    }
    
    async function getCrecheDatapedra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Datapedra = await response.json();
         valor = Datapedra.map((x) => x.valorTotalEscolas)
         crecheDatapedra = valor
     }
     async function getPreDatapedra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapedra = await response.json();
        valor = Datapedra.map((x) => x.valorTotalEscolas)
        preDatapedra = valor
    }
    async function getAeeDatapedra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapedra = await response.json();
        valor = Datapedra.map((x) => x.valorTotalEscolas)
        aeeDatapedra = valor
    }
    async function getEjaDatapedra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapedra = await response.json();
        valor = Datapedra.map((x) => x.valorTotalEscolas)
        ejaDatapedra = valor
    }
    async function getMaisFundDatapedra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapedra = await response.json();
        valor = Datapedra.map((x) => x.valorTotalEscolas)
        maisFundDatapedra = valor
    }
    async function getQuiloDatapedra(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=pedra&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Datapedra = await response.json();
        valor = Datapedra.map((x) => x.valorTotalEscolas)
        quiloDatapedra = valor
    }
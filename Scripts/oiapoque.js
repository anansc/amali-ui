var anoDataoiapoque = [], modalidadeDataoiapoque = [], crecheDataoiapoque = [], fundDataoiapoque = [], preDataoiapoque = [], aeeDataoiapoque = [], ejaDataoiapoque = [], maisFundDataoiapoque = [], quiloDataoiapoque = [];


async function oiapoqueChart() {
    await getRepasseDataoiapoque()
    await getCrecheDataoiapoque()
    await getFundDataoiapoque()
    await getPreDataoiapoque()
    await getAeeDataoiapoque()
    await getEjaDataoiapoque()
    await getMaisFundDataoiapoque()
    await getQuiloDataoiapoque()

        var dom = document.getElementById("line-chartOiapoque");
        var echartoiapoque = echarts.init(dom, 'vintage', {
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
                    data: anoDataoiapoque
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
                    data: crecheDataoiapoque,
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
                    data: fundDataoiapoque
                },
                {
                    name: 'Pré-Escola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: preDataoiapoque
                },
                {
                    name: 'AEE',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: aeeDataoiapoque
                },
                {
                    name: 'EJA',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: ejaDataoiapoque 
                },
                {
                    name: '+Educação',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: maisFundDataoiapoque 
                },
                {
                    name: 'Quilombola',
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' },
                    animationDuration: 2000,
                    animationEasing: "elasticOut",
                    data: quiloDataoiapoque 
                },
                
                ]
            };
            echartoiapoque.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartoiapoque.setOption({
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
            echartoiapoque.setOption(option);
            });

        if (option && typeof option === 'object') {
            echartoiapoque.setOption(option);
        }
    }


    oiapoqueChart()
    function unique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    async function getRepasseDataoiapoque(){
        var url = "https://amali-api.herokuapp.com/repasse/pMunicipio?municipio=oiapoque&esferaGoverno=municipal"
    
        var response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
                }});
        var Dataoiapoque = await response.json();
        
        const ano = Dataoiapoque.map((x) => x.ano)
        const anoU = ano.filter(unique) 
        anoDataoiapoque = anoU
    }
    
    async function getFundDataoiapoque(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=ensino_fundamental"
    
        response = await fetch(url,{
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
              }});
        Dataoiapoque = await response.json();
        console.log(Dataoiapoque)
        var valor = Dataoiapoque.map((x) => x.valorTotalEscolas)
        fundDataoiapoque = valor
        console.log(fundDataoiapoque)
    }
    
    async function getCrecheDataoiapoque(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=creche"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
         Dataoiapoque = await response.json();
         valor = Dataoiapoque.map((x) => x.valorTotalEscolas)
         crecheDataoiapoque = valor
     }
     async function getPreDataoiapoque(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=pre_escola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataoiapoque = await response.json();
        valor = Dataoiapoque.map((x) => x.valorTotalEscolas)
        preDataoiapoque = valor
    }
    async function getAeeDataoiapoque(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=aee"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataoiapoque = await response.json();
        valor = Dataoiapoque.map((x) => x.valorTotalEscolas)
        aeeDataoiapoque = valor
    }
    async function getEjaDataoiapoque(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=eja"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataoiapoque = await response.json();
        valor = Dataoiapoque.map((x) => x.valorTotalEscolas)
        ejaDataoiapoque = valor
    }
    async function getMaisFundDataoiapoque(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsin0=maiseducação-fundamental"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataoiapoque = await response.json();
        valor = Dataoiapoque.map((x) => x.valorTotalEscolas)
        maisFundDataoiapoque = valor
    }
    async function getQuiloDataoiapoque(){
        url = "https://amali-api.herokuapp.com/repasse/pModalidade?municipio=oiapoque&esferaGoverno=municipal&modalidadeEnsino=quilombola"
     
        response = await fetch(url,{
             method: 'GET',
             headers: {
               'Content-type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'      
               }});
        Dataoiapoque = await response.json();
        valor = Dataoiapoque.map((x) => x.valorTotalEscolas)
        quiloDataoiapoque = valor
    }
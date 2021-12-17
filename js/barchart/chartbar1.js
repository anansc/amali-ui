
var dom = document.getElementById("barchart");
var myChart = echarts.init(dom);
var app = {};
window.onresize = function() {
    echartAmapa.resize();
  };

var option;



option = {
  
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: [],
    type: "scroll",
    align: "left",
    top: '8%',
    left: '13%',
    widht: '30px',
    textStyle:{
        fontSize: '9px',
        align: 'right'
    },
    },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: '2012',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

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
    show: false
  },
  grid: {
    top: '1%',
    left: '1%',
    right: '1%',
    bottom: '1%',
    containLabel: true
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['Amapá', 'Calçoene', 'Macapá', 'Santana', 'Mazagão', 'Pedra Branca'],
    axisTick:{
      show: false
    },
    axisLine:{
      show: false
    },
    axisLabel:{
      ali
    }
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
  ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
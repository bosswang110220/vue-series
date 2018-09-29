module.exports = {
  bar: {
    chart: {
      type: 'column' //指定图表的类型，默认是折线图（line）
    },
    credits: {
      enabled: false
    }, //去掉地址
    title: {
      text: '我的第一个图表' //指定图表标题
    },
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
      '#24CBE5'
    ],
    xAxis: {
      categories: ['1号', '2号', '3号', '3号', '3号'] //指定x轴分组
    },
    yAxis: {
      title: {
        text: '最近七天', //指定y轴的标题

      },
    },
    plotOptions: {
      column: {
        colorByPoint: true
      },
    },

    series: [{ //指定数据列
      name: '小明',
      data: [{
        y: 1000,
        color: "red"
      }, 5000, 4000, 5000, 2000] //数据
    }]
  },
  bar2: {  
    chart: {
        type: 'line'
    },
    title: {
        text: '月平均气温'
    },
    subtitle: {
        text: '数据来源: WXY测试'
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        title: {
            text: '气温 (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                // 开启数据标签
                enabled: true          
            },
            // 关闭鼠标跟踪，对应的提示框、点击事件会失效
            enableMouseTracking: false
        }
    },
    series: [{
        name: '东京',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: '伦敦',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  },
}

import React from 'react'
import echarts from 'echarts'

import dataTime from './timeTest.json';
export default class Bar extends React.Component{

    componentDidMount() {
        this.newEcharts5();
    }

    newEcharts5 = () => {
        var myChart = echarts.init(document.getElementById('bar-simple-5'));
        // 绘制图表
        var data = dataTime.data;
        myChart.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                offset: 0,
                color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#cdd0d5'
            }]),
            // title: {
            //     text: '看过的书'
            // },
            tooltip: {
                trigger: 'item',
                axisPointer: {
                     type : 'shadow'
                },
                formatter: function (param) {
                    var res='<div><p>书名：' + param.data[3] + '</p></div>' 
                    // console.log('param', param);
                    res+='<p>'+'评分：' + param.data[2] +'</p>'
                    return res;
                },
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['玄幻','哲学','现实小说', '武侠'],
                selected: {
                    '玄幻': true,
                    '哲学': true,
                    '现实小说': true,
                    '武侠': false,
                },
                textStyle: {
                    color: "#999",
                    backgroundColor: '#fff',
                    padding: [2, 2, 1, 2],
                }
            },
            xAxis: {
                // offset: -50,
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLabel : {
                    formatter: function(){
                          return "";
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisTick: {
                    show: false,
                },
            },
            yAxis: {
                // offset: -510,
                type: 'time',
                name: '',
                inverse: true,
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLabel : {
                    formatter: function (data) {
                        var res = data
                        // var res=moment(data).format('YYYY-MM-DD')
                        return res;
                    },
                },
                // scale: true,
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            },
            series: [{
                name: '现实小说',
                data: data[3],
                type: 'scatter',
                symbolSize: function (data) {
                    // return Math.sqrt(data[2]) / 5e2;
                    return data[2] * 10 + 10;
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        // position: 'inside',
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            formatter: function (param) {
                                return param.data[3];
                            },
                            show: true,
                            position: "inside",
                            textStyle: {
                                color: "#fff"
                            },
                        }
                    },
                    shadowBlur: 10,
                    // shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    //     offset: 0,
                    //     color: 'rgb(251, 118, 123)'
                    // }, {
                    //     offset: 1,
                    //     color: 'rgb(204, 46, 72)'
                    // }]),
                }
            },{
                name: '哲学',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2] * 10 + 10;
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        // position: 'inside',
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            formatter: function (param) {
                                return param.data[3];
                            },
                            show: true,
                            position: "inside",
                            textStyle: {
                                color: "#fff"
                            },
                        }
                    },
                    shadowBlur: 10,
                    // shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    //     offset: 0,
                    //     color: 'rgb(251, 118, 123)'
                    // }, {
                    //     offset: 1,
                    //     color: 'rgb(204, 46, 72)'
                    // }]),
                }
            },{
                name: '玄幻',
                data: data[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2] * 10 + 10;
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        // position: 'inside',
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            formatter: function (param) {
                                return param.data[3];
                            },
                            show: true,
                            position: "inside",
                            textStyle: {
                                color: "#fff"
                            },
                        }
                    },
                    shadowBlur: 10,
                    // shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    //     offset: 0,
                    //     color: 'rgb(251, 118, 123)'
                    // }, {
                    //     offset: 1,
                    //     color: 'rgb(204, 46, 72)'
                    // }]),
                }
            }, {
                name: '武侠',
                data: data[2],
                type: 'scatter',
                symbolSize: function (data) {
                    return data[2] * 5 + 20;
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        // position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#888',
                        label: {
                            formatter: function (param) {
                                return param.data[3];
                            },
                            show: true,
                            position: "inside",
                            textStyle: {
                                color: "#fff"
                            },
                        }
                    },
                    // 似乎被 normal 压制
                    shadowBlur: 10,
                    // shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    //     offset: 0,
                    //     color: 'rgb(129, 227, 238)'
                    // }, {
                    //     offset: 1,
                    //     color: 'rgb(25, 183, 207)'
                    // }])
                }
            }]
        })
    }

  
    render(){
        return (
            <div id="bar-simple-5" style={{width: 1200, height:600}}></div>
        );
    }
}
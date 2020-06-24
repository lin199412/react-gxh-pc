import React from 'react'
import {Card} from 'antd'
// import echartTheme from './../echartTheme'
import echarts from 'echarts'
//按需加载
// import echarts from 'echarts/lib/echarts'
// 导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
// import ReactEcharts from 'echarts-for-react'
import dataGDP from './scatterGDP.json';
import dataTime from './timeTest.json';
import moment from 'moment';
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
            title: {
                text: '时间轴'
            },
            tooltip: {
                trigger: 'item',
                axisPointer: {
                     type : 'shadow'
                },
                formatter: function (param) {
                    var res='<div><p>时间：' + param.data[1] + '</p></div>' 
                    // console.log('param', param);
                    res+='<p>'+'姓氏：' + param.data[3] +'</p>'
                    return res;
                },
            },
            legend: {
                right: 10,
                data: ['1990', '2015']
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
                        var res=moment(data).format('YYYY-MM-DD')
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
                name: '1990',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
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
                name: '2015',
                data: data[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
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
            <div id="bar-simple-5" style={{width: 1200, height:500}}></div>
        );
    }
}
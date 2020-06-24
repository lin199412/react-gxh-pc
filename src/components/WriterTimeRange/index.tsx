import React from 'react'
import echarts from 'echarts'
export default class Bar extends React.Component{

    componentDidMount() {
        this.newEcharts5();
    }

    newEcharts5 = () => {
        var myChart = echarts.init(document.getElementById('bar-simple-5'));
        // 起点x轴坐标, 起点y轴坐标, 宽, 高, 书名, 
        var data = [
            [0, 30, 100, 100, '与神对话'], 
            [0, 25, -200, 100, '三国演义'], 
            [0, 62, 200, 100, '偷影子的人'], 
            [0, 52, -200, 50, '追风筝的人'], 
            [0, 70, 100, 100, '诛仙'], 
            [0, 40, -100, 50, '卡徒']
        ];
        // 坐标轴x起点, 起点y轴坐标, 半径, 书名, 
        var dataCircle = [
            [60, 39, 50, '与神对话'], 
            [-120, 35, 70, '三国演义'], 
            [120, 75, 80, '偷影子的人'], 
            [-120, 57, 80, '追风筝的人'], 
            [65, 80, 50, '诛仙'], 
            [-60, 45, 40, '卡徒']
        ];
        var colorList = ['#4f81bd', '#c0504d', '#9bbb59', '#604a7b', '#948a54', '#e46c0b'];

        data = echarts.util.map(data, function (item, index) {
            return {
                value: item,
                itemStyle: {
                    // color: colorList[Math.floor(Math.random()*6)]
                    color: 'rgba(122,122,122,0.3)',
                    borderColor: '#333'
                }
            };
        });

        function renderItem(params, api) {
            var start = api.coord([api.value(0), api.value(1)]);
            var style = api.style();
            return {
                type: 'rect',
                shape: {
                    x: start[0],
                    y: start[1],
                    width: api.value(2),
                    height: api.value(3)
                },
                style: style
            };
        }

        function renderCircle(params, api) {
            var start = api.coord([api.value(0), api.value(1)]);
            var style = api.style();
            console.log('绘制圆形', start);
            return {
                type: 'circle',
                shape: {
                    x: start[0],
                    y: start[1],
                    width: api.value(2),
                    height: api.value(2)
                },
                style: style
            };
        }

        let option = {
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                offset: 0,
                color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#cdd0d5'
            }]),
            // title: {
            //     text: 'Profit',
            //     left: 'center'
            // },
            tooltip: {
                trigger: 'item',
                axisPointer: {
                     type : 'shadow'
                },
                formatter: function (param) {
                    var res = ''
                    res+='<div><p>书名：' + param.value[4] + '</p></div>' 
                    // console.log('param', param);
                    res+='<p>'+'评分：' + param.value[2] +'</p>'
                    res+='<p>'+'字数：' + param.value[3] +'</p>'
                    return res;
                },
            },
            xAxis: {
                scale: true,
                min: -300,
                max: 300,
                axisLabel : {
                    formatter: function(){
                          return "";
                    }
                },
            },
            yAxis: {
                inverse: true,
                min: 0,
                max: 100,
                splitLine: {
                    show: false,
                },
            },
            series: [{
                type: 'custom',
                renderItem: renderItem,
                label: {
                    show: true,
                    formatter: function (params) {
                        return params.value[4];
                    },
                    // position: 'inside',
                },
                data: data
            },{
                // name: '现实小说',
                data: dataCircle,
                type: 'scatter',
                symbolSize: function (dataCircle) {
                    // return Math.sqrt(dataCircle[2]) / 5e2;
                    return dataCircle[2];
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            return param.value[3];
                        },
                        // position: 'inside',
                    }
                },
                itemStyle: {
                    normal: {
                        label: {
                            formatter: function (param) {
                                return param.value[3];
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
                type: 'custom',
                renderItem: renderCircle,
                label: {
                    show: true,
                    formatter: function (params) {
                        return params.value[4];
                    },
                    // position: 'inside',
                },
                data: data
            }]
        };
        myChart.setOption(option)
    }

  
    render(){
        return (
            <div id="bar-simple-5" style={{width: 1200, height:600}}></div>
        );
    }
}
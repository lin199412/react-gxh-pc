import React from 'react'
import echarts from 'echarts'
import dataTime from './timeTest.json';
export default class Bar extends React.Component{

    componentDidMount() {
        this.newEcharts5();
    }

    newEcharts5 = () => {
        var myChart = echarts.init(document.getElementById('bar-simple-5'));
        // 起点x轴坐标, 起点y轴坐标, 宽, 高, 书名, 
        var data = [
            [-10, 10, 100, 100, '与神对话'], 
            [16, 15, 200, 100, '三国演义'], 
            [18, 12, 200, 100, '偷影子的人'], 
            [26, 22, 200, 50, '追风筝的人'], 
            [32, 7, 100, 100, '诛仙'], 
            [56, 17, 100, 50, '卡徒']
        ];
        var colorList = ['#4f81bd', '#c0504d', '#9bbb59', '#604a7b', '#948a54', '#e46c0b'];

        data = echarts.util.map(data, function (item, index) {
            return {
                value: item,
                itemStyle: {
                    color: colorList[Math.floor(Math.random()*6)]
                }
            };
        });

        function renderItem(params, api) {
            // var yValue = api.value(2);
            var start = api.coord([api.value(0), api.value(1)]);
            // var size = api.size([api.value(1) - api.value(0), yValue]);
            var style = api.style();
            // console.log({
            //     x: start[0],
            //     y: start[1],
            //     width: size[0],
            //     height: size[1]
            // });
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

        let option = {
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
                scale: true
            },
            yAxis: {
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
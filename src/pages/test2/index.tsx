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
        // this.newEcharts();
        // this.newEcharts2();
        // this.newEcharts3();
        // this.newEcharts4();
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

    newEcharts4 = () => {
        var myChart = echarts.init(document.getElementById('bar-simple-4'));
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
                    var res='<div><p>时间： ' + '' + '</p></div>' 
                    // console.log('param', param);
                    res+='<p>'+'姓氏'+':'+param.data[3]+'</p>'
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

    newEcharts3 = () => {
        var myChart = echarts.init(document.getElementById('bar-simple-1'));
        // 绘制图表
        var data = dataGDP.data;
        myChart.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                offset: 0,
                color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#cdd0d5'
            }]),
            title: {
                text: '1990 与 2015 年各国家人均寿命与 GDP'
            },
            legend: {
                right: 10,
                data: ['1990', '2015']
            },
            xAxis: {
                // splitLine: {
                //     lineStyle: {
                //         type: 'dashed'
                //     }
                // }
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    }
                }
            },
            yAxis: {
                // splitLine: {
                //     lineStyle: {
                //         type: 'dashed'
                //     }
                // },
                scale: true,
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
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                    }, {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                    }])
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
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(129, 227, 238)'
                    }, {
                        offset: 1,
                        color: 'rgb(25, 183, 207)'
                    }])
                }
            }]
        })
    }

    newEcharts = () => {
        var myChart = echarts.init(document.getElementById('bar-simple-1'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    newEcharts2 = ()=>{
        let chart = echarts.init(document.getElementById('bar-simple-2'));
        chart.setOption({
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                     type : 'shadow'
                },
                formatter: function (params) {

                    var res='<div><p>时间：'+params[0].name+'</p></div>' 
                    for(var i=0;i<params.length;i++){
                    res+='<p>'+params[i].seriesName+':'+params[i].data.name+'</p>' + '<p>'+params[i].seriesName+':'+ params[i].data.price+'</p>'
                    }
                    return res;
                    },
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'bar',
                    data:[{
                        value:"100",
                        name:"张三",
                        price:"100.00",
                        number:"15"
                      },
                      {
                        value:"150",
                        name:"李四",
                        price:"200.00",
                        number:"15"
                      },
                      {
                        value:"220",
                        name:"王五",
                        price:"300.00",
                        number:"15"
                      }]
                },
            ]
        })
    }

    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            legend:{
                data:['OFO','摩拜','小蓝']
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO',
                    type: 'bar',
                    data: [2000, 3000, 5500, 7000, 8000, 12000, 20000]
                }, {
                    name: '摩拜',
                    type: 'bar',
                    data: [1500, 3000, 4500, 6000, 8000, 10000, 15000]
                }, {
                    name: '小蓝',
                    type: 'bar',
                    data: [1000, 2000, 2500, 4000, 6000, 7000, 8000]
                }
            ]
        }
        return option;
    }

    getOption3 = () => {
        let option = {
            title: {
                text: '5采购商品数量趋势',//折线图的主标题
                left: '3%',
                textStyle:{  //折线图的标题文字样式
                  fontSize:16,
                  color:"#333",
                  fontWeight:'700'
                }
            },
            tooltip: {
                trigger: 'axis',
                //提示文字
                formatter:function(params){
                  var tipText="";
                  params.forEach(function(item,index){
                    console.log(item);
                    tipText+='<p>' + item.data.name+item.data.price+item.data.number + '</p>';
                  });
                  return tipText;
                }
            },
            //图例组件：标题
            legend: {
              show:true,
                top: '0',
                left:'center',
                textStyle:{
                   //color:["#FE9548"],// 图例颜色
                },
                itemWidth: 30, //图例宽度
                itemHeight: 4, //图例高度度
                data: [{
                  name:'参加活动商品数', //图例名称
                  icon:'rect' //图例样式
                }],
                
            },
            xAxis: {
              type : 'category',
            axisLabel:{
                show: true,
              interval:0,//横轴间距
              rotate:20 ,//横轴标题旋转角度
                  },

            },
            yAxis: {
                type : 'value',
                splitLine :{    //网格线
                  lineStyle:{
                      //设置网格线类型 dotted：虚线  solid:实线
                      type:'dashed' 
                  },
                  show:true //隐藏或显示
                }
            },
            grid: {
                left: '3%',  //网格距离左侧边距
                right: '0%', //网格距离右侧边距
                bottom: '10%', //网格距离右侧边距
                containLabel: true
            },
            series: [
                {
                    name: '参加活动商品数',
                    type: 'line',
                    smooth: true, //是否以弧线展示折线
                    itemStyle : {
                      normal : {        
                        color:'#FE9548',  //折线折点颜色 
                        label: {
                           show: true, //自动显示数据
                           position: 'top', //在上方显示
                           textStyle: { //数值样式
                                color: '#FE9548',
                                fontSize: 12
                            }
                        },  
                        lineStyle:{
                            width:2  //折线宽度
                        } 
                      }    
                    },
                    data:[{
                        value:"100",
                        name:"张三",
                        price:"100.00",
                        number:"15"
                      },
                      {
                        value:"50",
                        name:"李四",
                        price:"100.00",
                        number:"15"
                      }
                      ,
                      {
                        value:"20",
                        name:"王五",
                        price:"100.00",
                        number:"15"
                      }]
                }
                
            ]
        
        };
      return option;
    }
  
//图标大小跟随页面大小自动调整
    render(){
        return (
            <div>
                <Card title="销售图标测试">
                    <div id="bar-simple-5" style={{width: 1200, height:500}}></div>
                </Card>
                <Card title="时间图表测试">
                    <div id="bar-simple-4" style={{height:500}}></div>
                </Card>
                <Card title="散点图测试">
                    <div id="bar-simple-1" style={{height:800}}></div>
                </Card>
                <Card title="柱形图表之一">
                    <div id="bar-simple-2" style={{height:500}}></div>
                </Card>
                <Card title="柱形图表之二">
                    <div id="bar-simple-3" style={{height:500}}></div>
                    {/* <ReactEcharts option={this.getOption2()} theme="Imooc" style={{ height: 500 }} /> */}
                </Card>

            </div>
        );
    }
}
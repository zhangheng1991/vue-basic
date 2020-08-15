<template>
    <div>
    </div  id="container" class="container" ref="chart"></div>
    </div>
</template>
<script>
// import echarts from "echarts";
export default {
    name:"LineOne",
    computed:{

    },
    data(){
        return{
            data:[
                {
                    name:"1111",
                    title:"2222",
                }
            ]
        }
    },
   methods: {
　　initCharts () {
　　let myChart = echarts.init(this.$refs.chart);
　　console.log(this.$refs.chart)
　　// 绘制图表
　　myChart.setOption({
　　title: { text: '在Vue中使用echarts' },
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
　  },
　  mounted () {
// 　　this.initCharts();
　}
}
</script>
<style scoped lang="scss">
   .container{
       width:100%;
       height: 300px;
   }
</style>
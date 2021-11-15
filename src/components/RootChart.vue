<template>
   <div class="chart" v-if="chartData">
     <canvas id="canvas" height="400px"></canvas>
   </div>
</template>

<script>
import Chart from "chart.js";
export default {
    name: 'RootChart',
    props:{
        chartType: String,
        chartData: Object,
        chartOptions: Object
    },
    mounted(){
        this.chartConstructor(this.chartType, this.chartData, this.chartOptions);
    },
    watch: {
        chartData() {
            this.chartConstructor(this.chartType, this.chartData, this.chartOptions);
        }
    },
    methods: {
        chartConstructor(chartType, chartData, chartOptions) {
            const chartElement = document.querySelector("canvas");
            new Chart(chartElement, {
                type: chartType,
                data: chartData,
                options: chartOptions,
            });
        },
    },
}
</script>
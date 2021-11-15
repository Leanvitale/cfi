<template>
   <div>
     <canvas id="canvas" height="400px"></canvas>
   </div>
</template>

<script>
import Chart from "chart.js";
export default {
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
            const chartElement = document.getElementById('canvas').getContext('2d');
            new Chart(chartElement, {
                type: chartType,
                data: chartData,
                options: chartOptions,
            });
        },
    },
}
</script>
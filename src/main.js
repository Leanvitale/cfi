// import components here
import Vue from 'vue'
import App from './App.vue'
import Chart from './components/Chart.vue'

// export components for this library
export default {
  Chart
};

new Vue({
  render: h => h(App)
}).$mount('#app')

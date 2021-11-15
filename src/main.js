// import components here
import Vue from 'vue'
import App from './App.vue'
import Chart from './components/Chart.vue'
import Button from './components/Button.vue'

// export components for this library
export default {
  Chart,
  Button
};

new Vue({
  render: h => h(App)
}).$mount('#app')

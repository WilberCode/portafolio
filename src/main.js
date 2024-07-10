import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import 'aos/dist/aos.css'
import AOS from 'aos/dist/aos.js'
import anime from 'animejs/lib/anime.min'
 
Vue.config.productionTip = false 



new Vue({
  router,
  store, 
  created() {
    AOS.init()
  }, 
  mounted() {
   anime({
      targets:'.morph',
      d:[
         { value:'M1366 0H0.00012207V447.601C356 586.678 513.158 386.98 716 534.433C1026 759.784 1366 586.119 1366 586.119V0Z'}
      ],
      easing:'easeInOutSine',
      duration:1500, 
      loop:false,
      autoplay:true
    })   
  },
  render: h => h(App)
}).$mount('#app')


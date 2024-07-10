import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#202aab',
    secondary: '#FF9800'
  },
  options: {
    customProperties: true
  },
  iconfont: 'md',
  
})


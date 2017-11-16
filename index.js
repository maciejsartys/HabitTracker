import Vue from 'vue'
import App from './components/App'

import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  locale
})

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
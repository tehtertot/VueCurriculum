import Vue from 'vue'
import NavLinkList from './NavLinkList.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(NavLinkList),
}).$mount('#app')

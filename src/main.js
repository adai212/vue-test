// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messages = {
    en: require('./i18n/app-en.json'),
    cn: require('./i18n/app-zh.json')
}
const i18n = new VueI18n({
    locale: 'cn', // 语言标识
    fallbackLocale: '',
    messages
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
}).$mount('#app')

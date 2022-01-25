import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index.js'
import store from './store'
import firebase from "firebase/compat";

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyBRKhKUxfyb3M7luDrBIOUHz7tO_E1mBPs",
      authDomain: "ad-pro-19796.firebaseapp.com",
      projectId: "ad-pro-19796",
      storageBucket: "ad-pro-19796.appspot.com",
      messagingSenderId: "752183371782",
      appId: "1:752183371782:web:07f8f832b0e708a2f73b87",
      measurementId: "G-863SXWPPLY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

}).$mount('#app')

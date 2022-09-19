import Vue from 'vue'
import App from './App.vue'

//importamos
import BotonEnviar from './components/BotonEnviar.vue'

import DatosUsuario from './components/DatosUsuario.vue'

//instancia de conponente
//Vue.component('enviar',buttom)

//ahora asemos un templaite en linea
Vue.component('enviar',BotonEnviar); 
Vue.component('App-datausuario',DatosUsuario);

new Vue({
  el: '#app',
  render: h => h(App)
})
//vue init webpack-simple app-componentes

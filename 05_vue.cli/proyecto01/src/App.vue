<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   
    <h2>Ecosystem</h2>
    <h2>HOLA CARLOS mamani</h2>
    <hr>

    <!--colocamos la etiqueta que definimos en el componete saludar
    pero en importado de la extencion VUe desde main.js-->
    <App-saludar/>
    
    <!--ahora mostramos la etiqueta del componente bottom.veue y esta importado 
    desde main.js donde se unio junto con el componente saludar-->
    <enviar/>
    <br>

    <!--ahora hasemos un templaite en lines colocando un  comando en la etiqueta creada-->
    <center>
      <App-datausuario :nombre="carlos" ciudad="la paz"></App-datausuario><hr>
      <App-datausuario :nombre="123" ></App-datausuario>
    </center>
    <enviar enline-template>
      <h1>
        para mostrar se usa teplate-lineal
      </h1>
      <br>
      <button>Enviar</button>

    </enviar>

  </div>
</template>

<script>

//import saludar from "./components/saludar.vue";
//ahoram modificamos el componentes de saludar
import MensajeSaludar from "./components/MensajeSaludar.vue";


export default {
  name: 'app',
  components:{
    //saludar
    //colocando alias para la etiqueta 
    "App-saludar":MensajeSaludar,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
   
    <!--ahora agregamos el componente bottom.vue al componente saludar.vue
    llamando solamente la etiqueta enviar
    Ahora llamamo el templaite de componente button utilizando el atributo inlene-template
    
    borramos para crear un div con id-->
    <div id="mesj">
      <ul>
        <enviar v-for="data in diasSemana">
            {{data.text}}
        </enviar>
      </ul>
    </div>
</template>
<script>
export default {
    name:"mesj",
    data(){
        return {
            diasSemana:[
                {id:1,text:'lunes'},
                {id:2,text:'martes'},
                {id:3,text:'miercoles'},
                {id:4,text:'jueves'},
                {id:5,text:'viernes'},
            ]
        }
    }
    
}
</script>
<style scoped>

</style>
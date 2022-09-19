<template>
    <div>
        <h2>{{nombre}}</h2>
        <h3>{{ciudad}}</h3>
    </div>
</template>
<script>
    export default{
        //propiedades
        props:{
            nombre:[Number,String],
            ciudad:{
                type:String,
                default:"datos no null"
            }
        }

    }
</script>
<style scoped>

</style>
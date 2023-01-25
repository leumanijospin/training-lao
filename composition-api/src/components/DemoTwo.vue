<template>
     <div><h1>{{firstName}} {{lastName}}</h1></div>
</template>

<script>
    import { reactive, toRefs } from 'vue';
    export default {
        name: 'DemoTwo',
        setup() {
           const state = reactive({
            firstName: 'joe',
            lastName: 'jojo',
           }) 

           setTimeout(() => {
            state.firstName ='reo'
            state.lastName = 'sop'
            console.log(state)
           }, 2000)

           return toRefs(state)
        }
    }
</script>
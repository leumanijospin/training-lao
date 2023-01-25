<template>
     <div>
        <h1>{{ name }}</h1>
     </div>
</template>

<script>
 import {ref} from 'vue';
 export default {
    name: 'DemoOne',
    setup() {
        let name = ref ('harry')
        setTimeout(() => {
            name.value = 'poter'
            console.log(name);
        },2000)

        return {
            name
        }
    }
 }
</script>
<template>
    <div>
      <input type="text" placeholder="name" v-model="name">
      <input type="text" placeholder="firstName" v-model="firstName">
    </div>
</template>

<script> 
import {ref, watch} from "vue";
export default {
    name: 'Watch',
    setup() {
        const firstName = ref ('')
        const name = ref ('')
        watch(firstName,(oldValue, newValue) => {
            console.log('oldValue', oldValue)
            console.log('newValue', newValue)
        })
        return {
            firstName
        }
    }
}

</script>
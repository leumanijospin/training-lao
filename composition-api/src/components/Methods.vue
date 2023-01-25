<template>
    <div><h1>{{ count }}</h1>
        <button @click="incrementCount">incremented</button>

        <h2>{{ first}} {{ last}}</h2>
        <button @click="changeHeroes">change</button>
    </div>
    
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
     export default {
        name: 'Methods',
        setup() {
           const count = ref(0)

           const state = reactive ({
            first: 'hurt',
            last: 'freud'
           })

           function changeHeroes() {
            state.first = 'roul',
            state.last = 'soul'
           }

           function incrementCount() {
               count.value++
           }

           return {
            count,
            incrementCount,
            changeHeroes,
            ...toRefs(state)
           }
        }
     }
</script>
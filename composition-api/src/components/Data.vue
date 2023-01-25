<template>
    <div>
        <h1>{{ firstName }} {{ lastName }} {{ middleName }}</h1>
        <h1>{{ greet }}</h1>
        <h1>composition {{state.firstName}} {{ state.lastName}} {{ state.middleName}} </h1>
        <h1>{{ reactiveFullName }}</h1>
    </div>
</template>

<script>

import { ref, reactive } from 'vue'

export default {
    name: 'Data',
    setup() {
        const firstName = ref('hulk')
        const lastName = ref('clack')
        const middleName = ref('aron')
        console.log('firstName', firstName)
        firstName.value = 'unifer'
        const greet = `hello ${firstName.value} a.k.a ${lastName.value} a.k.a ${middleName.value}`
        const state = reactive ({
            firstName: 'olivier',
            lastName: 'poter',
            middleName: 'harry'
        })
        
        
        const reactiveFullName = `good ${state.firstName} ${state.lastName} ${state.middleName}` 

        return {
            reactiveFullName,
            firstName,
            lastName,
            middleName,
            greet,
            state
        }
    }
}


</script>
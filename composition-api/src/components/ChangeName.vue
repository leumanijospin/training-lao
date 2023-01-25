<template>
    {{ person.name }}
    {{ personRef.name }}
    {{ personReactive.name}}
    <button @click="ChangeName('unifer')">ChangeName</button>
</template>

<script>
    import {ref, reactive} from 'vue'

export default {
    name:'ChangeName',
    setup(){
        const person = {name: 'john'};
        const personRef = ref({name: 'john'});
        const personReactive = reactive({name: 'john'});
        const ChangeName = (name) => {
            person.name = name;
            personRef.value.name = name;
            personReactive.name = name;
        }

        return {
            ChangeName,
            person,
            personRef,
            personReactive,
        }
    }
}
</script>
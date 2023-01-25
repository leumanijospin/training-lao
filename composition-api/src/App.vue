<template>
  <div>
    <Methods />
    <Watch />
  </div>
</template>

<script>
import Data from './components/Data.vue'
import ChangeName from './components/ChangeName.vue';
import DemoOne from './components/DemoOne.vue';
import DemoTwo from './components/DemoTwo.vue';
import Methods from './components/Methods.vue';
import Watch from './components/Watch.vue';
export default {
    name: "App",
    components: { Data, ChangeName, DemoOne, DemoTwo, Methods, Watch }
}
</script>
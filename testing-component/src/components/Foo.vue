<template>
  <h1>{{ msg }}</h1>
  <p>
    <input type="text" v-model="inputMsg" placeholder="Enter a message" />
    <button @click="msg = inputMsg">Submit</button>
  </p>
</template>
<script setup lang="ts">
import { ref } from "vue";
const msg = ref("old message");
const inputMsg = ref("new message");
</script>

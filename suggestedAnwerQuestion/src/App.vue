<template>
  <suggestedAnswerToAQuestion :answer="suggestions" class="ml-8 mt-4" />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import suggestedAnswerToAQuestion from "./components/SuggestedAnswerToAQuestion.vue";
import type { Question } from "./utils/type";
const suggestions = reactive<Question>({
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus porttitor?",
  suggestions: [
    {
      status: true,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    },
    {
      status: false,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    },
    {
      status: false,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    },
    {
      status: false,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    },
  ],
});
</script>

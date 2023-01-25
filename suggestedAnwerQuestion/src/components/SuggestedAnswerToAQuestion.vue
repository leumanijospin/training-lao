<template>
  <details
    class="max-w-[972px] py-6 border-[1px] border-solid border-[#DADBDD] rounded-xl"
  >
    <summary class="flex flex-row items-center gap-x-4">
      <div
        class="w-5 h-5 rounded-full bg-[#0F2E52] text-white flex justify-center items-center py-2 cursor-pointer ml-8"
        @click="showAndCloseAnswer"
        data-test="dropdown"
      >
        <span v-if="isClicked">+</span>
        <span v-else>-</span>
      </div>
      <p class="font-outfit not-italic font-light text-base text-black">
        {{ answer.title }}
      </p>
    </summary>
    <SuggestionBadge
      v-for="(suggestion, index) in answer.suggestions"
      :key="index"
      :suggestion="suggestion"
      class="mt-4 ml-[70px]"
    />
  </details>
</template>

<script setup lang="ts">
import SuggestionBadge from "../components/SuggestionBadge.vue";
import type { Question } from "@/utils/type";
import { ref, type PropType } from "vue";
defineProps({
  answer: {
    type: Object as PropType<Question>,
    required: true,
  },
});
const isClicked = ref(true);
const showAndCloseAnswer = () => {
  isClicked.value = !isClicked.value;
};
</script>

<style>
details[open] > summary {
  border-bottom: 1px solid #dadbdd;
  padding-bottom: 24px;
  transition-delay: 1s;
  transition: 0.5s;
}

details {
  transition-delay: 3s;
  transition: 4s;
}
</style>

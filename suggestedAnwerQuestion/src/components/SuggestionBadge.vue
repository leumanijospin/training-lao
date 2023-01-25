<template>
  <div class="flex fex-row items-center gap-x-4">
    <CheckMark v-if="suggestion.status" />
    <CrossMark v-else />
    <p class="font-outfit not-italic font-light text-base text-black">
      {{ suggestion.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Suggestion } from "@/utils/type";
import CheckMark from "../assets/CheckMark.vue";
import CrossMark from "../assets/CrossMark.vue";
defineProps({
  suggestion: {
    type: Object as PropType<Suggestion>,
    required: true,
  },
});
</script>

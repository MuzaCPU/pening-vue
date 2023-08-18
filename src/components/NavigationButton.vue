<script>
import { Icon } from "@iconify/vue";
export default {
  props: {
    label: String,
    isDisabled: {
      default: false,
    },
    isBack: {
      default: false,
    },
    isDanger: {
      default: false,
    },
  },
  components: {
    Icon,
  },
};
</script>
<template>
  <button
    :class="`flex items-center rounded-2xl ${
      isDisabled
        ? 'cursor-not-allowed bg-gray-400'
        : 'cursor-pointer bg-primary'
    } ${
      isDanger
        ? 'bg-red-500'
        : 'bg-primary'
    } px-4 py-2`"
    :disabled="isDisabled"
  >
    <span v-if="isBack" class="mr-4 rounded-full bg-white text-primary"
      ><Icon class="text-2xl" icon="mingcute:left-line"
    /></span>
    <span class="font-bold text-white whitespace-nowrap">{{ label }}</span>
    <span v-if="!isBack" class="ml-4 rounded-full bg-white text-primary"
      ><Icon class="text-2xl" icon="mingcute:right-line"
    /></span>
  </button>
</template>

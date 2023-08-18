<script>
import { Icon } from "@iconify/vue";

export default {
  props: {
    title: String,
    description: String,
    image: String,
  },
  components: {
    Icon,
  },
};
</script>
<template>
  <div class="cursor-pointer rounded-xl bg-white p-6 shadow-xl">
    <div class="flex flex-row items-center gap-2">
      <div class="w-[60px]">
        <img class="w-full" :src="image" alt="icon petunjuk" />
      </div>
      <div class="font-lato text-xl">{{ title }}</div>
    </div>
    <div class="mt-4">
      <p class="font-lato text-gray-600">
        {{ description }}
      </p>
    </div>
    <div class="mt-4 flex items-center justify-end">
      <Icon class="text-xl text-secondary" icon="teenyicons:right-outline" />
    </div>
  </div>
</template>

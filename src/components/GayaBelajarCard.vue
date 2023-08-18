<script>
export default {
  props: {
    title: String,
    image: String,
  },
};
</script>
<template>
  <div class="px-4 py-8 rounded-xl shadow-xl">
    <div class="mx-auto w-1/2">
      <img class="w-full" :src="image" alt="icon gaya belajar">
    </div>
    <h4 class="text-center font-lato text-lg mt-2">{{ title }}</h4>
  </div>
</template>

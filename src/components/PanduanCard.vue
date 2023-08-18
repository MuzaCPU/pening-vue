<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
  },
};
</script>
<template>
  <div class="w-full">
    <div class="mx-auto w-fit"><img :src="image" alt="sulit belajar" /></div>
    <h4 class="text-center font-lato text-xl font-bold">{{ title }}</h4>
    <p class="text-center text-lg text-gray-400">{{ description }}</p>
  </div>
</template>

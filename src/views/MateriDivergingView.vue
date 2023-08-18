<script>
import NavigationButton from "../components/NavigationButton.vue";
export default {
  components: { NavigationButton },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Materi <span class="text-primary">Diverging</span>
    </h4>
  </section>
  <section class="mt-8">
    <div class="max-w-full h-screen">
      <iframe class="w-full h-full" src="https://drive.google.com/file/d/1zh1Rwf1ITLFskSAnUhN77wkbNyujm7cU/preview" allow="autoplay"></iframe>
    </div>
  </section>
  <section class="mt-8">
    <div @click="$router.push({ name: 'post-test' })" class="mx-auto w-fit">
      <NavigationButton label="Post Test" />
    </div>
  </section>
</template>

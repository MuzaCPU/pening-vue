<script>
import NavigationButton from "../components/NavigationButton.vue";
export default {
  components: { NavigationButton },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Materi <span class="text-primary">Converging</span>
    </h4>
  </section>
  <section class="mt-8">
    <iframe
      class="h-screen w-full"
      src="https://drive.google.com/file/d/1s7T4Wt46tP_tpW5zNpgGbXdNkzEO-L9T/preview"
      allow="autoplay"
    ></iframe>
    <p class="mt-2">
      <a href="/docs/materi-teks-numerasi.pdf"><span class="font-bold underline text-secondary">Download</span> jika materi tidak tampil.</a>
    </p>
  </section>
  <section class="mt-8">
    <div @click="$router.push({ name: 'post-test' })" class="mx-auto w-fit">
      <NavigationButton label="Post Test" />
    </div>
  </section>
</template>

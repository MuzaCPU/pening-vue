<script>
import NavigationButton from "../components/NavigationButton.vue";
import { Icon } from "@iconify/vue";

export default {
  data() {
    return {
      gayaBelajar: "",
      dataGayaBelajar: {
        accommodative: {
          name: "Accommodating",
          description: "belajar dengan praktik",
          image: "accommondator.png",
        },
        assimilative: {
          name: "Assimilating",
          description: "belajar dengan audio",
          image: "asimilator.png",
        },
        convergent: {
          name: "Converging",
          description: "belajar dengan teks",
          image: "converger.png",
        },
        divergent: {
          name: "Diverging",
          description: "belajar dengan gambar",
          image: "diverger.png",
        },
      },
    };
  },
  components: { NavigationButton, Icon },
  beforeMount() {
    const sessionGayaBelajar = sessionStorage.getItem("pening-gaya-belajar");
    if (!sessionGayaBelajar) {
      this.$router.push({ name: "tes-gaya-belajar" });
    }
    const dataGayaBel = JSON.parse(JSON.stringify(this.dataGayaBelajar));
    this.gayaBelajar = dataGayaBel[sessionGayaBelajar];
    sessionStorage.setItem("pening-gaya-belajar-gform", this.gayaBelajar.name);
  },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Selamat, <span class="text-primary">Gaya Belajar</span> Kamu Adalah...
    </h4>
  </section>
  <section class="mt-8">
    <div
      class="mx-auto aspect-square w-[200px] rounded-xl border-2 p-12 shadow-md"
    >
      <img
        class="w-full"
        :src="`/images/${gayaBelajar.image}`"
        alt="Icon gaya belajar"
      />
    </div>
    <h4 class="mt-4 text-center font-lato text-2xl font-bold uppercase">
      {{ gayaBelajar.name }}
    </h4>
    <p class="text-center font-medium">{{ gayaBelajar.description }}</p>
    <div
      class="mx-auto mt-2 aspect-square w-fit rounded-full bg-green-600 p-2 text-white"
    >
      <Icon class="text-4xl" icon="ic:round-check" />
    </div>
  </section>

  <section class="mt-8">
    <div
      @click="
        $router.push({
          name: `penjelasan-materi-${gayaBelajar.name.toLowerCase()}`,
        })
      "
      class="mx-auto w-fit"
    >
      <NavigationButton label="Berikutnya" />
    </div>
  </section>
</template>

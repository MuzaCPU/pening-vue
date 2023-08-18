<script>
import NavigationButton from "../components/NavigationButton.vue";

export default {
  data() {
    return {
      gayaBelajar: "",
      isNextDisabled: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isNextDisabled = false;
    }, 10000);
  },
  beforeMount() {
    const sessionGayaBelajar = sessionStorage.getItem(
      "pening-gaya-belajar-gform",
    );
    if (!sessionGayaBelajar) {
      this.$router.push({ name: "tes-gaya-belajar" });
    }
    this.gayaBelajar = sessionGayaBelajar;
  },
  components: { NavigationButton },
};
</script>
<template>
  <section class="flex h-24 items-center justify-center">
    <div class="mx-auto w-[200px]">
      <img class="w-full" src="/images/pening.png" alt="logo pening" />
    </div>
  </section>
  <iframe
    autofocus
    class="h-screen w-full rounded-xl border-2 pb-4"
    :src="`https://docs.google.com/forms/d/e/1FAIpQLSeGnDXvhUPqYbpzZUdnC7ILHD3HrF37Qu0dd6XL2xUUMPKkQQ/viewform?embedded=true&entry.2066378548=${gayaBelajar}`"
    >Loading…</iframe
  >
  <section class="mt-8">
    <p
      class="mx-auto mb-6 w-fit rounded-md bg-yellow-200 px-2 text-center font-bold"
    >
      Pastikan Kamu Sudah Menyelesaikan Angket Di Atas Dan Tekan Tombol Kirim
      Sebelum Melanjutkan
    </p>
    <div v-if="isNextDisabled" class="mx-auto w-fit">
      <NavigationButton label="Berikutnya" isDisabled="true" />
    </div>
    <div
      v-else
      @click="
        $router.push({ name: `penjelasan-materi-${gayaBelajar.toLowerCase()}` })
      "
      class="mx-auto w-fit"
    >
      <NavigationButton label="Berikutnya" />
    </div>
  </section>
</template>

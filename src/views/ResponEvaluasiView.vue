<script>
import NavigationButton from "../components/NavigationButton.vue";

export default {
  components: { NavigationButton },
  data() {
    return {
      isNextDisabled: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isNextDisabled = false;
    }, 10000);
  },
};
</script>
<template>
  <section class="h-24 p-4">
    <div class="mx-auto h-full w-fit">
      <img class="h-full" src="/images/pening.png" alt="logo pening" />
    </div>
  </section>
  <iframe
    autofocus
    class="h-screen w-full rounded-xl border-2 pb-8"
    :src="`https://docs.google.com/forms/d/e/1FAIpQLSdkHSWM3LxoA657_GkE2j-0_GXft9M_ZlRnFvkDomTjTw76Hw/viewform?embedded=true`"
    >Loading…</iframe
  >
  <section class="mt-8">
    <p
      class="mx-auto mb-6 w-fit rounded-md bg-yellow-200 px-2 text-center font-bold"
    >
      Pastikan Kamu Sudah Menyelesaikan Angket Di Atas Dan Tekan Tombol Kirim Sebelum Melanjutkan
    </p>
    <div v-if="isNextDisabled" class="mx-auto w-fit">
      <NavigationButton label="Berikutnya" isDisabled="true" />
    </div>
    <div
      v-else
      @click="$router.push({ name: 'home' })"
      class="mx-auto w-fit"
    >
      <NavigationButton label="Berikutnya" />
    </div>
  </section>
</template>

<script>
import NavigationButton from "../components/NavigationButton.vue";
import { createSiswa } from "../firestore";
export default {
  components: {
    NavigationButton,
  },
  data() {
    return {
      namaDepan: "",
      namaBelakang: "",
      kelas: "",
      absen: "",
    };
  },
  methods: {
    async handlesubmit() {
      const idSiswa = await createSiswa({
        namaDepan: this.namaDepan,
        namaBelakang: this.namaBelakang,
        kelas: this.kelas,
        absen: this.absen,
      });
      sessionStorage.setItem("pening-namaDepan", this.namaDepan);
      sessionStorage.setItem("pening-namaBelakang", this.namaBelakang);
      sessionStorage.setItem("pening-kelas", this.kelas);
      sessionStorage.setItem("pening-absen", this.absen);
      sessionStorage.setItem("pening-id-siswa", idSiswa);
      this.$router.push({ name: "pre-test" });
    },
  },
  mounted() {
    const isNamaDepan = sessionStorage.getItem("pening-namaDepan");
    const isNamaBelakang = sessionStorage.getItem("pening-namaBelakang");
    const isKelas = sessionStorage.getItem("pening-kelas");
    const isAbsen = sessionStorage.getItem("pening-absen");
    this.namaDepan = isNamaDepan;
    this.namaBelakang = isNamaBelakang;
    this.kelas = isKelas;
    this.absen = isAbsen;
  },
};
</script>
<template>
  <section class="mt-12 h-24 p-4">
    <div @click="$router.push({ name: 'home' })" class="mx-auto h-full w-fit">
      <img class="h-full" src="/images/pening.png" alt="logo pening" />
    </div>
  </section>
  <section class="container mx-auto max-w-xl">
    <h4 class="text-left font-lato text-4xl font-bold">
      Isi Data <span class="text-primary">Diri</span>
    </h4>
  </section>
  <form @submit.prevent="handlesubmit">
    <section class="container mx-auto mt-4 grid max-w-xl grid-flow-row gap-2">
      <h6 class="font-lato text-xl font-bold">Informasi Data Diri Siswa</h6>
      <input
        class="w-full rounded-full border-2 px-4 py-2"
        type="text"
        placeholder="Nama Depan"
        required
        v-model="namaDepan"
      />
      <input
        class="w-full rounded-full border-2 px-4 py-2"
        type="text"
        placeholder="Nama Belakang"
        required
        v-model="namaBelakang"
      />
      <input
        class="w-full rounded-full border-2 px-4 py-2"
        type="text"
        placeholder="Kelas"
        required
        v-model="kelas"
      />
      <input
        class="w-full rounded-full border-2 px-4 py-2"
        type="number"
        placeholder="Nomor Absen"
        required
        v-model="absen"
      />
    </section>
    <section class="mx-auto mt-8 w-fit">
      <NavigationButton label="Lanjut" />
    </section>
  </form>
</template>

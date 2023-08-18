<script>
import PetunjukCard from "../components/PetunjukCard.vue";
export default {
  components: {
    PetunjukCard,
  },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Petunjuk <span class="text-primary">Penelitian</span>
    </h4>
  </section>
  <section class="mt-8 container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div @click="$router.push({ name: 'tes-gaya-belajar' })">
        <PetunjukCard
          image="/images/tes-gaya-belajar-2.png"
          title="Tes Gaya Belajar"
          description="Langkah awal siswa harus melakukan tes gaya belajar, hal tersebut bertujuan agar siswa mengetahui profil gaya belajarnya masing-masing."
        />
      </div>
      <div @click="$router.push({ name: 'penjelasan-materi' })">
        <PetunjukCard
          image="/images/akses-mater-belajar.png"
          title="Akses Materi Belajar"
          description="Selanjutnya siswa mengakses materi belajar sesuai rekomendasi gaya belajar pada tes gaya belajar sebelumnya."
        />
      </div>
      <div @click="$router.push({ name: 'post-test' })">
        <PetunjukCard
          image="/images/final-test-2.png"
          title="Final Test"
          description="Pada tahap akhir, siswa melakukan tes akhir sebagai bentuk evaluasi akan perubahan hasil belajar."
        />
      </div>
    </div>
  </section>
</template>

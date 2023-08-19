<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>
<template>
  <footer class="bg-white px-4">
    <div class="lg:grid lg:grid-cols-4 lg:gap-12 lg:container lg:mx-auto">
      <section class="">
        <div class="w-[200px]" @click="$router.push({ name: 'home' })">
          <img class="w-full" src="/images/pening.png" alt="logo pening" />
        </div>
        <p class="mt-2 font-poppins">
          Platform Personalized Learning Berbasis Teori Kolb. Bertujuan untuk
          membantu siswa menemukan gaya belajarnya.
        </p>
        <div class="mt-2 flex flex-row items-center gap-4">
          <div><Icon class="text-3xl" icon="ri:instagram-fill" /></div>
          <div><Icon class="text-3xl" icon="mdi:twitter" /></div>
          <div><Icon class="text-3xl" icon="ri:facebook-fill" /></div>
        </div>
      </section>
      <section class="mt-8">
        <h4 class="font-poppins text-xl font-medium">Untuk Guru</h4>
        <div>
          <div>Media Pembelajaran</div>
          <div>Metode Ajar</div>
          <div>Penjelasan Gaya Belajar</div>
        </div>
      </section>
      <section class="mt-8">
        <h4 class="font-poppins text-xl font-medium">Untuk Siswa</h4>
        <div>
          <div @click="$router.push({ name: 'pre-test' })"
          class="mx-left mt-0 w-2/4 cursor-pointer ">
          Pre-Test
        </div>  
          <div>Penjelasan Gaya Belajar</div>
          <div @click="$router.push({ name: 'test-gaya-belajar' })">
            Tes Gaya Belajar
          </div>
          <div @click="$router.push({ name: 'post-test' })"
          class="mx-left mt-0 w-2/4 cursor-pointer ">
        Post-Test
      </div>
        </div>
      </section>
      <section class="mt-8">
        <h4 class="font-poppins text-xl font-medium">Panggil Saya</h4>
        <div>
          <div class="flex flex-row items-center gap-2">
            <div><Icon class="text-xl" icon="pepicons-pencil:pinpoint" /></div>
            <div>Bandung</div>
          </div>
          <div class="flex flex-row items-center gap-2">
            <div><Icon class="text-xl" icon="ph:phone-call" /></div>
            <div>081295981507</div>
          </div>
          <div class="flex flex-row items-center gap-2">
            <div><Icon class="text-xl" icon="clarity:email-line" /></div>
            <div>muza29@upi.edu</div>
          </div>
        </div>
      </section>
    </div>

    <section class="mt-4 py-12 text-center font-poppins text-gray-400">
      <p>2023 pening. All right reserved</p>
    </section>
  </footer>
</template>

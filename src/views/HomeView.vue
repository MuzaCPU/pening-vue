<script>
import PanduanCard from "../components/PanduanCard.vue";
import GayaBelajarCard from "../components/GayaBelajarCard.vue";
import GayaBelajarCardHover from "../components/GayaBelajarCardHover.vue";
export default {
  components: {
    PanduanCard,
    GayaBelajarCard,
    GayaBelajarCardHover,
  },
};
</script>

<template>
  <section class="absolute left-0 top-0 h-screen w-full">
    <img
      class="h-full w-full"
      src="/images/background-landing.png"
      alt="background landing"
    />
  </section>

  <section
    class="container relative mx-auto lg:flex lg:flex-row-reverse lg:items-center"
  >
    <div class="mx-auto w-[250px] lg:w-1/4">
      <img
        class="w-full"
        src="/images/landing-illustration.png"
        alt="landing illustration"
      />
    </div>
    <div class="lg:w-1/2">
      <h1 class="font-lato text-2xl lg:text-4xl font-bold">
        Apakah kamu mengalami kesulitan dalam belajar?
      </h1>
      <p class="mt-4 text-lg text-gray-500">
        Personalized Learning menjadi metode yang ampuh untuk mengatasi
        kesulitan belajar kamu dengan mengenali gaya belajarmu
      </p>
      <button
        @click="$router.push({ name: 'pre-test' })"
        class="mt-6 w-full lg:px-12 rounded-full bg-primary py-3 text-lg font-bold text-white lg:w-fit"
      >
        PRE-TEST
      </button>
    </div>
  </section>

  <section
    class="container relative mx-auto mt-8 bg-white px-16 py-4 shadow-xl lg:grid lg:grid-cols-3 lg:gap-12 lg:py-12"
  >
    <PanduanCard
      image="/images/sulit-belajar.png"
      title="Sulit Belajar"
      description="Aduh! sulit banget ya belajar rasanya apalagi kalo materi susah"
    />
    <div class="h-4 lg:hidden"></div>
    <PanduanCard
      image="/images/tes-gaya-belajar.png"
      title="Tes Gaya Belajar"
      description="Coba dulu deh tes gaya belajar kamu, siapa tau cocok"
    />
    <div class="h-4 lg:hidden"></div>
    <PanduanCard
      image="/images/belajar-maksimal.png"
      title="Belajar Maksimal"
      description="Hasil belajar kamu dapat menjadi lebih maksimal, deh!"
    />
  </section>

  <section id="gaya-belajar" class="container relative mx-auto mt-20">
    <h4 class="text-center font-lato text-2xl lg:text-4xl font-bold">
      Sesuaikan <span class="text-primary">Gaya Belajar</span> Kamu
    </h4>
    <div class="lg:grid lg:grid-cols-2 lg:items-center">
      <div class="hidden lg:block mx-auto">
        <img src="/images/landing-girl.png" alt="hi">
      </div>
      <div class="max-w-md">
        <div class="card-container mt-4 grid grid-cols-2 gap-6">
          <GayaBelajarCardHover image="/images/converger.png" title="Converging">
            Belajar dengan teks.<br />Apabila kamu termasuk ke dalam gaya belajar
            ini, maka kamu memiliki kecenderungan untuk belajar dengan membaca dari
            sebuah sumber belajar seperti buku, jurnal, halaman web yang dominan
            teks, dan lain sebagainya.
          </GayaBelajarCardHover>
          <GayaBelajarCardHover image="/images/diverger.png" title="Diverging">
            Belajar dengan gambar.<br />
            Apabila kamu termasuk ke dalam gaya belajar ini, maka kamu memiliki
            kecenderungan untuk belajar dengan dibantu media visual atau gambar.
          </GayaBelajarCardHover>
          <GayaBelajarCardHover image="/images/asimilator.png" title="Assimilating">
            Belajar dengan audio.<br />
            Apabila kamu termasuk ke dalam gaya belajar ini, maka kamu memiliki
            kecenderungan untuk belajar dengan dibantu media suara seperti podcast,
            audiobook, voice note, video, dan lain sebagainya.
          </GayaBelajarCardHover>
          <GayaBelajarCardHover
            image="/images/accommondator.png"
            title="Accommodating"
            >Belajar dengan praktik.<br />
            Apabila kamu termasuk ke dalam gaya belajar ini, maka kamu memiliki
            kecenderungan untuk belajar dengan dibantu media gabungan dari audio dan
            video seperti tutorial pada laman youtube, animasi, atau media dinamis
            lainnya.
          </GayaBelajarCardHover>
        </div>
      </div>
    </div>
  </section>

  <section class="container relative mx-auto mt-20 max-w-xl">
    <h4 class="text-center font-lato text-2xl lg:text-4xl font-bold">
      Ukur <span class="text-primary">Hasil Belajar</span> Kamu
    </h4>
    <div
      @click="$router.push({ name: 'post-test' })"
      class="mx-auto mt-4 w-2/4 cursor-pointer rounded-xl bg-gradient-to-br from-white to-secondary p-4"
    >
      <div class="px-6">
        <img class="w-full" src="/images/final-test.png" alt="final test" />
      </div>
      <h6
        class="mt-4 text-center font-lato text-2xl font-black uppercase text-primary"
      >
        Final Test
      </h6>
    </div>
  </section>
</template>

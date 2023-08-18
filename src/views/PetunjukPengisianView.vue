<script>
import NavigationButton from "../components/NavigationButton.vue";
export default {
  components: { NavigationButton },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Petunjuk <span class="text-primary">Pengisian</span>
    </h4>
  </section>

  <section class="mt-8 container mx-auto">
    <ol class="list-decimal px-8">
      <li>Angket terdiri dari 12 pertanyaan untuk masing-masing kolom.</li>
      <li>
        Jawab pertanyaannya sesuai dengan kondisi diri kamu ya, karena tidak ada
        salah dan benar.
      </li>
      <li>
        Pilih lingkaran yang sesuai di bawah setiap pertanyaan, dengan gambaran :
        Pilihan Jawaban :
        <ul class="list-disc pl-4">
          <li>
            Lingkaran paling kanan pada pernyataan yang sangat sesuai dengan diri kamu
          </li>
          <li>Lingkaran kanan pada pernyataan yang sesuai dengan diri kamu</li>
          <li>
            Lingkaran kiri pada pernyataan yang agak sesuai dengan diri kamu
          </li>
          <li>
            Lingkaran paling kiri pada pernyataan yang tidak sesuai dengan diri kamu
          </li>
        </ul>
      </li>
      <li>
        Pilih jawaban (lingkaran) di bawah pertanyaan yang cocok
        dengan diri kamu.
      </li>
      <li>
        Cara mengisi:<br /><br />
        <div class="border-2 p-4">
          <div>1. Ketika saya sedang belajar</div>
          <div class="lg:grid lg:grid-cols-4 lg:gap-2">
            <div class="mt-2 lg:grid lg:grid-rows-2 lg:items-center rounded-xl bg-gray-100 p-4">
              <p class="mb-1 text-center">Saya suka melibatkan perasaan</p>
              <!-- <select
                class="w-full rounded-lg border-2 border-primary py-1 text-left pl-4"
                name="tes"
                id="tes"
                disabled
              >
                <option value="1">1 - Tidak Sesuai</option>
                <option value="2" selected>2 - Cukup Sesuai</option>
                <option value="3">3 - Sesuai</option>
                <option value="4">4 - Sangat Sesuai</option>
              </select> -->
              <div class="options-container w-full rounded-lg bg-white p-4">
                <div class="flex flex-row w-full items-center justify-center gap-4">
                  <div class="aspect-square w-10 rounded-full bg-secondary"></div>
                  <div class="aspect-square w-8 rounded-full bg-primary"></div>
                  <div class="aspect-square w-8 rounded-full bg-secondary"></div>
                  <div class="aspect-square w-10 rounded-full bg-secondary"></div>
                </div>
                <div class="text-sm w-full flex flex-row items-center justify-between mt-2 font-semibold text-primary">
                  <div>Tidak Sesuai</div>
                  <div>Sangat Sesuai</div>
                </div>
              </div>
            </div>
            <div class="mt-2 lg:grid lg:grid-rows-2 lg:items-center rounded-xl bg-gray-100 p-4">
              <p class="mb-1 text-center">
                Saya suka memperhatikan dan mendengarkan
              </p>
              <!-- <select
                class="w-full rounded-lg border-2 border-primary py-1 text-left pl-4"
                name="tes"
                id="tes"
                disabled
              >
                <option value="1">1 - Tidak Sesuai</option>
                <option value="2">2 - Cukup Sesuai</option>
                <option value="3" selected>3 - Sesuai</option>
                <option value="4">4 - Sangat Sesuai</option>
              </select> -->
              <div class="options-container w-full rounded-lg bg-white p-4">
                <div class="flex flex-row w-full items-center justify-center gap-4">
                  <div class="aspect-square w-10 rounded-full bg-secondary"></div>
                  <div class="aspect-square w-8 rounded-full bg-secondary"></div>
                  <div class="aspect-square w-8 rounded-full bg-primary"></div>
                  <div class="aspect-square w-10 rounded-full bg-secondary"></div>
                </div>
                <div class="text-sm w-full flex flex-row items-center justify-between mt-2 font-semibold text-primary">
                  <div>Tidak Sesuai</div>
                  <div>Sangat Sesuai</div>
                </div>
              </div>
            </div>
            <div class="mt-2 lg:grid lg:grid-rows-2 lg:items-center rounded-xl bg-gray-100 p-4">
              <p class="mb-1 text-center">Saya suka berpikir dengan ide</p>
              <!-- <select
                class="w-full rounded-lg border-2 border-primary py-1 text-left pl-4"
                name="tes"
                id="tes"
                disabled
              >
                <option value="1" selected>1 - Tidak Sesuai</option>
                <option value="2">2 - Cukup Sesuai</option>
                <option value="3">3 - Sesuai</option>
                <option value="4">4 - Sangat Sesuai</option>
              </select> -->
              <div class="options-container w-full rounded-lg bg-white p-4">
                <div class="flex flex-row w-full items-center justify-center gap-4">
                  <div class="aspect-square w-10 rounded-full bg-primary"></div>
                  <div class="aspect-square w-8 rounded-full bg-secondary"></div>
                  <div class="aspect-square w-8 rounded-full bg-secondary"></div>
                  <div class="aspect-square w-10 rounded-full bg-secondary"></div>
                </div>
                <div class="text-sm w-full flex flex-row items-center justify-between mt-2 font-semibold text-primary">
                  <div>Tidak Sesuai</div>
                  <div>Sangat Sesuai</div>
                </div>
              </div>
            </div>
            <div class="mt-2 lg:grid lg:grid-rows-2 lg:items-center rounded-xl bg-gray-100 p-4">
              <p class="mb-1 text-center">Saya suka melakukan sesuatu</p>
              <!-- <select
                class="w-full rounded-lg border-2 border-primary py-1 text-left pl-4"
                name="tes"
                id="tes"
                disabled
              >
                <option value="1">1 - Tidak Sesuai</option>
                <option value="2">2 - Cukup Sesuai</option>
                <option value="3">3 - Sesuai</option>
                <option value="4" selected>4 - Sangat Sesuai</option>
              </select> -->
              <div class="options-container w-full rounded-lg bg-white p-4">
                <div class="flex flex-row w-full items-center justify-center gap-4">
                  <div class="aspect-square w-10 rounded-full bg-secondary"></div>
                  <div class="aspect-square w-8 rounded-full bg-secondary"></div>
                  <div class="aspect-square w-8 rounded-full bg-secondary"></div>
                  <div class="aspect-square w-10 rounded-full bg-primary"></div>
                </div>
                <div class="text-sm w-full flex flex-row items-center justify-between mt-2 font-semibold text-primary">
                  <div>Tidak Sesuai</div>
                  <div>Sangat Sesuai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />Keterangan:<br /><br />
        Pada contoh diatas, <br />- responden memilih lingkaran kiri (agak sesuai) pada
        anak kalimat “saya suka melibatkan perasaan” <br />- memilih lingkaran kanan (sesuai) pada anak kalimat “saya suka memperhatikan dan
        mendengarkan” <br />- responden memilih lingkaran paling kiri (tidak sesuai) pada anak
        kalimat “saya suka memikirkan dengan ide” <br />- responden memilih lingkaran paling kanan (sangat sesuai) pada anak kalimat “saya suka melakukan sesuatu”.
        <br /><br />Artinya, responden kurang sesuai apabila belajar dengan
        perasaan dan bukan tipe seseorang yang berpikir dengan ide. Namun
        kecondongan responden lebih suka belajar dengan memperhatikan dan
        mendengarkan serta melakukan sesuatu atau melalui praktik.
      </li>
      <li>Isi identitas kamu dengan lengkap, ya!</li>
    </ol>
  </section>

  <section class="mt-8">
    <div class="mx-auto w-fit">
      <div @click="$router.push({ name: 'tes-gaya-belajar' })" class="w-fit">
        <NavigationButton label="Kembali Tes Gaya Belajar" />
      </div>
    </div>
  </section>
</template>

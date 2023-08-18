<script>
import NavigationButton from "../components/NavigationButton.vue";
import swal from "sweetalert";
import { createHasilGayaBelajar } from "../firestore";
export default {
  data() {
    return {
      dataAngket: [
        {
          question: "Ketika saya sedang belajar",
          options: {
            CE: {
              label: "Saya suka melibatkan perasaan",
              point: 1,
            },
            RO: {
              label: "Saya suka memperhatikan dan mendengarkan",
              point: 1,
            },
            AC: {
              label: "Saya suka berpikir dengan ide",
              point: 1,
            },
            AE: {
              label: "Saya suka melakukan sesuatu",
              point: 1,
            },
          },
        },
        {
          question: "Saya belajar terbaik ketika",
          options: {
            CE: {
              label: "Saya mempercayai firasat dan perasaan",
              point: 1,
            },
            RO: {
              label: "Saya mendengarkan dan memperhatikan dengan hati-hati",
              point: 1,
            },
            AC: {
              label: "Saya mengandalkan pemikiran logis",
              point: 1,
            },
            AE: {
              label: "Saya bekerja keras untuk membuat sesuatu selesai",
              point: 1,
            },
          },
        },
        {
          question: "Ketika saya sedang belajar",
          options: {
            CE: {
              label: "Saya mempunyai reaksi dan perasaan yang kuat",
              point: 1,
            },
            RO: {
              label: "Saya tenang dan bersikap hati-hati",
              point: 1,
            },
            AC: {
              label: "Saya cenderung untuk mengemukakan alasan keluar",
              point: 1,
            },
            AE: {
              label: "Saya bertanggung jawab tentang sesuatu",
              point: 1,
            },
          },
        },
        {
          question: "Saya belajar dengan",
          options: {
            CE: {
              label: "Perasaan",
              point: 1,
            },
            RO: {
              label: "Melihat",
              point: 1,
            },
            AC: {
              label: "Berpikir",
              point: 1,
            },
            AE: {
              label: "Mengerjakan/Praktik",
              point: 1,
            },
          },
        },
        {
          question: "Ketika saya sedang belajar",
          options: {
            CE: {
              label: "Saya terbuka untuk pengalaman baru",
              point: 1,
            },
            RO: {
              label: "Saya melihat masalah dari semua sisi",
              point: 1,
            },
            AC: {
              label:
                "Saya suka menganalisis sesuatu, membaginya ke dalam bagian-bagian",
              point: 1,
            },
            AE: {
              label: "Saya suka untuk mencoba sesuatu di luar",
              point: 1,
            },
          },
        },
        {
          question: "Ketika saya sedang belajar",
          options: {
            CE: {
              label: "Saya orang yang intuitif",
              point: 1,
            },
            RO: {
              label: "Saya seseorang yang cepat dalam mengamati",
              point: 1,
            },
            AC: {
              label: "Saya adalah seseorang yang logis",
              point: 1,
            },
            AE: {
              label: "Saya adalah seseorang yang aktif",
              point: 1,
            },
          },
        },
        {
          question: "Saya belajar terbaik ketika",
          options: {
            CE: {
              label: "Hubungan pribadi",
              point: 1,
            },
            RO: {
              label: "Pengamatan",
              point: 1,
            },
            AC: {
              label: "Teori-teori rasional",
              point: 1,
            },
            AE: {
              label: "Kesempatan untuk mencoba dan praktik",
              point: 1,
            },
          },
        },
        {
          question: "Ketika saya sedang belajar",
          options: {
            CE: {
              label: "Saya merasa terlibat secara pribadi dalam sesuatu",
              point: 1,
            },
            RO: {
              label: "Saya membutuhkan banyak waktu untuk bertindak",
              point: 1,
            },
            AC: {
              label: "Saya menyukai ide/gagasan dan teori",
              point: 1,
            },
            AE: {
              label: "Saya suka melihat hasil dari pekerjaan saya",
              point: 1,
            },
          },
        },
        {
          question: "Saya belajar terbaik ketika",
          options: {
            CE: {
              label: "Saya mengandalkan perasaan",
              point: 1,
            },
            RO: {
              label: "Saya mengandalkan pengamatan saya",
              point: 1,
            },
            AC: {
              label: "Saya mengandalkan ide saya",
              point: 1,
            },
            AE: {
              label: "Saya dapat mencoba sesuatu untuk diri saya sendiri",
              point: 1,
            },
          },
        },
        {
          question: "Ketika saya sedang belajar",
          options: {
            CE: {
              label: "Saya seseorang yang mau menerima pendapat orang lain",
              point: 1,
            },
            RO: {
              label: "Saya seseorang yang bersikap hati-hati",
              point: 1,
            },
            AC: {
              label: "Saya seseorang yang rasional",
              point: 1,
            },
            AE: {
              label: "Saya seseorang yang bertanggung jawab",
              point: 1,
            },
          },
        },
        {
          question: "Ketika saya sedang belajar",
          options: {
            CE: {
              label: "Saya menjadi terlibat",
              point: 1,
            },
            RO: {
              label: "Saya suka mengamati",
              point: 1,
            },
            AC: {
              label: "Saya suka mengevaluasi sesuatu",
              point: 1,
            },
            AE: {
              label: "Saya suka menjadi aktif",
              point: 1,
            },
          },
        },
        {
          question: "Saya belajar terbaik ketika",
          options: {
            CE: {
              label: "Saya menerima dengan pandangan terbuka",
              point: 1,
            },
            RO: {
              label: "Saya hati-hati",
              point: 1,
            },
            AC: {
              label: "Saya menganalisis ide-ide",
              point: 1,
            },
            AE: {
              label: "Saya praktis",
              point: 1,
            },
          },
        },
      ],
      optionRef: ["CE", "RO", "AC", "AE"],
      userData: {
        nama: "",
        kelas: "",
        absen: "",
        id: "",
      },
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
  methods: {
    async handleSubmit() {
      let totalCE = 0;
      let totalRO = 0;
      let totalAC = 0;
      let totalAE = 0;

      for (let index in this.dataAngket) {
        totalCE += this.dataAngket[index].options.CE.point;
        totalRO += this.dataAngket[index].options.RO.point;
        totalAC += this.dataAngket[index].options.AC.point;
        totalAE += this.dataAngket[index].options.AE.point;
      }

      const learningStyleProfile = [
        {
          name: "accommodative",
          point: totalAE + totalCE,
        },
        {
          name: "assimilative",
          point: totalRO + totalAC,
        },
        {
          name: "convergent",
          point: totalAC + totalAE,
        },
        {
          name: "divergent",
          point: totalCE + totalRO,
        },
      ];

      learningStyleProfile.sort((a, b) => a.point - b.point);

      const userLearningStyle = learningStyleProfile[0].name;

      sessionStorage.setItem("pening-gaya-belajar", userLearningStyle);

      const confirm = await swal({
        title: "Yakin?",
        text: "Pastikan kamu sudah mengisi semua jawaban dengan sesuai",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });

      if (confirm) {
        const res = await createHasilGayaBelajar({
          idSiswa: this.userData.id,
          gayaBelajar: this.dataGayaBelajar[userLearningStyle].name,
        });
        console.log(res);
        this.$router.push({ name: "hasil-tes-gaya-belajar" });
      }
    },
    setOption(index, ref, value) {
      this.dataAngket[index].options[ref].point = value;
    },
  },
  components: { NavigationButton },
  beforeMount() {
    if (!sessionStorage.getItem("pening-id-siswa")) {
      swal("Belum Mendaftar", "Isi data diri terlebih dahulu", "warning");
      this.$router.push({ name: "sign-up" });
    }
  },
  mounted() {
    this.userData.nama =
      sessionStorage.getItem("pening-namaDepan") +
      " " +
      sessionStorage.getItem("pening-namaBelakang");
    this.userData.kelas = sessionStorage.getItem("pening-kelas");
    this.userData.absen = sessionStorage.getItem("pening-absen");
    this.userData.id = sessionStorage.getItem("pening-id-siswa");
  },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Sekarang Kamu Lagi
      <span class="text-primary underline">Tes Gaya Belajar</span>, Nih!
    </h4>
    <p class="mt-2 text-center font-lato text-gray-500">
      Angket ini gak ada salah dan benar. Jadi... jawab sesuai kondisi kamu, ya!
    </p>
  </section>

  <section class="mt-8">
    <h4 class="mb-2 text-center font-lato text-4xl">Angket Gaya Belajar</h4>
    <div class="mx-auto w-fit">
      <div @click="$router.push({ name: 'petunjuk-pengisian' })" class="w-fit">
        <NavigationButton label="Panduan Pengisian" />
      </div>
    </div>
  </section>

  <section
    class="mt-4 flex flex-row flex-wrap items-center justify-center gap-4"
  >
    <div class="flex flex-col">
      <label class="ml-2 font-bold" for="nama">Nama</label>
      <input
        class="w-32 rounded-2xl border-2 px-2"
        type="text"
        id="nama"
        name="nama"
        v-model="userData.nama"
        disabled
      />
    </div>
    <div class="flex flex-col">
      <label class="ml-2 font-bold" for="kelas">Kelas</label>
      <input
        class="w-32 rounded-2xl border-2 px-2"
        type="text"
        id="kelas"
        name="kelas"
        v-model="userData.kelas"
        disabled
      />
    </div>
    <div class="flex flex-col">
      <label class="ml-2 font-bold" for="absen">No. absen</label>
      <input
        class="w-32 rounded-2xl border-2 px-2"
        type="text"
        id="absen"
        name="absen"
        v-model="userData.absen"
        disabled
      />
    </div>
  </section>

  <section class="container mx-auto mt-4">
    <div v-for="(item, index) in dataAngket" class="mb-4 border-2 p-4">
      <div class="font-lato text-lg font-bold">
        {{ index + 1 }}. {{ item.question }}
      </div>

      <div class="lg:grid lg:grid-cols-4 lg:gap-2">
        <div
          v-for="ref in optionRef"
          class="mt-2 rounded-xl bg-gray-100 p-4 lg:grid lg:h-full lg:grid-rows-2 lg:items-center"
        >
          <p class="mb-2 text-center">{{ item.options[ref].label }}</p>
          <!-- <select
            class="w-full rounded-lg border-2 border-primary bg-white py-1 pl-4 text-left lg:h-fit"
            v-model="item.options[ref].point"
          >
            <option :value="1">1 - Tidak Sesuai</option>
            <option :value="2">2 - Cukup Sesuai</option>
            <option :value="3">3 - Sesuai</option>
            <option :value="4">4 - Sangat Sesuai</option>
          </select> -->
          <div class="options-container w-full rounded-lg bg-white p-4">
            <div class="flex w-full flex-row items-center justify-center gap-2">
              <div
                @click="setOption(index, ref, 1)"
                :class="`aspect-square w-12 rounded-full transition-colors duration-300 ${
                  item.options[ref].point === 1 ? 'bg-secondary' : 'bg-primary'
                }`"
              ></div>
              <div
                @click="setOption(index, ref, 2)"
                :class="`aspect-square w-10 rounded-full transition-colors duration-300 ${
                  item.options[ref].point === 2 ? 'bg-secondary' : 'bg-primary'
                }`"
              ></div>
              <div
                @click="setOption(index, ref, 3)"
                :class="`aspect-square w-10 rounded-full transition-colors duration-300 ${
                  item.options[ref].point === 3 ? 'bg-secondary' : 'bg-primary'
                }`"
              ></div>
              <div
                @click="setOption(index, ref, 4)"
                :class="`aspect-square w-12 rounded-full transition-colors duration-300 ${
                  item.options[ref].point === 4 ? 'bg-secondary' : 'bg-primary'
                }`"
              ></div>
            </div>
            <div
              class="mt-2 flex w-full flex-row items-center justify-between text-sm font-semibold text-primary"
            >
              <div>Tidak Sesuai</div>
              <div>Sangat Sesuai</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div @click="handleSubmit" class="mx-auto w-fit">
      <NavigationButton label="Berikutnya" />
    </div>
  </section>
</template>

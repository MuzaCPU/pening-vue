<script>
import QuizSection from "../components/QuizSection.vue";
import swal from "sweetalert";

export default {
  components: { QuizSection },
  data() {
    return {
      preTestData: [
        {
          type: "multiple-choice",
          question:
            "Berdasarkan data tersebut, nilai jangkauan suhu terbesar selama seminggu terjadi di kota…",
          image: "soal akm numerasi 1.png",
          answers: ["Shanghai", "Denpasar", "Tokyo", "Jakarta"],
          answerKey: "Tokyo",
          answer: "",
          point: 5,
        },
        {
          type: "short-answer",
          question:
            "Rata-rata selisih persentase dari Maret tahun 2020 sampai September tahun 2022 (Petunjuk menjawab, contoh : '0,10', tulis angka desimalnya saja.)",
          image: "soal akm numerasi 2.jpeg",
          answers: [],
          answerKey: ["9,82", "9,821", "9,8216", "9.82", "9.821", "9.8216"],
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Jangkauan penduduk miskin dari data profil kemiskinan di bawah adalah..",
          image: "soal akm numerasi 2 (1).jpeg",
          answers: ["2.73", "2.68", "2.74", "2.81", "2.79"],
          answerKey: "2.74",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Perhatikan stimulus Penerapan Sistem Zonasi. Panitia PPDB SMA Negeri 1 Banjarangkan secara resmi telah mengumumkan hasil penerimaan dari semua jalur dan tidak ada satupun siswa mengundurkan diri. Jika semua siswa dikumpulkan dalam satu ruangan dan salah satu panitia akan memanggil seorang peserta didik, peluang terpanggilnya siswa bukan dari jalur afirmasi adalah….",
          image: "soal akm numerasi 3.png",
          answers: ["17/20", "15/20", "11/15", "13/15", "15/30"],
          answerKey: "17/20",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question: "Pilihlah kondisi yang sesuai.",
          image: "Screen Shot 2023-07-20 at 12.00.01.png",
          answers: [
            "Rata-rata pemutar audio yang dikirim dari perusahaan elektrik untuk diperbaiki lebih banyak daripada pemutar audio dari perusahaan tronik",
            "Rata-rata pemutar audio yang rusak per hari tidak lebih dari 0,02",
            "Rata-rata pemutar video yang berfungsi normal sebanyak 6.700",
            "Semua jawaban salah",
            "Semua jawaban benar",
          ],
          answerKey: "Semua jawaban salah",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Perusahaan elektrik melakukan produksi  pemutar audio dalam 1 minggu dengan perusahaan tronik melakukan produksi pemutar audio selama 4 minggu, berapa selisih jumlah pemutar audio yang berfungsi normal?",
          image: "Screen Shot 2023-07-20 at 12.00.01 (1).png",
          answers: ["13.131", "13.230", "13.320", "13.330", "13.113"],
          answerKey: "13.330",
          answer: "",
          point: 5,
        },
        {
          type: "short-answer",
          question:
            "Terdapat pesanan pemutar audio dari klien, klien meminta jumlah pemutar audio sebanyak 64.020. Maka butuh berapa lama waktu yang dibutuhkan oleh perusahaan elektrik? (Petunjuk menjawab, contoh : '30', tulis jumlah harinya saja.)",
          image: "soal akm numerasi 2.jpeg",
          answers: [],
          answerKey: ["11", "11 hari", "11hari", "sebelas", "sebelas hari"],
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Rata-rata pertumbuhan tanah pasir di semua keadaan cahaya setiap minggunya adalah..",
          image: "soal akm numerasi 3 (1).png",
          answers: ["9,25", "9,12", "8,50", "8,90", "9,35"],
          answerKey: "9,25",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question: "Tentukan rataan dari data berikut.",
          image: "Screen Shot 2023-07-16 at 01.59.12.png",
          answers: ["40.3", "32.5", "34.5", "59.3"],
          answerKey: "59.3",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question: "Tentukan simpangan rata-rata dari data berikut.",
          image: "Screen Shot 2023-07-16 at 01.59.12.png",
          answers: ["3.451", "4.678", "5.067", "6.705"],
          answerKey: "5.067",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question: "Tentukan varians dari data berikut.",
          image: "Screen Shot 2023-07-16 at 01.59.12.png",
          answers: ["33.23", "35.67", "43.33", "39.07"],
          answerKey: "35.67",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question: "Tentukan simpangan baku dari data berikut.",
          image: "Screen Shot 2023-07-16 at 01.59.12.png",
          answers: ["5.44", "5.97", "5.01", "5.66"],
          answerKey: "5.97",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Peluang seorang dokter dapat mendiagnosa sejenis penyakit tertentu adalah 0,7. Jika dokter tersebut salah diagnosa, peluang pasien meninggal 0,8. Berapakah peluang dokter tersebut salah diagnosa dan pasien meninggal?",
          image: "",
          answers: ["1.02", "0,87", "0,67", "0,24"],
          answerKey: "0,24",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Tentukan mata uang yang memiliki perbedaan kurs yang begitu signifikan setiap tahunnya!",
          image: "soal akm numerasi posttest 5.png",
          answers: [
            "Dollar Australian",
            "Dollar Amerika",
            "Euro",
            "Poundsterling Inggris",
            "Dollar Hongkong",
          ],
          answerKey: "Euro",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Suatu pertemuan dihadiri oleh 10 orang. Pada saat bertemu, mereka saling berjabat tangan satu sama lain. Ada berapa jabat tangan yang terjadi?",
          image: "",
          answers: ["35", "40", "45", "50"],
          answerKey: "45",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Seorang siswa diminta mengerjakan 8 soal dari 10 soal, tetapi soal nomor 3 dan 6 harus dikerjakan. Banyak pilihan yang dapat diambil oleh siswa itu adalah...",
          image: "",
          answers: ["22", "18", "25", "28"],
          answerKey: "28",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Satwa terancam punah yang paling sedikit dari tahun 2015-2016.",
          image: "soal akm numerasi posttest 2.png",
          answers: [
            "Harimau Sumatera",
            "Badak",
            "Jalak Bali",
            "Elang",
            "Monyet Hitam Sulawesi",
          ],
          answerKey: "Jalak Bali",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Selisih satwa terancam Gajah Sumatera dengan Banteng dari tahun 2015 sampai tahun 2017",
          image: "soal akm numerasi posttest 2.png",
          answers: ["120", "135", "138", "142", "140"],
          answerKey: "135",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Sebuah dadu bersisi enam dilempar sekali. Berapakah peluang munculnya mata dadu lebih dari 4?",
          image: "soal akm numerasi 5.png",
          answers: ["2/3", "4/6", "1/3", "2/5"],
          answerKey: "1/3",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Peserta ulangan matematika terdiri dari 40 orang siswa kelas XI A, 35 orang siswa kelas XI B, dan 25 orang siswa kelas XI C. Nilai rata-rata seluruh peserta adalah 7,2, sedangkan nilai rata-rata kelas XI A dan kelas XI B adalah 7. Nilai rata-rata kelas XI C adalah...",
          image: "",
          answers: ["8,2", "7,8", "8,3", "8,9"],
          answerKey: "7,8",
          answer: "",
          point: 5,
        },
      ],
      userData: {
        nama: "",
        kelas: "",
        absen: "",
      },
    };
  },
  beforeMount() {
    if (!sessionStorage.getItem("pening-id-siswa")) {
      swal("Belum Isi Data Diri", "Isi data diri terlebih dahulu", "warning");
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
  },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Pre-<span class="text-primary">Test</span>
    </h4>
  </section>
  <section class="mt-4 flex flex-row items-center justify-center gap-4 flex-wrap">
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
  <section class="mt-4">
    <QuizSection
      :quizData="preTestData"
      :redirect="{ name: 'tes-gaya-belajar' }"
      type="pre-test"
    />
  </section>
</template>

<script>
import QuizSection from "../components/QuizSection.vue";
import swal from "sweetalert";

export default {
  components: { QuizSection },
  data() {
    return {
      postTestData: [
        {
          type: "multiple-choice",
          question:
            "Jika sebuah pemutar audio dipilih secara acak dari produksi harian untuk diuji, probabilitas jika pemutar itu perlu diperbaiki adalah",
          image: "soal akm numerasi posttest 1.png",
          answers: ["0,03", "0,05", "0,05", "0,05"],
          answerKey: "0,03",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question: "Pilihlah kondisi yang sesuai.",
          image: "soal akm numerasi posttest 1.png",
          answers: [
            "Rata-rata pemutar video yang dikirim untuk diperbaiki lebih banyak daripada pemutar audio per hari",
            "Rata-rata pemutar audio yang rusak per hari tidak lebih dari 5%",
            "Rata-rata pemutar video yang berfungsi normal sebanyak 2.000",
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
            "Berapa banyak rata-rata pemutar video yang dapat berfungsi normal?",
          image: "soal akm numerasi posttest 1.png",
          answers: ["1900", "2100", "1990", "1910", "Semua jawaban salah"],
          answerKey: "1900",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Tentukan manakah diantara jenis satwa berikut yang termasuk ke dalam kategori sangat memprihatinkan? Klik pada setiap pilihan jawaban yang benar!. Deskripsi Indonesia merupakan negara yang terkenal memiliki kekayaan flora dan fauna yang beragam. Namun, praktik perburuan dan perdagangan hewan liar di masa lalu mengakibatkan beberapa hewan di Indonesia terancam punah. Berikut adalah data jumlah 10 satwa yang terancam punah pada tahun 2015-2017. Pada tahun 2017, pemerintah melakukan pengkategorian satwa yang terancam punah berdasarkan jumlah satwa yang terdata. Jenis satwa yang termasuk ke dalam 25% satwa dengan jumlah paling sedikit diantara hewan – hewan yang terancam punah, dikategorikan sebagai kelompok satwa 'sangat memprihatinkan'.",
          image: "soal akm numerasi posttest 2 (1).png",
          answers: ["Jalak Bali", "Monyet Hitam Sulawesi", "Badak", "Tarsius"],
          answerKey: "Jalak Bali",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Pada tahun 2016, satwa banteng yang terancam punah sejumlah 381 ekor. Sementara, jumlah satwa badak hanya 19 ekor yang terancam punah. Maka, tentukan jangkauan jumlah satwa yang terancam punah pada tahun tersebut.",
          image: "soal akm numerasi posttest 2 (1).png",
          answers: ["372", "362", "352", "358"],
          answerKey: "362",
          answer: "",
          point: 5,
        },
        {
          type: "short-answer",
          question:
            "Angka satwa terancam punah yang rendah terjadi pada tahun.. (Petunjuk menjawab, contoh : '2020', tulis tahunnya saja.)",
          image: "soal akm numerasi posttest 2 (1).png",
          answers: [],
          answerKey: ["2015", "tahun 2015", "Tahun 2015", "Pada tahun 2015"],
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Satwa manakah dari tahun 2015-2017 yang mengalami jumlah satwa terancam punah lebih banyak?",
          image: "soal akm numerasi posttest 2 (1).png",
          answers: ["Banteng", "Babi Rusa", "Owa", "Gajah Sumatera"],
          answerKey: "Babi Rusa",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Berikut adalah tiga pernyataan mengenai persebaran jumlah satwa yang terancam punah. Apakah pernyataan-pernyataan berikut benar?",
          image: "soal akm numerasi posttest 2 (1).png",
          answers: [
            "Harimau Sumatera, Banteng, dan Tarsius memerlukan perhatian khusus karena peningkatan jumlahnya yang sangat sedikit.",
            "Balai konservasi perlu melakukan investigasi terkait penyebab penurunan jumlah Banteng pada tahun 2017 yang cukup tinggi.",
            "Rata-rata populasi Jalak Bali pada 2015-2017 sangat memprihatinkan sehingga pemerintah setempat perlu mengupayakan tindakan khusus untuk pelestarian Jalak Bali.",
            "Semua jawaban salah",
            "Semua jawaban benar",
          ],
          answerKey: "Semua jawaban benar",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Selama tahun 2016-2017 diketahui bahwa tidak ada Monyet Hitam Sulawesi dan Owa yang mati. Balai konservasi mengkategorikan Owa dan Monyet yang baru lahir atau ditemukan di 2017 sebagai Owa dan Monyet muda, sementara sisanya sebagai Owa dan Monyet tua. Balai konservasi akan mengambil satu Monyet Hitam Sulawesi dan satu Owa untuk diobservasi. Manakah di antara jenis Monyet dan Owa yang paling mungkin terpilih?",
          image: "soal akm numerasi posttest 2 (1).png",
          answers: [
            "Satwa yang terpilih adalah satu monyet tua dan satu owa muda.",
            "Satwa yang terpilih adalah satu monyet muda dan satu owa tua.",
            "Monyet dan owa yang terpilih keduanya tergolong tua",
            "Monyet dan owa yang terpilih keduanya tergolong muda",
            "Setiap jenis owa dan monyet memiliki peluang yang sama untuk terpilih.",
          ],
          answerKey:
            "Setiap jenis owa dan monyet memiliki peluang yang sama untuk terpilih.",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Satwa terancam punah yang paling sedikit dari tahun 2015-2016.",
          image: "soal akm numerasi posttest 2 (1).png",
          answers: [
            "Harimau Sumatera",
            "Badak",
            "Jalak Bali",
            "Monyet Hitam Sulawesi",
            "Owa",
          ],
          answerKey: "Jalak Bali",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Selisih kurs mata uang asing tertinggi dan terendah pada tahun 2018 adalah.. Deskripsi Kurs merupakan harga mata uang dari suatu negara yang diukur dalam satuan mata uang negara lain. Kurs dapat diartikan juga sebagai rasio atau perbandingan nilai tukar mata uang suatu negara terhadap negara lainnya. Kurs memiliki peranan yang penting. Kurs digunakan saat ingin mengambil keputusan, misalnya untuk kegiatan ekspor dan impor. Dalam kurs, terdapat istilah 'kurs tengah', kurs tengah adalah salah satu jenis perhitungan nilai tukar rupiah terhadap dolar AS, di mana nilainya berada di antara kurs jual dan kurs beli. Berikut adalah nilai kurs tengah beberapa mata uang asing terhadap rupiah di Bank Indonesia Jakarta.",
          image: "soal akm numerasi posttest 5 (1).png",
          answers: ["18.245", "18.243", "18.242", "18.241"],
          answerKey: "18.242",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Tentukan mata uang yang memiliki perbedaan kurs yang tertinggi setiap tahunnya!",
          image: "soal akm numerasi posttest 5 (1).png",
          answers: [
            "Poundsterling Inggris",
            "Euro",
            "Dollar Singapura",
            "Dollar Amerika",
          ],
          answerKey: "Poundsterling Inggris",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question: "Manakah pernyataan yang salah.",
          image: "soal akm numerasi posttest 5 (1).png",
          answers: [
            "Yen Jepang adalah kurs mata uang asing yang terendah dari Dollar Hongkong",
            "Persentase kurs Poundsterling Inggris tertinggi pada setiap tahun",
            "Ringgit Malaysia tidak memiliki peningkatan yang cukup signifikan dari tahun ke tahun",
          ],
          answerKey:
            "Persentase kurs Poundsterling Inggris tertinggi pada setiap tahun",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Berdasarkan persentase kenaikan nilai kurs dari tahun 2019 ke 2020, manakah mata uang asing dengan persentase kenaikan kurs terbesar?",
          image: "soal akm numerasi posttest 5 (1).png",
          answers: [
            "Dollar Australian",
            "Euro",
            "Poundsterling Inggris",
            "Yen Jepang",
            "Dollar Singapura",
          ],
          answerKey: "Euro",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Berdasarkan persentase penurunan nilai kurs dari tahun 2018 ke 2019, manakah mata uang asing dengan persentase penurunan kurs terbesar?",
          image: "soal akm numerasi posttest 5 (1).png",
          answers: [
            "Dollar Australian",
            "Euro",
            "Poundsterling Inggris",
            "Yen Jepang",
            "Dollar Singapura",
          ],
          answerKey: "Euro",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Berapa selisih antara Euro dan Dollar Amerika pada tahun 2018-2020",
          image: "soal akm numerasi posttest 5 (1).png",
          answers: ["7.122,12", "6.982,12", "6.992,12", "6.990,12", "6.995,12"],
          answerKey: "6.992,12",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Selisih dari pertumbuhan tertinggi dan terendah kecambah dalam keadaan cahaya gelap pada perhitungan minggu ke-1 sampai ke-4 berdasarkan pada semua media tanah, dihitung dari pertumbuhan kecambah tertinggi dan terendah pada setiap minggunya adalah... Deskripsi Seorang peneliti melakukan percobaan menanam kecambah dengan beberapa media tanam dan keadaan cahaya yang berbeda. Berikut adalah hasil pertumbuhan kecambah dalam 1 bulan.",
          image: "soal akm numerasi 3 (2).png",
          answers: ["26", "29", "24", "25", "28"],
          answerKey: "29",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Rata-rata pertumbuhan tanah pasir di semua keadaan cahaya setiap minggunya adalah..",
          image: "soal akm numerasi 3 (2).png",
          answers: ["8,52", "9,25", "9,44", "8,55", "9,35"],
          answerKey: "9,25",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Persentase pertumbuhan media tanam yang terkecil dari keadaan cahaya terang pada minggu ke-3 adalah..",
          image: "soal akm numerasi 3 (2).png",
          answers: ["Tanah Pasir", "Tanah Merah", "Tanah Humus"],
          answerKey: "Tanah Pasir",
          answer: "",
          point: 5,
        },
        {
          type: "multiple-choice",
          question:
            "Berdasarkan data pertumbuhan kecambah yang diberikan, dapat ditarik beberapa hipotesis (dugaan sementara) terkait pengaruh cahaya dan media tanam terhadap pertumbuhan tanaman. Berikut ini, manakah yang merupakan hipotesis yang tepat? ",
          image: "soal akm numerasi 3 (2).png",
          answers: [
            "Pertumbuhan tanaman di tanah merah lebih cepat daripada di tanah pasir.",
            "Semakin banyak cahaya yang diterima tanaman maka pertumbuhan tanaman akan semakin cepat.",
            "Perbedaan signifikan pertumbuhan tanaman akibat banyak sedikitnya cahaya terlihat pada media tanam tanah merah",
            "Semua jawaban salah",
            "Semua jawaban benar",
          ],
          answerKey:
            "Pertumbuhan tanaman di tanah merah lebih cepat daripada di tanah pasir.",
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
  },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      FINAL <span class="text-primary">TEST</span>
    </h4>
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
  <section class="mt-4">
    <QuizSection :quizData="postTestData" :redirect="{ name: 'home' }" type="post-test" />
  </section>
</template>

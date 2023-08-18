<script>
import NavigationButton from "./NavigationButton.vue";
import { createHasilPreTest, createHasilPostTest } from "../firestore";
import swal from "sweetalert";
export default {
  props: {
    quizData: Array,
    redirect: Object,
    type: String,
  },
  components: {
    NavigationButton,
  },
  data() {
    return {
      currentPosition: 0,
      idSiswa: "",
    };
  },
  mounted() {
    this.idSiswa = sessionStorage.getItem("pening-id-siswa");
  },
  methods: {
    handleNext() {
      this.currentPosition = this.currentPosition + 1;
    },
    handleBack() {
      this.currentPosition = this.currentPosition - 1;
    },
    setCurrentPosition(position) {
      this.currentPosition = position;
    },
    hitungSkor() {
      let total = 0;
      for (let item of this.quizData) {
        if (item.type === "multiple-choice") {
          if (item.answer === item.answerKey) {
            total = total + item.point;
          }
        }
        if (item.type === "short-answer") {
          if (item.answerKey.includes(item.answer)) {
            total = total + item.point;
          }
        }
      }
      return total;
    },
    async handleSubmit() {
      const isCompleted = this.quizData.find((el) => el.answer === "");
      if (isCompleted) {
        await swal(
          "Jawaban Belum Lengkap",
          "Ada jawaban yang masih kosong, ayo periksa kembali",
          "error",
        );
        return;
      }
      const isConfirm = await swal({
        title: "Yakin?",
        text: "Pastikan kamu sudah mengisi semua jawaban dengan benar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (isConfirm) {
        const skor = this.hitungSkor();
        if (this.type === "pre-test") {
          const res = await createHasilPreTest({
            idSiswa: this.idSiswa,
            nilai: skor,
          });
          console.log(res);
        }
        if (this.type === "post-test") {
          const res = await createHasilPostTest({
            idSiswa: this.idSiswa,
            nilai: skor,
          });
          console.log(res);
        }
        await swal(
          "Good job!",
          "Terima kasih banyak atas partisipasinya, semoga kamu dapat uang jajan dari langit. \n\nSalam, Peneliti setengah robot.",
          "success",
        );
        this.$router.push(this.$props.redirect);
      }
    },
  },
};
</script>
<template>
  <div class="container mx-auto">
    <!-- head control -->
    <div
      class="flex flex-row flex-wrap items-center justify-center rounded-lg bg-gray-200 p-4"
    >
      <div
        @click="setCurrentPosition(index)"
        :class="`m-1 inline-block w-12 cursor-pointer rounded-lg text-xl ${
          currentPosition === index
            ? 'border-4 border-secondary'
            : 'border-2 border-primary'
        }   ${
          quizData[index].answer !== '' ? 'bg-green-500' : 'bg-primary'
        } text-center text-white`"
        v-for="(item, index) in quizData"
      >
        {{ index + 1 }}
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
      <!-- soal -->
      <div class="mt-4">
        <div class="font-lato text-2xl font-bold">
          Soal No.{{ currentPosition + 1 }}
        </div>
        <div class="mt-4">{{ quizData[currentPosition].question }}</div>
        <div class="mt-4" v-if="quizData[currentPosition].image">
          <img
            :src="`/images/${quizData[currentPosition].image}`"
            alt="Gambar Soal"
          />
        </div>
      </div>
      <!-- jawaban -->
      <div class="mt-4 lg:hidden"></div>
      <div
        class="lg:mt-12"
        v-if="quizData[currentPosition].type === 'multiple-choice'"
      >
        <div v-for="item in quizData[currentPosition].answers">
          <input
            type="radio"
            :id="item"
            :value="item"
            v-model="quizData[currentPosition].answer"
          />
          <label class="ml-2 lg:text-xl" :for="item">{{ item }}</label>
        </div>
      </div>
      <div
        class="lg:mt-12"
        v-if="quizData[currentPosition].type === 'short-answer'"
      >
        <input
          class="w-full rounded-lg border-2 border-primary px-4 py-2"
          placeholder="Jawab Disini"
          type="text"
          v-model="quizData[currentPosition].answer"
        />
      </div>
    </div>

    <!-- control -->
    <div
      class="mt-6 flex flex-row items-center justify-center gap-4 lg:justify-end"
    >
      <div @click="handleBack" v-if="currentPosition !== 0">
        <NavigationButton label="Sebelumnya" :isBack="true" />
      </div>
      <div @click="handleNext" v-if="currentPosition !== quizData.length - 1">
        <NavigationButton label="Berikutnya" />
      </div>
      <div @click="handleSubmit" v-if="currentPosition === quizData.length - 1">
        <NavigationButton label="Submit" :isDanger="true" />
      </div>
    </div>
  </div>
</template>

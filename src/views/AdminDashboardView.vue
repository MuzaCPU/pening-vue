<script>
import { getSiswaTestData } from "../firestore";
import TableLite from "vue3-table-lite";
import swal from "sweetalert";
export default {
  components: { TableLite },
  data() {
    return {
      dataSiswa: [],
      table: {},
      loading: true,
    };
  },
  async mounted() {
    const datasiswa = await getSiswaTestData();
    this.dataSiswa = datasiswa;
    this.table = {
      columns: [
        {
          label: "No",
          field: "no",
          sortable: true,
          headerStyles: { background: "#003366" },
          width: "2%",
          isKey: true,
        },
        {
          label: "Nama",
          field: "nama",
          sortable: true,
          headerStyles: { background: "#003366" },
          width: "10%",
        },
        {
          label: "No Absen",
          field: "absen",
          sortable: true,
          headerStyles: { background: "#003366" },
          width: "5%",
        },
        {
          label: "Kelas",
          field: "kelas",
          sortable: true,
          headerStyles: { background: "#003366" },
          width: "5%",
        },
        {
          label: "Gaya Belajar",
          field: "gayaBelajar",
          sortable: true,
          headerStyles: { background: "#003366" },
          width: "10%",
        },
        {
          label: "Pre Test",
          field: "preTest",
          sortable: true,
          headerStyles: { background: "#003366" },
          width: "5%",
        },
        {
          label: "Post Test",
          field: "postTest",
          sortable: true,
          headerStyles: { background: "#003366" },
          width: "5%",
        },
      ],
      rows: this.dataSiswa,
      totalRecordCount: datasiswa.length,
      sortable: {
        order: "id",
        sort: "asc",
      },
    };
    this.loading = false
  },
  methods: {
    async handleLogout() {
      const isConfirm = await swal({
        title: "Logout Sebagai Admin",
        text: "Apakah kamu yakin ingin logout?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (isConfirm) {
        sessionStorage.removeItem("pening-admin");
        this.$router.push({ name: "home" });
      }
    },
  },
  beforeMount() {
    if (!sessionStorage.getItem("pening-admin")) {
      swal("Belum Login", "anda belum login", "warning");
      this.$router.push({ name: "admin-login" });
    }
  },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Data Aktivitas <span class="text-primary">Siswa</span>
    </h4>
  </section>
  <section class="w-fit mx-auto font-bold mt-12 text-2xl" v-if="loading">Loading Data...</section>
  <section class="container mx-auto mt-6" v-if="!loading">
    <table-lite
      :is-static-mode="true"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
    ></table-lite>
  </section>
  <section class="container mx-auto" >
    <button
      @click="handleLogout"
      class="mt-16 w-fit rounded-full bg-red-600 px-12 py-2 font-open-sans text-xl font-medium text-white"
    >
      Logout
    </button>
  </section>
</template>

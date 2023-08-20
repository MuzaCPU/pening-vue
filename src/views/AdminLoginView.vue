<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      username: "",
      password: "",
      admin: {
        username: "admin",
        password: "root",
      },
    };
  },
  methods: {
    handleLogin() {
      if (
        this.username !== this.admin.username ||
        this.password !== this.password
      ) {
        swal(
          "Login Gagal",
          "Maaf username dan password yang Anda masukan salah",
          "error",
        );
        return;
      }
      sessionStorage.setItem("pening-admin", "true");
      this.$router.push({ name: "admin-dashboard" });
    },
  },
  beforeMount() {
    if (sessionStorage.getItem("pening-admin")) {
      this.$router.push({ name: "admin-dashboard" });
    }
  },
};
</script>
<template>
  <section class="mx-auto w-full max-w-sm rounded-lg p-6 shadow-xl">
    <div class="mx-auto w-5/12">
      <img class="w-full" src="/images/pening.png" alt="logo pening" />
    </div>
    <h4 class="mt-4 text-left font-lato text-2xl font-bold uppercase">
      Login Sebagai <span class="text-primary">Admin</span>
    </h4>
    <form @submit.prevent="handleLogin">
      <input
        class="mt-4 w-full rounded-full border-2 px-4 py-2 font-lato"
        type="text"
        placeholder="Username"
        v-model="username"
      />
      <input
        class="mt-2 w-full rounded-full border-2 px-4 py-2 font-lato"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <button
        type="submit"
        class="mt-16 w-full rounded-full bg-primary py-2 font-open-sans text-xl font-medium text-white"
      >
        Login
      </button>
    </form>
  </section>
</template>

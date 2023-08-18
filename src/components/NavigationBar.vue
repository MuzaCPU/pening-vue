<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
      console.log(this.menu);
    },
  },
};
</script>
<template>
  <header class="fixed z-50 h-20 w-full p-4">
    <div
      class="container mx-auto flex h-full flex-row items-center justify-between rounded-full bg-white px-6 py-1 shadow-lg"
    >
      <div @click="$router.push({ name: 'home' })" class="h-full">
        <img class="h-full" src="/images/pening.png" alt="logo pening" />
      </div>
      <div class="hidden lg:block">
        <a v-if="$route.name === 'home'" href="#gaya-belajar">
          <p
            class="mx-6 inline-block cursor-pointer items-center font-lato font-bold text-gray-700"
          >
            Gaya Belajar
          </p>
        </a>
        <p
          v-else
          @click="$router.push({ name: 'tes-gaya-belajar' })"
          class="mx-6 inline-block cursor-pointer items-center font-lato font-bold text-gray-700"
        >
          Gaya Belajar
        </p>
        <p
          @click="$router.push({ name: 'tentang' })"
          class="mx-6 inline-block cursor-pointer items-center font-lato font-bold text-gray-700"
        >
          Tentang
        </p>
        <p
          @click="$router.push({ name: 'petunjuk' })"
          class="mx-6 inline-block cursor-pointer items-center font-lato font-bold text-gray-700"
        >
          Petunjuk
        </p>
        <p
          @click="$router.push({ name: 'penjelasan-materi' })"
          class="mx-6 inline-block cursor-pointer items-center font-lato font-bold text-gray-700"
        >
          Penjelasan Materi
        </p>
      </div>
      <div class="hidden lg:block">
        <button
          v-if="$route.name === 'home'"
          @click="$router.push({ name: 'admin-login' })"
          class="w-fit rounded-full bg-white px-4 py-1 font-lato text-sm font-black text-primary"
        >
          LOGIN ADMIN
        </button>
        <button
          v-if="$route.name === 'home'"
          @click="$router.push({ name: 'sign-up' })"
          class="w-fit rounded-full bg-primary px-4 py-1 font-lato text-sm font-bold text-white"
        >
          DAFTAR SISWA
        </button>
        <button
          v-else
          @click="$router.push({ name: 'pre-test' })"
          class="w-fit rounded-full bg-primary px-6 py-1 font-lato text-base font-bold text-white"
        >
          PRE-TEST
        </button>
      </div>
      <div class="lg:hidden" @click="toggleMenu">
        <Icon class="text-2xl" icon="iconamoon:menu-burger-horizontal-bold" />
      </div>
    </div>
    <div
      @click="toggleMenu"
      :class="`absolute ${
        menu ? 'top-0' : '-top-[2000px]'
      } left-0 h-screen w-full backdrop-blur transition-all duration-200 ease-in-out`"
    >
      <div class="h-fit w-full bg-white p-8">
        <div class="flex flex-row items-center justify-between">
          <div @click="$router.push({ name: 'home' })" class="w-1/2">
            <img class="w-full" src="/images/pening.png" alt="logo pening" />
          </div>
          <div>
            <Icon class="text-2xl" icon="ph:x-bold" />
          </div>
        </div>
        <nav class="mt-8">
          <a v-if="$route.name === 'home'" href="#gaya-belajar">
            <p
              class="mt-2 cursor-pointer items-center border-b-2 font-lato text-xl font-bold text-gray-700"
            >
              Gaya Belajar
            </p>
          </a>
          <p
            v-else
            @click="$router.push({ name: 'tes-gaya-belajar' })"
            class="mt-2 cursor-pointer items-center border-b-2 font-lato text-xl font-bold text-gray-700"
          >
            Gaya Belajar
          </p>
          <p
            @click="$router.push({ name: 'tentang' })"
            class="mt-2 cursor-pointer items-center border-b-2 font-lato text-xl font-bold text-gray-700"
          >
            Tentang
          </p>
          <p
            @click="$router.push({ name: 'petunjuk' })"
            class="mt-2 cursor-pointer items-center border-b-2 font-lato text-xl font-bold text-gray-700"
          >
            Petunjuk
          </p>
          <p
            @click="$router.push({ name: 'penjelasan-materi' })"
            class="mt-2 cursor-pointer items-center border-b-2 font-lato text-xl font-bold text-gray-700"
          >
            Penjelasan Materi
          </p>
          <button
            v-if="$route.name === 'home'"
            @click="$router.push({ name: 'admin-login' })"
            class="mt-4 w-full rounded-full bg-white py-1 font-lato text-sm font-bold text-black"
          >
            LOGIN ADMIN
          </button>
          <button
            v-if="$route.name === 'home'"
            @click="$router.push({ name: 'sign-up' })"
            class="mt-4 w-full rounded-full bg-primary py-1 font-lato text-lg font-bold text-white"
          >
            DAFTAR SISWA
          </button>
          <button
            v-else
            @click="$router.push({ name: 'pre-test' })"
            class="mt-4 w-full rounded-full bg-primary py-1 font-lato text-lg font-bold text-white"
          >
            PRE-TEST
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

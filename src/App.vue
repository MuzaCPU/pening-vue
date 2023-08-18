<script>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    RouterView,
    NavigationBar,
    Footer,
  },
  data() {
    return {
      noNavbar: [
        'sign-up'
      ],
      noFooter: [
        'sign-up'
      ],
      noPaddingX: [],
      pageName: this.$router.currentRoute.value.name,
    };
  },
};
</script>

<template>
  <div class="relative">
    <div v-if="!noNavbar.includes(this.$router.currentRoute.value.name)">
      <NavigationBar />
      <div class="h-24"></div>
    </div>
    <main
      :class="`${
        !noPaddingX.includes(this.$router.currentRoute.value.name) && 'px-4'
      } pb-12`"
    >
      <RouterView />
    </main>
    <Footer v-if="!noFooter.includes(this.$router.currentRoute.value.name)"/>
  </div>
</template>

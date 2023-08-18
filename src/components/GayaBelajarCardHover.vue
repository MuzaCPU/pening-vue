<script>
export default {
  data() {
    return {
      isHover: false,
    };
  },
  props: {
    title: String,
    image: String,
  },
  methods: {
    toggleHover() {
      this.isHover = !this.isHover;
    },
  },
};
</script>
<template>
  <div
    class="relative rounded-xl px-4 py-8 shadow-xl"
    @mouseenter="toggleHover"
    @mouseleave="toggleHover"
  >
    <div class="mx-auto w-1/2">
      <img class="w-full" :src="image" alt="icon gaya belajar" />
    </div>
    <h4 class="mt-2 text-center font-lato text-lg">{{ title }}</h4>
    <div
      v-if="isHover"
      :class="`absolute left-0 z-10 h-fit w-full overflow-hidden rounded-xl bg-white p-4 text-xs lg:text-base shadow-2xl transition-all`"
    >
      <hr class="mb-2 border-2" />
      <slot></slot>
    </div>
    <!-- <div
      :class="`${
        isHover ? 'h-fit p-4' : 'h-0'
      } absolute left-0 z-10 w-full overflow-hidden rounded-xl bg-white text-xs shadow-2xl transition-all`"
    >
      <hr class="mb-2 border-2" />
      <slot></slot>
    </div> -->
  </div>
</template>

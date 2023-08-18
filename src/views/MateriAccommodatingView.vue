<script>
import NavigationButton from "../components/NavigationButton.vue";
export default {
  components: { NavigationButton },
  data() {
    return {
      materiData: [
        {
          title: "Part 1 Pembukaan Materi – Data dan Ketidakpastian",
          youtubeId: "IyaNQZ2Cy-o",
        },
        {
          title: "Part 2 Case Data Infografis – Data dan Ketidakpastian",
          youtubeId: "QLkkpRKzjKU",
        },
        {
          title: "Part 3 Case Data Tabel – Data dan Ketidakpastian",
          youtubeId: "D362naz48aY",
        },
      ],
      selectedMateriIndex: 0,
    };
  },
  methods: {
    setSelectedMaterialIndex(index) {
      console.log(index);
      this.selectedMateriIndex = index;
    },
  },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Materi <span class="text-primary">Accommodating</span>
    </h4>
  </section>

  <div class="container mx-auto lg:grid lg:grid-cols-3 lg:gap-4">
    <section
      class="mt-8 overflow-clip rounded-xl border-4 border-secondary lg:col-span-2"
    >
      <iframe
        class="aspect-video w-full"
        :src="`https://www.youtube.com/embed/${materiData[selectedMateriIndex].youtubeId}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </section>
    <section class="mt-8 rounded-lg border-2 p-2">
      <h4 class="border-b-2 font-lato text-xl font-bold">Daftar Materi</h4>
      <div class="mt-2">
        <ul class="">
          <li
            @click="setSelectedMaterialIndex(index)"
            :class="`mb-2 cursor-pointer rounded-lg border-2 p-4 ${
              selectedMateriIndex === index ? 'border-secondary' : ''
            }`"
            v-for="(item, index) in materiData"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </section>
  </div>
  <section class="mt-8">
    <div @click="$router.push({ name: 'post-test' })" class="mx-auto w-fit">
      <NavigationButton label="Post Test" />
    </div>
  </section>
</template>

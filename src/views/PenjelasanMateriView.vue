<script>
import GayaBelajarCard from "../components/GayaBelajarCard.vue";
export default {
  components: {
    GayaBelajarCard,
  },
};
</script>
<template>
  <section>
    <h4 class="text-center font-lato text-4xl font-bold">
      Penjelasan <span class="text-primary">Materi</span>
    </h4>
  </section>
  <section class="mt-8 container mx-auto max-w-xl">
    <div class="grid grid-cols-2 gap-8">
      <div
        class="cursor-pointer"
        @click="$router.push({ name: 'penjelasan-materi-converging' })"
      >
        <GayaBelajarCard image="/images/converger.png" title="Converging" />
      </div>

      <div
        class="cursor-pointer"
        @click="$router.push({ name: 'penjelasan-materi-diverging' })"
      >
        <GayaBelajarCard image="/images/diverger.png" title="Diverging" />
      </div>
      
      <div
        class="cursor-pointer"
        @click="$router.push({ name: 'penjelasan-materi-assimilating' })"
      >
        <GayaBelajarCard image="/images/asimilator.png" title="Assimilating" />
      </div>

      <div
        class="cursor-pointer"
        @click="$router.push({ name: 'penjelasan-materi-accommodating' })"
      >
        <GayaBelajarCard
          image="/images/accommondator.png"
          title="Accommodating"
        />
      </div>
    </div>
  </section>
</template>

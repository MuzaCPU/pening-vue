<script>
export default {
  props: {
    no: String,
    question: String,
    options: Object,
  },
};
</script>
<template>
  <div class="border-2 p-4">
    <div>{{ no }}. {{ question }}</div>
    <div class="mt-2 rounded-xl bg-gray-100 p-4">
      <select
        class="w-full rounded-lg border-2 border-secondary py-1 text-center"
        name="tes"
        id="tes"
        disabled
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p class="mt-1 text-center">{{ options.CE }}</p>
    </div>
  </div>
</template>

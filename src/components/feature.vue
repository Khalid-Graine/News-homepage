<template>
  <div class="flex flex-col gap-2" :class="props.class">
    <h3 class="text-white font-bold text-xl">{{ props.title }}</h3>
    <small class="text-xgrayishblue">
      {{ props.description }}
    </small>
  </div>
</template>

<script setup>
const props = defineProps(["title", "description", 'class']);
</script>

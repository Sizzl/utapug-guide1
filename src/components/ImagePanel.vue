<template>
  <figure class="image-panel">
    <img class="image-panel__image" :src="src" :alt="alt" />
    <figcaption v-if="caption" class="image-panel__caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
});
</script>
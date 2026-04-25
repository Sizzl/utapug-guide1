<template>
  <section class="callout-panel">
    <p v-if="eyebrow" class="callout-panel__eyebrow">{{ eyebrow }}</p>
    <h2 class="callout-panel__title">{{ title }}</h2>
    <div class="callout-panel__content">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
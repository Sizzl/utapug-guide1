<template>
  <section class="guide-hero" :class="heroClass">
    <div class="guide-hero__copy">
      <p v-if="eyebrow" class="guide-hero__eyebrow">{{ eyebrow }}</p>
      <h1 class="guide-hero__title">{{ title }}</h1>
      <p v-if="description" class="guide-hero__description">{{ description }}</p>
      <div v-if="$slots.actions" class="guide-hero__actions">
        <slot name="actions" />
      </div>
      <dl v-if="stats?.length" class="guide-hero__stats">
        <div v-for="stat in stats" :key="stat.label" class="guide-hero__stat">
          <dt>{{ stat.label }}</dt>
          <dd>{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
    <div v-if="$slots.media" class="guide-hero__media">
      <slot name="media" />
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  eyebrow: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  stats: {
    type: Array,
    default: () => [],
  },
  align: {
    type: String,
    default: "split",
  },
});

const heroClass = computed(() => `guide-hero--${props.align}`);
</script>
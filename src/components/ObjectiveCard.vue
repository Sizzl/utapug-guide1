<template>
  <article class="objective-card">
    <router-link
      class="objective-card__link"
      :to="{ name: 'experience', params: { slug: destinationSlug, experienceSlug: experience.slug } }"
    >
      <img class="objective-card__image" :src="imageSrc" :alt="experience.name" />
      <div class="objective-card__body">
        <span class="objective-card__eyebrow">Objective {{ index + 1 }}</span>
        <h3 class="objective-card__title">{{ experience.name }}</h3>
      </div>
    </router-link>
  </article>
</template>

<script setup>
defineProps({
  destinationSlug: {
    type: String,
    required: true,
  },
  experience: {
    type: Object,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <article class="map-card">
    <router-link
      class="map-card__link"
      :to="{ name: 'destination', params: { slug: destination.slug } }"
    >
      <div class="map-card__image-wrap">
        <img class="map-card__image" :src="imageSrc" :alt="destination.name" />
      </div>
      <div class="map-card__body">
        <div class="map-card__meta">
          <span>Map</span>
          <span>{{ destination.experiences.length }} objectives</span>
        </div>
        <h2 class="map-card__title">{{ destination.name }}</h2>
        <p class="map-card__description">{{ destination.description }}</p>
      </div>
    </router-link>
  </article>
</template>

<script setup>
defineProps({
  destination: {
    type: Object,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="stack-lg">
    <GuideHero
      eyebrow="Map browser"
      title="Pick a map and drill into each objective"
      description="Every map overview now acts like an index page: enter through the destination card, then move objective by objective with the full screenshot and tactic notes beside it."
      :stats="stats"
      align="stack"
    />

    <section class="map-grid">
      <MapCard
        v-for="destination in destinations"
        :key="destination.slug"
        :destination="destination"
        :image-src="getAssetUrl(destination.image)"
      />
    </section>
  </div>
</template>

<script setup>
import GuideHero from "@/components/GuideHero.vue";
import MapCard from "@/components/MapCard.vue";
import { destinations, getAssetUrl } from "@/lib/guide.js";

const stats = [
  { label: "Maps", value: destinations.length },
  {
    label: "Objectives",
    value: destinations.reduce((total, destination) => total + destination.experiences.length, 0),
  },
  { label: "Format", value: "Screenshot-first" },
];
</script>

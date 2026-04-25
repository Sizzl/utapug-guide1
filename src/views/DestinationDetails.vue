<template>
  <div v-if="destination" class="stack-lg">
    <GuideHero
      eyebrow="Destination overview"
      :title="destination.name"
      :description="destination.description"
      :stats="heroStats"
    >
      <template #actions>
        <router-link class="button button--ghost" to="/maps">Back to maps</router-link>
        <router-link
          class="button button--primary"
          :to="{ name: 'experience', params: { slug: destination.slug, experienceSlug: destination.experiences[0].slug } }"
        >
          Open first objective
        </router-link>
      </template>
      <template #media>
        <ImagePanel
          :src="getAssetUrl(destination.image)"
          :alt="destination.name"
          caption="Overview image for the destination before you drill into objective callouts."
        />
      </template>
    </GuideHero>

    <section class="grid-two">
      <CalloutPanel eyebrow="How to use this page" title="Start broad, then go objective by objective">
        <p>
          Use the objective cards below as the index for the map. Each card opens a larger screenshot and the written tactic notes for that stage of the round.
        </p>
        <p>
          The new layout keeps the map image visible up front, then lets you move through each section in a cleaner reading flow than the old nested page design.
        </p>
      </CalloutPanel>

      <CalloutPanel eyebrow="Coverage" title="Current objective count">
        <p>
          <strong>{{ destination.experiences.length }}</strong>
          objective screenshots are available for this destination.
        </p>
        <p>
          Some older maps still have shorter notes than others, but the new UI keeps those gaps readable instead of collapsing the page.
        </p>
      </CalloutPanel>
    </section>

    <section class="stack-md">
      <div class="section-heading">
        <p class="section-heading__eyebrow">Objectives</p>
        <h2 class="section-heading__title">Choose a stage of the map</h2>
      </div>

      <div class="objective-grid">
        <ObjectiveCard
          v-for="(experience, index) in destination.experiences"
          :key="experience.slug"
          :destination-slug="destination.slug"
          :experience="experience"
          :image-src="getAssetUrl(experience.image)"
          :index="index"
        />
      </div>
    </section>
  </div>

  <section v-else class="empty-state">
    <p class="section-heading__eyebrow">Not found</p>
    <h1 class="section-heading__title">That map is not in the guide</h1>
    <router-link class="button button--primary" to="/maps">Return to the map browser</router-link>
  </section>
</template>

<script setup>
import { computed } from "vue";
import CalloutPanel from "@/components/CalloutPanel.vue";
import GuideHero from "@/components/GuideHero.vue";
import ImagePanel from "@/components/ImagePanel.vue";
import ObjectiveCard from "@/components/ObjectiveCard.vue";
import { getAssetUrl, getDestination } from "@/lib/guide.js";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const destination = computed(() => getDestination(props.slug));
const heroStats = computed(() => {
  if (!destination.value) {
    return [];
  }

  return [
    { label: "Objectives", value: destination.value.experiences.length },
    { label: "Mode", value: "Assault" },
    { label: "Guide type", value: "Map overview" },
  ];
});
</script>

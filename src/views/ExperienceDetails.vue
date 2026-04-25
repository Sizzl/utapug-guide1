<template>
  <div v-if="destination && experience" class="stack-lg">
    <GuideHero
      eyebrow="Objective detail"
      :title="experience.name"
      :description="destination.name"
      :stats="heroStats"
    >
      <template #actions>
        <router-link class="button button--ghost" :to="{ name: 'destination', params: { slug: destination.slug } }">
          Back to {{ destination.name }}
        </router-link>
        <router-link
          v-if="nextExperience"
          class="button button--primary"
          :to="{ name: 'experience', params: { slug: destination.slug, experienceSlug: nextExperience.slug } }"
        >
          Next objective
        </router-link>
      </template>
      <template #media>
        <ImagePanel
          :src="getAssetUrl(experience.image)"
          :alt="experience.name"
          :caption="`Screenshot reference for ${experience.name}.`"
        />
      </template>
    </GuideHero>

    <section class="grid-two detail-grid">
      <CalloutPanel eyebrow="Tactic notes" title="Read this with the screenshot open">
        <p>{{ descriptionText }}</p>
      </CalloutPanel>

      <CalloutPanel eyebrow="Flow" title="Move through the destination">
        <p>
          This objective is <strong>{{ objectivePosition }}</strong> for {{ destination.name }}.
        </p>
        <p v-if="nextExperience">
          When you are done here, continue to <strong>{{ nextExperience.name }}</strong> to keep the route context intact.
        </p>
        <p v-else>
          This is the final listed objective for the destination. Jump back to the overview to revisit earlier stages.
        </p>
      </CalloutPanel>
    </section>

    <section class="stack-md">
      <div class="section-heading">
        <p class="section-heading__eyebrow">Quick jump</p>
        <h2 class="section-heading__title">Other objectives on {{ destination.name }}</h2>
      </div>

      <div class="objective-grid">
        <ObjectiveCard
          v-for="(item, index) in destination.experiences"
          :key="item.slug"
          :destination-slug="destination.slug"
          :experience="item"
          :image-src="getAssetUrl(item.image)"
          :index="index"
        />
      </div>
    </section>
  </div>

  <section v-else class="empty-state">
    <p class="section-heading__eyebrow">Not found</p>
    <h1 class="section-heading__title">That objective could not be loaded</h1>
    <router-link class="button button--primary" to="/maps">Return to the map browser</router-link>
  </section>
</template>

<script setup>
import { computed } from "vue";
import CalloutPanel from "@/components/CalloutPanel.vue";
import GuideHero from "@/components/GuideHero.vue";
import ImagePanel from "@/components/ImagePanel.vue";
import ObjectiveCard from "@/components/ObjectiveCard.vue";
import { getAssetUrl, getDestination, getExperience, getExperienceIndex } from "@/lib/guide.js";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  experienceSlug: {
    type: String,
    required: true,
  },
});

const destination = computed(() => getDestination(props.slug));
const experience = computed(() => getExperience(props.slug, props.experienceSlug));
const experienceIndex = computed(() => getExperienceIndex(props.slug, props.experienceSlug));

const nextExperience = computed(() => {
  if (!destination.value || experienceIndex.value < 0) {
    return null;
  }

  return destination.value.experiences[experienceIndex.value + 1] ?? null;
});

const descriptionText = computed(() => {
  if (!experience.value?.description) {
    return "Notes for this objective are still being filled in. Use the screenshot and the surrounding objectives as the main reference for now.";
  }

  return experience.value.description;
});

const objectivePosition = computed(() => {
  if (!destination.value || experienceIndex.value < 0) {
    return "outside the current sequence";
  }

  return `${experienceIndex.value + 1} of ${destination.value.experiences.length}`;
});

const heroStats = computed(() => {
  if (!destination.value || experienceIndex.value < 0) {
    return [];
  }

  return [
    { label: "Destination", value: destination.value.name },
    { label: "Position", value: objectivePosition.value },
    { label: "View", value: "Detailed tactic" },
  ];
});
</script>

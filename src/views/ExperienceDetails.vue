<template>
  <section>
    <h1>Tactics</h1>
    <h2>{{ experience.name }}</h2>
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>
<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experienceSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug == this.slug
      );
    },
    experience() {
      return this.destination.experiences.find(
        experience => experience.slug == this.experienceSlug
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 900px;
  height: auto;
  width: 100%;
  max-height: 800px;
}
.experience-details {
  background-color: rgb(30, 29, 53);
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>

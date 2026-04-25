<template>
  <div class="stack-lg">
    <GuideHero
      eyebrow="Community field manual"
      title="Learn the maps before the server goes live"
      description="The UTAPug guide is now organized as a fast, screenshot-first reference for objectives, defending positions, and the setup every player needs before joining a pug."
      :stats="heroStats"
    >
      <template #actions>
        <router-link class="button button--primary" to="/maps">Browse maps</router-link>
        <a class="button button--ghost" href="https://forums.utassault.net" target="_blank" rel="noreferrer">Open forums</a>
      </template>
      <template #media>
        <ImagePanel
          :src="setupImage"
          alt="League Assault setup showing FortStandards flags"
          caption="Turn on FortStandards if you are still learning the objective flow."
        />
      </template>
    </GuideHero>

    <section class="grid-two">
      <CalloutPanel eyebrow="Step 1" title="Create your forum and auth access">
        <p>
          Create a player account on
          <a href="https://forums.utassault.net" target="_blank" rel="noreferrer">forums.utassault.net</a>
          and then set your UTA Auth password on the
          <a href="https://forums.utassault.net/uta-auth-config.php" target="_blank" rel="noreferrer">auth configuration page</a>.
        </p>
        <p>
          That passphrase is what lets you join the pug servers and records your matches in the
          <a href="https://www.utassault.net/pugstats/?p=utapugrecent" target="_blank" rel="noreferrer">recent pug stats</a>.
        </p>
      </CalloutPanel>

      <ImagePanel
        :src="authImage"
        alt="UTA auth configuration page"
        caption="Save your auth settings before connecting to the pug server."
      />
    </section>

    <section class="grid-two">
      <ImagePanel
        :src="setupImage"
        alt="UTA League Assault settings"
        caption="Flags and objective markers make the guide easier to match to the live map."
      />

      <CalloutPanel eyebrow="Step 2" title="Configure League Assault before you queue">
        <p>
          If you are new to the rotation, enable FortStandards in League Assault 140 so the map objectives are easier to read at a glance.
        </p>
        <p>
          Once your setup is ready, use the map browser to jump straight into destination overviews and detailed objective screenshots.
        </p>
        <router-link class="button button--secondary" to="/maps">Open the map browser</router-link>
      </CalloutPanel>
    </section>
  </div>
</template>

<script setup>
import GuideHero from "@/components/GuideHero.vue";
import CalloutPanel from "@/components/CalloutPanel.vue";
import ImagePanel from "@/components/ImagePanel.vue";
import { destinations, getAssetUrl } from "@/lib/guide.js";

const heroStats = [
  { label: "Maps", value: destinations.length },
  {
    label: "Objectives",
    value: destinations.reduce((total, destination) => total + destination.experiences.length, 0),
  },
  { label: "Hosting", value: "GitHub Pages" },
];

const authImage = getAssetUrl("forums-auth.jpg");
const setupImage = getAssetUrl("UTALeagueAssault-flags.jpg");
</script>

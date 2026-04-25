<template>
  <figure class="image-panel" :class="{ 'image-panel--zoomable': zoomable }">
    <button
      v-if="zoomable"
      type="button"
      class="image-panel__trigger"
      :aria-label="`Open larger preview for ${alt}`"
      @click="openPreview"
    >
      <img class="image-panel__image" :src="src" :alt="alt" />
      <span class="image-panel__zoom-chip">Click to enlarge</span>
    </button>
    <img v-else class="image-panel__image" :src="src" :alt="alt" />
    <figcaption v-if="caption" class="image-panel__caption">{{ caption }}</figcaption>
  </figure>

  <teleport to="body">
    <div v-if="isPreviewOpen" class="image-lightbox" @click.self="closePreview">
      <button type="button" class="image-lightbox__close" aria-label="Close preview" @click="closePreview">
        Close
      </button>
      <figure class="image-lightbox__figure">
        <img class="image-lightbox__image" :src="src" :alt="alt" />
        <figcaption v-if="caption" class="image-lightbox__caption">{{ caption }}</figcaption>
      </figure>
    </div>
  </teleport>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from "vue";

const props = defineProps({
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
  zoomable: {
    type: Boolean,
    default: false,
  },
});

const isPreviewOpen = ref(false);

function handleKeydown(event) {
  if (event.key === "Escape") {
    isPreviewOpen.value = false;
  }
}

function openPreview() {
  isPreviewOpen.value = true;
}

function closePreview() {
  isPreviewOpen.value = false;
}

watch(isPreviewOpen, (value) => {
  document.body.style.overflow = value ? "hidden" : "";

  if (value) {
    window.addEventListener("keydown", handleKeydown);
    return;
  }

  window.removeEventListener("keydown", handleKeydown);
});

watch(
  () => props.src,
  () => {
    isPreviewOpen.value = false;
  }
);

onBeforeUnmount(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", handleKeydown);
});
</script>
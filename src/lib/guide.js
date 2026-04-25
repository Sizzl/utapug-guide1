import store from "@/store.js";

const assetModules = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const rootImageModules = import.meta.glob("../*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const assetLookup = Object.entries({ ...assetModules, ...rootImageModules }).reduce(
  (lookup, [path, url]) => {
    const fileName = path.split("/").pop();
    lookup[fileName] = url;
    return lookup;
  },
  {}
);

export const destinations = store.destinations;

export function getAssetUrl(fileName) {
  return assetLookup[fileName] ?? "";
}

export function getDestination(slug) {
  return destinations.find((destination) => destination.slug === slug) ?? null;
}

export function getExperience(slug, experienceSlug) {
  const destination = getDestination(slug);

  if (!destination) {
    return null;
  }

  return destination.experiences.find((experience) => experience.slug === experienceSlug) ?? null;
}

export function getExperienceIndex(slug, experienceSlug) {
  const destination = getDestination(slug);

  if (!destination) {
    return -1;
  }

  return destination.experiences.findIndex((experience) => experience.slug === experienceSlug);
}
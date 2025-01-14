// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-svgo", "nuxt-icon"],
  svgo: {
    autoImportPath: "./assets/svg/",
  },
});

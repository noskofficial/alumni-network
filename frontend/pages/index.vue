<script setup lang="ts">
definePageMeta({
    title: 'Home',
    description: 'This is the home page',
    layout: 'landing',

})
</script>

<template>
    <!-- <DarkModeButton /> -->
    <TheHero />
    <section class="bg-gray-50 dark:bg-gray-800">
        <StoryProgramSection />
    </section>
    <section>
        <AboutAlumni />
    </section>
</template>
<template>
  <div class="flex w-[95%] md:w-[90%] lg:w-[85%] xl:w-[65%] mx-auto">
    <!-- stories section -->
    <section class="w-[50%]">
      <h2 class="text-4xl mb-10">Stories</h2>
      <StoryCard />
      <StoryCard />
    </section>
    <!-- Programs & Events section -->
    <section class="w-[50%]">
      <h2 class="text-4xl mb-10">Programs & Events</h2>
      <div>
        <ProgramEventCard />
        <ProgramEventCard />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>
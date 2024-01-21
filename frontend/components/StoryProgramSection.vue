<template>
  <div class="flex flex-col md:flex-row w-[95%] md:w-[90%] lg:w-[85%] xl:w-[65%] mx-auto">
    <!-- stories section -->
    <section class="w-[100%] flex flex-col">
      <h2 class="text-4xl mb-5">Stories</h2>
      <div>
        <StoryCard />
        <StoryCard />
      </div>
      <div class="mt-10">
        <button class="border-blue-100 border-2 rounded-md text-xs p-2">View All Upcoming Events</button>
      </div>
    </section>
    <!-- Programs & Events section -->
    <section class="w-[100%] flex flex-col mt-5 md:mt-0">
      <h2 class="text-4xl mb-5">Programs & Events</h2>
      <div>
        <ProgramEventCard />
        <ProgramEventCard />
      </div>
      <div class="flex flex-col sm:flex-row justify-between gap-2 mt-5">
        <button class="border-blue-100 border-2 rounded-md text-xs w-[100%] p-2">View All Upcoming Events</button>
        <button class="border-blue-100 border-2 rounded-md text-xs w-[100%] p-2">View Featured Programs</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>
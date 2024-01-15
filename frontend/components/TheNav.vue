<template>
  <div class="bg-red-400">
    <div class="m-auto w-full sm:w-full lg:max-w-7xl flex justify-between items-center">
      <div class="flex items-center">
        <img src="~/assets/png/ncit.png" alt="NCIT Logo">
        <span> Alumni </span>
      </div>
      <div class="flex items-center">
        <ul class="gap-1 items-center hidden md:flex">
          <li>Community</li>
          <li>Contribute</li>
          <li>Programs & Events</li>
          <li>Stories</li>
          <li>College</li>
        </ul>
        <div>
          <UIcon name="i-heroicons-bars-3" class="w-8 h-8 md:hidden items-center" @click="toggleNav" />
          <UIcon name="i-heroicons-magnifying-glass" class="w-8 h-8 ml-4" />
        </div>
      </div>
    </div>
    <NavFullScreen :status="status" :toggleNav="toggleNav"/>
  </div>
</template>

<script setup lang="ts">
const status = ref(true)

const toggleNav = () => {
  status.value = !status.value
}
</script>
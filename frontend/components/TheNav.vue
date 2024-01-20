<template>
  <NavFullScreen :status="status" :toggleNav="toggleNav" />
  <div class="">
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
        <div class="flex">
          <UIcon name="i-heroicons-bars-3" class="w-8 h-8 md:hidden items-center" @click="toggleNav"
            :class="{ hidden: !status }" />
          <UIcon name="i-heroicons-magnifying-glass" class="w-8 h-8 ml-2" :class="{ hidden: !status }" />
          <DarkModeButton v-if="status" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const status = ref(true)

const toggleNav = () => {
  status.value = !status.value
}

watch(status, (newValue) => {
  if (!newValue) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = '';
  }
});
</script>
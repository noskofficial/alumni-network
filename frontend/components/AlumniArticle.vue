<template>
  <div :class="bgColor" class="text-black dark:text-white">
    <div class="flex flex-col md:flex-row w-[95%] md:w-[90%] lg:w-[85%] xl:w-[65%] mx-auto">
      <div class="flex justify-center flex-wrap md:flex-nowrap" :class="direction">
        <div class="flex flex-col">
          <h3 class="text-3xl mt-5">{{ title }}
            <h2 class="text-2xl mt-2">{{ titleEvent }}</h2>
          </h3>
          <p class="mt-4 w-[90%]">{{ description }}</p>
          <button class=" border-solid bg-red-600 w-1/2 rounded-md mt-16 p-3 text-sm mb-5">Full
            Story</button>
        </div>
        <div class="mx-0 md:mx-5 xl:mx-8"></div>
        <div class="w-[100%] bg-cover mb-1">
          <img :src="image" alt="" class="w-[600px] h-[90%] my-5">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { title, titleEvent, description, image, link } = defineProps({
  title: String,
  titleEvent: String,
  description: String,
  image: String,
  link: String,
  direction: String,
  bgColor: String,
})
</script>

<style></style>
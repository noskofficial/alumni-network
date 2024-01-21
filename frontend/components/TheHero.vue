<template>
  <div>
    <div class="relative">
      <div class="bg-[url('/assets/png/ncit_college.png')] blur-sm">
        <div class="flex flex-col justify-center items-center h-[496px]">
          <img src="~/assets/png/ncit.png" alt="NCIT Logo" class="w-40">
          <h1 class="text-3xl sm:text-5xl mt-10">NCIT Alumni Network</h1>
          <h2 class="text-2xl sm:text-4xl mt-6">All Alumni in One Place</h2>
        </div>
      </div>
      <div class="absolute top-0 left-[50%] -translate-x-[50%]">
        <div class="flex flex-col justify-center items-center h-[496px]">
          <img src="~/assets/png/ncit.png" alt="NCIT Logo" class="w-40">
          <h1 class="text-3xl sm:text-5xl mt-10">NCIT Alumni Network</h1>
          <h2 class="text-2xl sm:text-4xl mt-6">All Alumni in One Place</h2>
        </div>
      </div>
    </div>


    <AlumniArticle title="Alumni Nipesh Shrestha" title-event="on NCIT 25th Anniversary"
      description="Nipesh Talked about his life at NCIT, what he learnt what he did, how life was, how many pushups he did in college and how he managed Gym and study at the same time... "
      :image="ncitImage" bg-color="bg-[#045F89] dark:bg-[rgb(7,29,44)]" direction="flex-row-reverse" />
    <AlumniArticle title="Alumni Nipesh Shrestha" title-event="on NCIT 25th Anniversary"
      description="Nipesh Talked about his life at NCIT, what he learnt what he did, how life was, how many pushups he did in college and how he managed Gym and study at the same time... "
      :image="ncitImage" bg-color="bg-[rgb(7,29,44)] dark:bg-[#045F89]" />
  </div>
</template>

<script lang="ts" setup>
import ncitImage from '~/assets/png/ncit.png'

</script>

<style></style>
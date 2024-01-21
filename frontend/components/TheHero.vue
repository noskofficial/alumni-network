<template>
  <div>
    <div class="bg-purple-300 bg-[url('/assets/png/ncit_college.png')]">
      <div class="flex flex-col justify-center items-center h-[496px]">
        <img src="~/assets/png/ncit.png" alt="NCIT Logo" class="w-40">
        <h1 class="text-3xl sm:text-5xl text-white mt-10">NCIT Alumni Network</h1>
        <h2 class="text-2xl sm:text-4xl text-white mt-6">All Alumni in One Place</h2>
      </div>
    </div>

    <AlumniArticle title="Alumni Nipesh Shrestha" title-event="on NCIT 25th Anniversary"
      description="Nipesh Talked about his life at NCIT, what he learnt what he did, how life was, how many pushups he did in college and how he managed Gym and study at the same time... "
      :image="ncitImage" bg-color="bg-[#045F89]" direction="flex-row-reverse" />
    <AlumniArticle title="Alumni Nipesh Shrestha" title-event="on NCIT 25th Anniversary"
      description="Nipesh Talked about his life at NCIT, what he learnt what he did, how life was, how many pushups he did in college and how he managed Gym and study at the same time... "
      :image="ncitImage" bg-color="bg-[rgb(7,29,44)]" />
  </div>
</template>

<script lang="ts" setup>
import ncitImage from '~/assets/png/ncit.png'

</script>

<style></style>
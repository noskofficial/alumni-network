<template>
  <p> Hello World </p>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>
<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly >
    <UButton
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
      class="p-0 ml-2 mr-2"
    >
    <UIcon :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        class="w-8 h-8 md:hidden items-center" />
    </UButton>

    <template #fallback>
      <div class="w-10 h-10" />
    </template>
  </ClientOnly>
</template>

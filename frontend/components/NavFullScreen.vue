<template>
    <div class="relative w-full">
        <ul :class="{ '-left-full': status }"
            class="flex flex-col justify-start items-center text-3xl h-screen bg-blue-500 gap-y-10 absolute w-full sm:max-w-sm">
            <li>
                <UIcon name="i-heroicons-x-mark" class="w-10 h-10 absolute right-0 z-10" :class="{ hidden: status }" @click="toggleNav!"/>
            </li>
            <li class="mt-32">Community</li>
            <li>Contribute</li>
            <li>Programs & Events</li>
            <li>Stories</li>
            <li>College</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const { status, toggleNav } = defineProps({
    status: Boolean,
    toggleNav: Function
})
console.log("status", status)

</script>
<template>
    <div class="w-full">
        <ul :class="{ '-left-full': status }"
            class="flex flex-col justify-start items-center text-3xl h-screen gap-y-10 absolute w-full bg-white dark:bg-black overscroll-auto z-10">
            <li>
                <UIcon name="i-heroicons-x-mark" class="w-16 h-16 absolute right-0 z-10 p-4 m-2" :class="{ hidden: status }"
                    @click="toggleNav!" />
            </li>
            <li>
                <input type="text" name="search" id="search" placeholder="Search..." class="rounded-2xl p-2 mt-44 dark:bg-white border-black-500 border-solid border-2"/>
            </li>
            <li class="mt-10">Community</li>
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
</script>
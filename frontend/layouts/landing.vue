
import { StoryProgramSection } from '#build/components';
<template>
    <header>
        <BannerNav />
        <TheNav />
    </header>
    <main>
        <slot />
    </main>
    <footer class="bg-[#081E2C] text-gray-300">
        <TheFooter />
    </footer>
</template>

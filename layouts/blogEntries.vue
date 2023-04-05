<script lang="ts" setup>
import { useEntriesStore } from '~~/stores/EntriesStore';


useHead({
    titleTemplate: "%s - AlexisCode",
})

const { getEntries, getNews } = useEntriesStore();

getEntries();
getNews();


</script>

<template>
        <div>
            <Navbar />
            <main class="h-full">
                <slot></slot>
            </main>
            <Footer />
        </div>
</template>
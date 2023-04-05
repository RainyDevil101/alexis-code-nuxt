<script lang="ts" setup>

useHead({
    titleTemplate: "%s - AlexisCode",
})

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
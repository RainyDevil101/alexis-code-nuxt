<script lang="ts" setup>

definePageMeta({
    layout: 'blog-entries'
})

</script>

<template>
    <div class="flex justify-center items-center">
        <Head>
            <Title>Blog</Title>
        </Head>
        <div class="max-w-3xl mx-4 md:mx-auto">
            <Entries />
        </div>
    </div>
</template>
<script lang="ts" setup>

const route = useRoute();

const { error } = defineProps({
    error: Object
});

const path = route.path === error?.url ? "/" : route.path;

const handleError = () => {
    clearError({redirect: path});
}

</script>

<template>
    <div class="h-screen w-full bg-dark-121212 text-white flex content-center items-center">
        <Head>
            <Title>{{ error?.statusCode }} - AlexisCode</Title>
        </Head>
        <div class="m-auto text-center">
            <h1>Error Encontrado</h1>
            <h3>{{ error?.statusCode }} - {{ error?.statusMessage }}</h3>
            <button class="text-dark-121212 bg-cool-gray-200 rounded p-2 my-2 hover:bg-cool-gray-100" @click="handleError">Clean Errors</button>
        </div>
    </div>
</template>
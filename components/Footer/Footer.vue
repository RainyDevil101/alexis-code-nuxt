<script lang="ts" setup>

const currentDate: number = new Date().getUTCFullYear();

</script>


<template>
    <footer class="p-4 shadow flex items-center justify-center md:p-6 bg-dark-121212 border-none">
        <span class="text-sm sm:text-center text-cool-gray-200">© {{ currentDate }} <a href="https://www.instagram.com/mlnd.mischief/" target="_blank"
                class="hover:underline">Alexis Herrera Carreño</a>. All Rights Reserved.
        </span>
    </footer>
</template>
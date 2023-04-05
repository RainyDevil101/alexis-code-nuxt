<script lang="ts" setup>
import { useEntriesStore } from '~~/stores/EntriesStore';


const entriesStore = useEntriesStore();


</script>

<template>
    <div v-if="entriesStore.getIsLoading">
        <IsLoading />
    </div>
    <div v-else>

        

        <ul>
            <li class="bg-cool-gray-900 my-10 p-5 rounded text-cool-gray-100 max-h-96">Resultados: {{ entriesStore.totalResults }}</li>
            <li v-for=" { author, content, description, publishedAt, url, title, urlToImage } in entriesStore.getArticles" :key="url" class="bg-cool-gray-900 my-10 p-5 rounded text-cool-gray-100">
            <h2 class="text-center">{{title}}</h2>
            <br>
            <p class="my-2">
            <b>Descripción:</b> {{ description }}
            <br>
            <b>Publicado:</b> {{publishedAt}}
            <br>
            <b>Autor:</b> {{ author }}
            <br>
            <b>Fuente:</b> <a :href="url" target="_blank">{{url}}</a>
            </p>
            <img :src="urlToImage" :alt="description">
           </li>
           <!--<li v-for="entry in entriesStore.getFirebaseEntries" :key="entry" class="bg-cool-gray-900 my-10 p-5 rounded text-cool-gray-100 max-h-96">
            {{ entry }}
           </li>-->
        </ul>
    </div>
</template>

<style>

/* .illipsis {
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-wrap;
}*/

img {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
}

</style>
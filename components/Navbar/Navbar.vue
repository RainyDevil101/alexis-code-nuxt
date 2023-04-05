<script lang="ts">

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'Navbar',
  setup() {

    const open = ref(false);
    const links = ref([
      { name: "Inicio", link: "/" },
      { name: "Trabajos", link: "/" },
      { name: "Blog", link: "/entries" },
      { name: "Contacto", link: "/" },
    ]);

    const onToggle = () => {
      open.value = !open.value;
    }

    return {
      onToggle,
      open,
      links
    }
  },
})

</script>

<template>
  <div class="bg-dark-121212 text-cool-gray-200 py-3.5 px-6 shadow md:flex justify-between items-center">
    <div class="flex items-center cursor-pointer">
      <span class="text-cool-gray-100 hover:text-cool-gray-400 text-xl mr-2 flex items-center justify-center">
        <Icon name="bi:emoji-dizzy-fill" />
      </span>

      <h1 class="text-xl flex items-center">Alexis</h1>

    </div>

    <span class="absolute md:hidden right-right-6 top-top-1.5 cursor-pointer text-4xl">
      <Icon @click="onToggle" :name="open ? 'bi:x-square' : 'bi:filter-left'" />
    </span>

    <ul
      class="z-50 md:flex md:items-center md:px-0 px-6 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-top-14 duration-500 ease-in bg-dark-121212"
      :class="open ? 'left-left-0' : 'left-left-100'">
      <li class="md:mx-4 md:my-0 my-6" v-for="link in links">
        <nuxtLink :to=link.link class="text-center hover:text-cool-gray-100 flex justify-center">{{ link.name }}</nuxtLink>
      </li>

    </ul>

  </div>
</template>
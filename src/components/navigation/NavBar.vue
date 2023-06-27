<template>
  <div class="flex flex-col">
    <div
        class="bg-white flex drop-shadow-md h-10 sm:justify-between w-[100%] items-center px-6 sm:px-32 py-10 fixed top-0">
      <div class="flex justify-between w-full">
        <router-link to="/">Annecy Assistance</router-link>
        <button class="sm:hidden text-2xl" type="button" @click="toggleMenu()">≣</button>
      </div>

      <nav class="space-x-2 hidden sm:flex" :class="{ 'hidden': !displayMenu }">
        <div v-for="link in links" :key="link.path">
          <router-link class="hover:text-blue-500" :to="link.path">{{ link.name }}</router-link>
        </div>
      </nav>
    </div>

    <div v-if="displayMenu"
         class="sm:hidden bg-white fixed top-20 drop-shadow-md duration-500 transition-all transition-shadow	shadow-2xl w-full flex flex-col p-6 space-y-4"
         :class="{ 'hidden': !displayMenu }">
      <div v-for="link in links" :key="link.path">
        <router-link @click="toggleMenu()" class="hover:text-blue-500" :to="link.path">{{ link.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {useLinks} from '@/composables/UseLinks.ts';
import {ref} from "vue";

export default {
  name: 'NavBarComponent',
  setup() {
    const {links} = useLinks();
    const displayMenu = ref(false);
    const toggleMenu = () => {
      displayMenu.value = !displayMenu.value
    }

    return {
      links,
      toggleMenu,
      displayMenu
    };
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

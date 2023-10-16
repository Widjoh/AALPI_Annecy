<template>
  <div class="">
    <NavBar class="!w-full"/>
    <img class=" hidden absolute md:block md:h-40 md:w-40 w-full right-10" :src="require(`@/assets/images/help.jpg`)" alt="Logo aide a la personne" />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div class="mx-auto max-w-3xl">
        <router-view/>
      </div>
      <footer class=" fixed bottom-0 bg-white left-0 right-0">
        <div class="mx-auto max-w-7xl px-6 pt-2 pb-0  md:flex md:items-center md:justify-between lg:px-8">
          <div class="flex justify-center space-x-6 md:order-2">
            <a v-for="item in socialNavigation" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500" target="_blank">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true"/>
            </a>
          </div>
          <div class="mt-2 md:order-1 md:mt-0 flex flex-col sm:flex-row space-x-4 items-center">
            <p class="text-center text-xs leading-5 text-gray-500 font-classic">&copy; 2023 AALPI INFORMATIQUE </p>
            <img class="h-20" :src="require(`@/assets/svg/LogoAALPI_Couleur.svg`)" alt="AALPI LOGO" />

          </div>
        </div>
      </footer>
    </div>
    <notifications class="mt-2"
    />
  </div>
</template>

<script setup>
// @ is an alias to /src
import NavBar from '@/components/navigation/NavBar.vue'
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import {UseFooter} from "@/composables/UseFooter.ts";

const {socialNavigation} = UseFooter()
const routeName = ref(null)
const route = useRoute()

onMounted(() => {
  routeName.value = route.name
})

watch(route, (old, newValue) => {
  routeName.value = newValue.name;
})




</script>

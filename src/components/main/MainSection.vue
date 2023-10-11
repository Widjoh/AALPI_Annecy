<template>
  <div class="bg-white pb-24 sm:pb-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col space-y-16">
      <div v-for="(main, index) in mainSectionData" :key="main.title" class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-16 gap-y-8  lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div  class="lg:pr-4  lg:hidden">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <img class="absolute inset-0 h-full w-full object-cover" :src="require(`@/assets/images/${main.imagePath}.jpg`)" alt="" />
          </div>
        </div>
        <div v-if="index === 0 || index === 2" class="lg:pr-4 hidden lg:grid">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <img class="absolute inset-0 h-full w-full object-cover" :src="require(`@/assets/images/${main.imagePath}.jpg`)" alt="" />
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <h1 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl font-important">{{main.name}}</h1>
            <div class="max-w-xl">
              <p class="mt-6 font-classic">{{main.description}}</p>
            </div>
          </div>
        </div>
        <div v-if="index === 1 || index === 3" class="lg:pl-4 hidden lg:grid">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <img class="absolute inset-0 h-full w-full object-cover" :src="require(`@/assets/images/${main.imagePath}.jpg`)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useMainSection} from "@/composables/UseMainSection.ts";

const {mainSectionData} = useMainSection()



</script>
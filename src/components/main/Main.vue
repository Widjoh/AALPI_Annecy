<template>
  <div class="flex flex-col justify-center p-12 sm:items-center relative ">
    <div class="bg-[#E1E5EA] absolute left-0 right-0 top-0 h-[550px]"></div>
    <Advice class="mb-20" :subtitle-advice="mainData.subtitle_advice" :title-advice="mainData.title_advice"/>
    <Advice class="mt-6" :subtitle-advice="mainData.subtitle_advice" :title-advice="mainData.title_advice"/>

  </div>
</template>

<script>
import Advice from '@/components/main/Advice.vue'


export default {
  name: 'MainComponent',
  components: {Advice},
  props: {
    mainData: {type: Object, required: true,},
  },
  setup() {
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

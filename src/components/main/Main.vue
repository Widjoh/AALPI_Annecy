<template>
  <div class="flex flex-col bg-white justify-center  p-20 sm:items-center">
    <Advice :subtitle-advice="mainData.subtitle_advice" :title-advice="mainData.title_advice"/>
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

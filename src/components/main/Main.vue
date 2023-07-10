<template>
  <div v-if="mainData" class="flex flex-col justify-center p-12 sm:items-center relative space-y-16">
    <div v-for="data in mainData" :key="data.id">
      <MobileCard :title="data.title" :subtitle="data.subtitle"/>
    </div>
  </div>
</template>

<script>
import MobileCard from '@/components/card/MobileCard.vue'


export default {
  name: 'MainComponent',
  components: {MobileCard},
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

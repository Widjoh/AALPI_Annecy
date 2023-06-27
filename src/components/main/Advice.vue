<template>
  <div class="flex flex-col  w-full  justify-center sm:items-center">
    <div class="flex flex-col items-center ">
      <MobileCard/>

    </div>
  </div>
</template>

<script>
import MobileCard from '@/components/card/MobileCard.vue'

export default {
  name: 'HeaderComponent',
  components: {
    MobileCard
  },
  props: {
    titleAdvice: {
      type: String,
      required: true,
    },
    subtitleAdvice: {
      type: String,
      required: true,
    },
    backGroundColors: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

<template>
  <div class="flex flex-col bg-white justify-center  p-20 sm:items-center">
    <div class="flex flex-col items-center space-y-6">
      <span class="text-6xl	">{{ title }}</span>
      <span>{{ subtitle }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    backGroundColors: {
      type: String,
      required: false,
    }
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

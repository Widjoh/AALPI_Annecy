<template>
  <div class="">
    <img
        class="h-[200px] w-full object-cover rounded-t-lg drop-shadow-lg z-0"
        :src="require(`@/assets/images/test_img.jpg`)"
        :alt="`test image`"
    />
    <div class="p-4 flex flex-col space-y-4 rounded-b-lg bg-[#FEECE9] drop-shadow-lg ">
      <span class="text-3xl	mx-auto">{{title}}</span>
      <span>{{subtitle}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MobileCardComponent',
  props: {
    title: {
      type: String,
      required: false,
      default: "Conseil"
    },
    subtitle: {
      type: String,
      required: false,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat magna at nisi interdum ornare. Maecenas mattis ultricies ante eget eleifend. Vestibulum faucibus neque sed lacinia ullamcorper."

    },
    backGroundColors: {
      type: String,
      required: false,
      default: 'F9F5F6'
    }
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

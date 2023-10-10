<template>
  <div class="home">
    <Header :title="headerData.title" :subtitle="headerData.subtitle"
            :back-ground-colors="headerData.background_colors"/>
    <MainSection/>

  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import {UseHeader} from "@/composables/UseHeader.ts";
import MainSection from "@/components/main/MainSection.vue";

export default {
  name: 'HomeView',
  components: {
    MainSection,
    Header,

  },
  setup() {

    const {headerData} = UseHeader();

    return {
      headerData
    };
  },

}
</script>

<template>
  <div class="home">
      <Header :title="headerData.title" :subtitle="headerData.subtitle"
              :back-ground-colors="headerData.background_colors"/>
<!--      <Main :main-data="homeData.main"/>-->

  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import {UseHeader} from "@/composables/UseHeader.ts";

export default {
  name: 'HomeView',
  components: {
    Header,

  },
  setup() {

    const { headerData} = UseHeader();

    return {
      headerData
    };
  },

}
</script>

<template>
  <div class="home">
    <div v-if="homeData">
      <Header :title="homeData.header?.title" :subtitle="homeData.header?.subtitle"
              :back-ground-colors="homeData.background_colors"/>
    </div>
    <div v-if="homeData">
      <Main :main-data="homeData.main"/>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/header/Header.vue'
import Main from '@/components/main/Main.vue'
import {useDataFetcher} from "@/composables/UseDataFetcher.ts";
import {onMounted} from "vue";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Header,
    Main
  },
  setup() {

    const {homeData, loading, error, fetchHomeData} = useDataFetcher();
    onMounted(() => {
      fetchHomeData();
    });

    return {
      homeData,
      loading,
      error,

    };
  },

}
</script>

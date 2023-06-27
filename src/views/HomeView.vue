<template>
  <div class="home">
    <div v-if="headerData">
      <Header :title="headerData.title" :subtitle="headerData.subtitle"
              :back-ground-colors="headerData.background_colors"/>
    </div>
    <div v-if="mainData">
      <Main :main-data="mainData"/>
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

    const {headerData, loading, error, fetchHeaderData, fetchMainData, mainData} = useDataFetcher();
    console.log(mainData)
    onMounted(() => {
      fetchHeaderData();
      fetchMainData();
    });

    return {
      headerData,
      mainData,
      loading,
      error,

    };
  },

}
</script>

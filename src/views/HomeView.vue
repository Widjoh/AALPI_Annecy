<template>
  <div class="home">
    <div v-if="headerData">
      <Header :title="headerData.title" :subtitle="headerData.subtitle"
              :back-ground-colors="headerData.background_colors"/>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/header/Header.vue'
import {useDataFetcher} from "@/composables/UseDataFetcher.ts";
import {onMounted} from "vue";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Header
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
      loading,
      error,

    };
  },

}
</script>

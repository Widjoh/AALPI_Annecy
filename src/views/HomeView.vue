<template>
  <div class="home">
    <div v-if="homeData">
      <Header :title="homeData.header?.title" :subtitle="homeData.header?.subtitle"
              :back-ground-colors="homeData.background_colors"/>
    </div>
    <div v-if="homeData">
      <Main :main-data="homeData.main"/>
    </div>

  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Main from '@/components/main/Main.vue'
import {useDataFetcher} from "@/composables/UseDataFetcher.ts";
import {onMounted} from "vue";

export default {
  name: 'HomeView',
  components: {
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

<template>
  <div>
    <div v-if="routeName !== 'Login'">
      <NavBar class="mb-12"></NavBar>
      <main class="text-slate-100 container mx-auto p-4 h-[100%]">
      </main>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navigation/NavBar.vue'
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  setup() {
    const routeName = ref(null)
    const route = useRoute()

    onMounted(() => {
      routeName.value = route.name
    })

    watch(route, (old, newValue) => {
      routeName.value = newValue.name;
    })


    return {
      routeName
    }

  }
}
</script>

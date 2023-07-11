<template>
  <div>
    <div v-if="routeName !== 'Login'">
      <notifications class="mt-2"
      />
      <NavBar class="mb-12"></NavBar>
      <div v-if="displayNavAdmin" class="text-slate-100 bg-slate-700 p-6 relative flex flex-col justify-between h-full space-y-4 mt-20 sm:items-center md:w-full">
        <span>Bonjour JO</span>
        <nav class="space-x-2 flex" >
          <div v-for="link in adminLinks" :key="link.path">
            <router-link class="bg-transparent w-full hover:bg-blue-500 text-slate-100 font-semibold hover:text-white p-2 border border-slate-500 hover:border-transparent rounded" :to="link.path">{{ link.name }}</router-link>
          </div>
        </nav>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navigation/NavBar.vue'
import {useRoute} from "vue-router";
import {computed, onMounted, ref, watch} from "vue";
import {useLinks} from "@/composables/UseLinks.ts";

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  setup() {
    const routeName = ref(null)
    const route = useRoute()
    const {adminLinks} = useLinks();

    onMounted(() => {
      routeName.value = route.name
    })

    watch(route, (old, newValue) => {
      routeName.value = newValue.name;
    })

    const routeWithNavAdmin = ['admin', 'adminImages', 'admin-tarifs', 'admin-contact']

    const displayNavAdmin = computed(() => {
      return routeWithNavAdmin.includes(useRoute().name)
    })

    return {
      routeName,
      adminLinks,
      displayNavAdmin
    }

  }
}
</script>

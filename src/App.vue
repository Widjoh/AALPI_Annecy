<template>
  <div>
    <NavBar class="!w-full"/>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div class="mx-auto max-w-3xl">
        <router-view/>
      </div>
    </div>
    <notifications class="mt-2"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navigation/NavBar.vue'
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
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


    return {
      routeName,
      adminLinks,
    }

  }
}
</script>

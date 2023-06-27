<template>
  <div class="bg-slate-800">
    <NavBar class="mb-12"></NavBar>
    <main class="text-slate-100 container mx-auto p-4 h-[100%]">
    </main>
    <router-view/>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navigation/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>

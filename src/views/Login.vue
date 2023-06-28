<template>
  <div class="flex flex-col sm:justify-center sm:items-center p-6">
    <Vue3Lottie class="mb-16" :animationData="LottieLogin" :height="200" :width="200"/>
    <div class="bg-slate-200 p-6 rounded-md space-y-4 w-full md:w-96">
      <div class="flex flex-col">
        <label for="loginName">Utilisateur:</label>
        <input class="input-login" type="text" id="loginName" v-model="loginName">
      </div>
      <div class="flex flex-col">
        <label for="loginPassword">Mot de passe:</label>
        <input class="input-login" type="password" id="loginPassword" v-model="loginPassword">
      </div>
      <div class="flex justify-end">
        <button
            class="bg-transparent hover:bg-blue-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
            type="submit">Se connecter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {Vue3Lottie} from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import LottieLogin from "../../src/assets/lottie/lottielogin.json"
import {ref} from "vue";

export default {
  name: 'LoginView',
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      LottieLogin,
    }
  },
  setup() {
    const loginName = ref('')
    const loginPassword = ref('')

    return {
      loginName,
      loginPassword
    }
  },
}
</script>

<style>
.input-login {
  @apply pl-2 border-transparent focus:border-transparent focus:ring-0 focus:outline-none
}
</style>

<template>
  <div class="flex flex-col sm:justify-center sm:items-center p-6">
    <Vue3Lottie class="mb-16" :animationData="LottieLogin" :height="200" :width="200"/>
    <div class="bg-slate-200 p-6 rounded-md space-y-4 w-full md:w-96">
      <div class="flex flex-col">
        <label for="loginName">Utilisateur:</label>
        <input class="input-login" type="text" id="loginName" name="email" v-model="loginName">
      </div>
      <div class="flex flex-col">
        <label for="loginPassword">Mot de passe:</label>
        <input class="input-login" type="password" id="loginPassword" name="password" v-model="loginPassword">
      </div>
      <div class="flex justify-end">
        <button
            class="bg-transparent hover:bg-blue-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
            type="submit" @click="login">Se connecter
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
import axios from "axios";
import router from "@/router";

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
    const errors = ref([])
    const loginName = ref('')
    const loginPassword = ref('')
    const authApi = process.env.VUE_APP_ROOT_API + "auth/login"


    const login = async () => {
      errors.value = [];
      try {
        await axios.get(process.env.VUE_APP_ROOT_API + 'sanctum/csrf-cookie');
        const data = {
          email: 'tyree24@example.org',
          password: 'password123!',
        };

        axios.post(authApi, data)
            .then((response) => {
              const token = response.data.token;
              localStorage.setItem('token', token);
              router.push({name: 'admin'});
            })
            .catch((error) => {
              console.log(error);
              errors.value = error.response.data.errors;
            });
      } catch (error) {
        console.log(error);
      }
    };


    return {
      loginName,
      loginPassword, login
    }
  },
}
</script>

<style>
.input-login {
  @apply pl-2 border-transparent focus:border-transparent focus:ring-0 focus:outline-none
}
</style>

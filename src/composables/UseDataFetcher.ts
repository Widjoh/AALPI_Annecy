import {ref} from 'vue';
import axios from "axios";

const homeData = ref(null);
const adviceMedia = ref(null);
const loading = ref(false);
const error = ref(null);

const homeApi = process.env.VUE_APP_ROOT_API + "get/home/data"
const AdviceMediaApi = process.env.VUE_APP_ROOT_API + "media/get/images/advice"

export function useDataFetcher() {

    //const paramsHeaders = { "Content-type": "application/json" }
    async function fetchHomeData() {
        if (homeData.value) {
            return homeData.value;
        } else {
            axios.get(homeApi)
                .then((response) => {
                    homeData.value = response.data; // 👈 get just results
                }).catch(function (error) {
                console.log(error.toJSON());
            });
        }

    }

    async function fetchAdviceMedia() {
        if (adviceMedia.value) {
            return adviceMedia.value;
        } else {
            axios.get(AdviceMediaApi, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                    adviceMedia.value = response.data; // 👈 get just results
                }).catch(function (error) {
                console.log("ERROR")
                console.log(error.toJSON());
            });
        }

    }


    return {homeData, loading, error, fetchHomeData, fetchAdviceMedia, adviceMedia};
}

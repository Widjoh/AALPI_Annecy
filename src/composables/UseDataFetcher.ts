import {ref} from 'vue';
import axios from "axios";

const homeData = ref(null);
const loading = ref(false);
const error = ref(null);

const homeApi = process.env.VUE_APP_ROOT_API + "get/home/data"

export function useDataFetcher() {

    //const paramsHeaders = { "Content-type": "application/json" }
    async function fetchHomeData() {
        if (homeData.value) {
            return homeData.value;
        } else {
            axios.get(homeApi)
                .then((response) => {
                    homeData.value = response.data; // 👈 get just results
                });
        }

    }


    return {homeData, loading, error, fetchHomeData,};
}

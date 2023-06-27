import { ref } from 'vue';

const homeData = ref(null);
const loading = ref(false);
const error = ref(null);

const homeApi = process.env.VUE_APP_ROOT_API + "get/home/data"

export function useDataFetcher() {
    const paramsHeaders = { "Content-type": "application/json" }
    async function fetchHomeData() {
        if (homeData.value) {
            return homeData.value;
        }
        loading.value = true;
        try {
            const response = await fetch(homeApi, {
                headers: paramsHeaders,
            });
            homeData.value = await response.json();
            return homeData.value;
        } catch (error) {
            error.value = error.message;
        } finally {
            loading.value = false;
        }
    }



    return { homeData, loading, error, fetchHomeData,  };
}

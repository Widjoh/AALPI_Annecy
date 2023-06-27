import { ref } from 'vue';

const headerData = ref(null);
const loading = ref(false);
const error = ref(null);
const mainData = ref(null);
const mainLoading = ref(false);
const headerApi = process.env.VUE_APP_ROOT_API + "get/header"
const mainApi = process.env.VUE_APP_ROOT_API + "get/main"

export function useDataFetcher() {
    const paramsHeaders = { "Content-type": "application/json" }
    async function fetchHeaderData() {
        if (headerData.value) {
            return headerData.value;
        }
        loading.value = true;
        try {
            const response = await fetch(headerApi, {
                headers: paramsHeaders,
            });
            headerData.value = await response.json();
            return headerData.value;
        } catch (error) {
            error.value = error.message;
        } finally {
            loading.value = false;
        }
    }

    async function fetchMainData() {
        if (mainData.value) {
            return mainData.value;
        }
        mainLoading.value = true;
        try {
            const response = await fetch(mainApi, {
                headers: paramsHeaders,
            });
            mainData.value = await response.json();
            return mainData.value;
        } catch (error) {
            error.value = error.message;
        } finally {
            mainLoading.value = false;
        }
    }

    return { headerData, mainData, loading, mainLoading, error, fetchHeaderData, fetchMainData };
}

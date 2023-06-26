import {ref} from 'vue';

interface UseDataFetcherParams {
    endPoint: string;
}

export function useDataFetcher({endPoint}: UseDataFetcherParams) {
    const data = ref(null);
    const loading = ref(false);
    const error = ref(null);

    async function fetchData() {
        loading.value = true;
        try {
            // Perform the API request to fetch data
            const response = await fetch(endPoint);
            const responseData = await response.json();
            data.value = responseData;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    return {data, loading, error, fetchData};
}

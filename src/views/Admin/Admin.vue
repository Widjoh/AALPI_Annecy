<!--<template>-->
<!--  <div>-->
<!--    <main v-if="homeData" class="h-[100%] flex justify-center">-->
<!--      <div class="flex flex-col  space-y-4 p-2 sm:w-[50%]">-->
<!--        <draggable-->
<!--            v-if="homeData"-->
<!--            class="list-group"-->
<!--            tag="transition-group"-->
<!--            :component-data="{-->
<!--          tag: 'ul',-->
<!--          type: 'transition-group',-->
<!--          name: !drag ? 'flip-list' : null-->
<!--        }"-->
<!--            v-model="homeData.main"-->
<!--            v-bind="dragOptions"-->
<!--            @change="onOrderChange"-->
<!--            :item-key="homeData.main.id"-->
<!--        >-->
<!--          <template #item="{ element }">-->
<!--            <li class="list-group-item bg-slate-300 flex mt-2 p-6 justify-center mx-auto rounded">-->
<!--              {{ element.title }}-->
<!--            </li>-->
<!--          </template>-->
<!--        </draggable>-->

<!--        <button type="submit" @click="updateItemOrder"-->
<!--                class="bg-transparent hover:bg-blue-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"-->
<!--        >Modifier l'ordre des cartes-->
<!--        </button>-->
<!--      </div>-->
<!--    </main>-->

<!--  </div>-->
<!--</template>-->


<!--<script>-->
<!--import {computed, onMounted, ref} from 'vue'-->
<!--import {UseHeader} from "@/composables/UseHeader.ts";-->
<!--import draggable from 'vuedraggable'-->
<!--import axios from "axios";-->
<!--import {notify} from "@kyvg/vue3-notification";-->


<!--export default {-->
<!--  name: 'AdminView',-->
<!--  display: "Transitions",-->
<!--  order: 7,-->
<!--  components: {draggable},-->
<!--  data() {-->
<!--    return {-->
<!--      drag: false,-->
<!--    }-->
<!--  },-->
<!--  setup() {-->

<!--    const data = ref([])-->
<!--    const reOrdered = ref(null)-->
<!--    const dragOptions = computed(() => {-->
<!--          return {-->
<!--            animation: 200,-->
<!--            group: "description",-->
<!--            disabled: false,-->
<!--          }-->
<!--        }-->
<!--    )-->

<!--    const onOrderChange = () => {-->
<!--      reOrdered.value = homeData.value.main.forEach((item, index) => (item.order = index))-->
<!--    }-->
<!--    const {homeData, loading, error, fetchHomeData} = UseHeader();-->
<!--    onMounted(() => {-->
<!--      fetchHomeData();-->
<!--    });-->
<!--    const updateItemApi = process.env.VUE_APP_ROOT_API + "main/update/order/list"-->

<!--    const updateItemOrder = async () => {-->
<!--      try {-->
<!--        // Send the updated order to your Laravel API using an HTTP request-->
<!--        await axios.put(updateItemApi, {order: homeData.value.main}, {-->
<!--          headers: {-->
<!--            Authorization: `Bearer ${localStorage.getItem('token')}`-->
<!--          }-->
<!--        });-->

<!--        //await fetchHomeData();-->

<!--        notify({-->
<!--          type: "success",-->
<!--          text: "L'ordre a été mis à jour",-->
<!--        });-->
<!--        console.log('Item order updated successfully');-->
<!--      } catch (error) {-->
<!--        notify({-->
<!--          type: "error",-->
<!--          text: error.request.response.toString(),-->
<!--        });-->
<!--        console.error('Failed to update item order', error);-->
<!--      }-->
<!--    }-->


<!--    return {-->
<!--      dragOptions,-->
<!--      parent,-->
<!--      homeData,-->
<!--      loading,-->
<!--      error,-->
<!--      data,-->
<!--      onOrderChange,-->
<!--      updateItemOrder,-->

<!--    };-->
<!--  },-->

<!--}-->

<!--</script>-->
<!--<style>-->
<!--.button {-->
<!--  margin-top: 35px;-->
<!--}-->

<!--.flip-list-move {-->
<!--  transition: transform 0.5s;-->
<!--}-->

<!--.no-move {-->
<!--  transition: transform 0s;-->
<!--}-->

<!--.ghost {-->
<!--  opacity: 0.5;-->
<!--  background: #c8ebfb;-->
<!--}-->

<!--.list-group {-->
<!--  min-height: 20px;-->
<!--}-->

<!--.list-group-item {-->
<!--  cursor: move;-->
<!--}-->

<!--.list-group-item i {-->
<!--  cursor: pointer;-->
<!--}-->
<!--</style>-->

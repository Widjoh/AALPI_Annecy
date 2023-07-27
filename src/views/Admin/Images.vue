<template>
  <div class="flex justify-center pb-10">
    <div
        class="flex flex-col md:flex-row justify-center w-full items-center md:items-baseline md:space-x-16 md:ml-[190px] lg:ml-0">
      <div
          class="md:fixed md:left-0 bg-slate-600 w-full md:w-[25%] lg:sm:w-[15%] md:h-full p-6 flex sm:flex-col space-y-4 flex flex-wrap ">
        <button @click="showDiv = 'uploader'"
                class="bg-transparent w-full hover:bg-blue-500 text-slate-100 font-semibold hover:text-white p-2 border border-slate-500 hover:border-transparent rounded">
          Images
        </button>
        <button @click="showDiv = 'conseil'"
                class="bg-transparent w-full hover:bg-blue-500 text-slate-100 font-semibold hover:text-white p-2 border border-slate-500 hover:border-transparent rounded">
          Conseil
        </button>
        <button @click="showDiv = 'Maintenance'"
                class="bg-transparent w-full hover:bg-blue-500 text-slate-100 font-semibold hover:text-white p-2 border border-slate-500 hover:border-transparent rounded">
          Maintenance
        </button>
        <button @click="showDiv = 'Support'"
                class="bg-transparent w-full hover:bg-blue-500 text-slate-100 font-semibold hover:text-white p-2 border border-slate-500 hover:border-transparent rounded">
          Support
        </button>
        <button @click="showDiv = 'Installation'"
                class="bg-transparent w-full hover:bg-blue-500 text-slate-100 font-semibold hover:text-white p-2 border border-slate-500 hover:border-transparent rounded">
          Installation
        </button>
      </div>
      <div v-if="showDiv === 'uploader'" class="upload bg-slate-300 rounded p-6 w-[300px] sm:w-[400px] mt-6 ">
        <div v-if="files.length" class="grid grid-cols-3">
          <div v-for="file in files" :key="file.id">
            <div>
              <img v-if="file.thumb" :src="file.thumb" alt="file.name" class="object-cover h-48 w-96"/>
            </div>
          </div>
        </div>
        <ul v-else>
          <td colspan="7">
            <div class="text-center p-5">
              <h4>Déposez des fichiers pour les télécharger<br/>ou</h4>
              <label for="file" class="btn btn-lg btn-primary cursor-pointer">sélectionner des fichiers</label><br/>
              <span>jpg / jpeg / png</span>

            </div>
          </td>
        </ul>
        <div class="flex justify-center space-y-4 ">
          <file-upload
              class="btn btn-primary"
              :post-action="api"
              :multiple="true"
              :data="category"
              :headers="{Authorization: token}"
              :extensions="extensions"
              :accept="accept"
              v-model="files"
              @input-filter="inputFilter"
              @input-file="inputFile"
              ref="upload">
          </file-upload>
          <div class="flex flex-col space-y-4">
            <div>
              <label for="category" class="text-slate-700 font-semibold">Sélectionne la catégorie</label>
              <select v-model="selectedCategory" id="category" required
                      class="block w-full mt-1 p-2 rounded-md border border-slate-500 focus:outline-none focus:border-blue-500">
                <option value="advice">Conseil</option>
                <option value="maintenance">Maintenance</option>
                <option value="support">Support</option>
                <option value="install">Installation</option>
                <!-- Add more options as needed -->
              </select>
            </div>

            <button type="button"
                    class="bg-transparent hover:bg-blue-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
                    :class=" selectedCategory === ''  ? 'pointer-events-none' : 'cursor-pointer'  "
                    v-if="!$refs.upload || !$refs.upload.active"
                    @click.prevent="$refs.upload.active = true">
              Upload
            </button>
          </div>
        </div>
      </div>
      <div v-if="showDiv === 'conseil'" class="support">
        <span>Conseil bitch</span>
      </div>
      <div v-if="showDiv === 'Maintenance'" class="support">
        <span>Maintenance bitch</span>
      </div>
      <div v-if="showDiv === 'Support'" class="support">
        <span>Support bitch</span>
      </div>
      <div v-if="showDiv === 'Installation'" class="support">
        <span>Installation bitch</span>
      </div>
    </div>
  </div>
</template>
<script>
import FileUpload from 'vue-upload-component'
import {notify} from "@kyvg/vue3-notification";
import {useDataFetcher} from "@/composables/UseDataFetcher.ts";
import {onMounted, ref, watch} from "vue";

export default {
  name: 'AdminImages',
  components: {FileUpload},
  data() {
    return {
      files: [],
      accept: 'image/png,image/jpeg,image/jpeg',
      extensions: 'jpg,jpeg,png',
      api: process.env.VUE_APP_ROOT_API + 'media/add/images',
      showDiv: 'uploader',
    }
  },
  setup() {
    const {adviceMedia, loading, error, fetchAdviceMedia} = useDataFetcher();
    const selectedCategory = ref('advice')
    const category = ref(null)
    onMounted(() => {
      category.value = {'categorie': "advice"}
      fetchAdviceMedia();
      console.log(adviceMedia)
    });


    watch(selectedCategory, (newValue, oldValue) => {
          if (newValue !== oldValue) {
            selectedCategory.value = newValue
            category.value = {'categorie': selectedCategory.value}
          }
        }
    );

    return {
      adviceMedia,
      loading,
      error,
      selectedCategory,
      category
    };
  },

  computed: {
    token() {
      return `Bearer ${localStorage.getItem('token')}`
    },

  },
  methods: {

    inputFilter(newFile, oldFile) {

      if (newFile && newFile.error === "" && newFile.file && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        newFile.blob = ''
        let URL = (window.URL || window.webkitURL)
        if (URL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // Thumbnails
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
      }

      // image size
      if (newFile && newFile.error === '' && newFile.type.substr(0, 6) === "image/" && newFile.blob && (!oldFile || newFile.blob !== oldFile.blob)) {
        newFile.error = 'image parsing'
        let img = new Image();
        img.onload = () => {
          this.$refs.upload.update(newFile, {error: '', height: img.height, width: img.width})
        }
        // img.οnerrοr = (e) => {
        //   this.$refs.upload.update(newFile, { error: 'parsing image size'})
        // }
        img.src = newFile.blob
      }
    },

    // add, update, remove File Event
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update

        if (newFile.active && !oldFile.active) {
          // beforeSend

          // min size
          if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize && newFile.type !== "text/directory") {
            this.$refs.upload.update(newFile, {error: 'size'})
          }
        }

        if (newFile.progress !== oldFile.progress) {
          // progress
        }

        if (newFile.error && !oldFile.error) {
          console.log(newFile)
          this.files = [];
          //this.selectedCategory = "";

          notify({
            type: "error",
            text: "Une erreur est survenue, réessaye enculé.",
          });
        }

        if (newFile.success && !oldFile.success) {
          // success
          notify({
            type: "success",
            text: "Success",
          });
          this.files = [];
        }
      }


      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
        }
      }


      // Automatically activate upload
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true
        }
      }
    },
  },


}

</script>
<style>

</style>

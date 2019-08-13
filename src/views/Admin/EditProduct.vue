<template>
  <div class="col-md-10 col-sm-12 sider-wrapper">
    <div class="title-bar row">
      <span class="font-25">Sider</span>
      <avatar></avatar>
    </div>
    <div class="row">
      <div v-if="showSuccess" class="green">{{ successMessage }}</div>
      <template v-if="showError">
        <div class="red" v-for="(error, index) in errorMessage" :key="index">{{ error }}</div>
      </template>
      <div class="col-md-10 col-sm-12">
        <div class="edit-wrapper">
          <div class="form-group">
            <input
              type="text"
              class="form-control input-lg"
              :value="ProductData.name"
              ref="productname"
            >
          </div>
          <button class="accordion active">Last opp builder(Upload images)</button>
          <div class="panel col-md-12 dropzone-div">
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
            <div class="previous-images-div">
              <template v-for="image in ProductData.images">
                <img v-bind:src="image.url" style="width:100px;padding: 10px;">
                <span class="remove-btn" @click="removeImage(image.url)">X</span>
              </template>
            </div>
          </div>
          <button class="accordion active">{{ ProductData.adata.mileage ? 'Reg.nr' : 'VIN' }}</button>
          <div class="panel col-md-12">
            <div class="form-group">
              <input type="text" class="form-control input-lg" :value="ProductData.vin" ref="vin">
            </div>
          </div>
          <button class="accordion active">Last opp video(Upload video)</button>
          <div class="panel col-md-12">
            <div class="form-group">
              <p class="input-label">
                <label for>Link to Video</label>
              </p>
              <input
                type="text"
                class="form-control input-lg"
                :value="ProductData.video"
                ref="video"
                placeholder="https://www.youtube.com/embed/4KVOuQDIfmw"
              >
            </div>
          </div>
          <button class="accordion active">Søkemotoroptimalisering</button>
          <div class="panel col-md-12">
            <div class="form-group">
              <p class="input-label">
                <label for>Meta tittel</label>
                <span>Maximum 60 characters</span>
              </p>
              <input
                type="text"
                class="form-control input-lg"
                :value="ProductData.meta_title"
                ref="meta_title"
              >
            </div>
            <div class="form-group">
              <p class="input-label">
                <label for>Metabeskrivelse</label>
                <span>Maximum 300 characters</span>
              </p>
              <input
                type="text"
                class="form-control input-lg"
                :value="ProductData.meta_description"
                ref="meta_description"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-sm-12 update-btn">
        <button class="btn btn-lg" @click="submit_form">OPPDATER</button>
      </div>
    </div>
  </div>
</template>


<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Avatar from "../../components/Avatar.vue";
import axios from "axios";

import { mapGetters } from "vuex";
export default {
  computed: {
    ProductData() {
      return this.$store.state.product;
    }
  },
  components: {
    vueDropzone: vue2Dropzone,
    Avatar
  },
  data() {
    return {
      successMessage: "",
      showSuccess: false,
      errorMessage: "",
      showError: false,
      dropzoneOptions: {
        url: "https://localhost:8000/upload_image",
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        maxFilesize: 0.5,
        addRemoveLinks: true,
        uploadMultiple: true,
        dictCancelUploadConfirmation: "Remove this image file?",
        headers: { "Access-Control-Allow-Origin": "*" },
        autoProcessQueue: false,
        dictDefaultMessage: "Drag or click to upload image"
      }
    };
  },
  title() {
    return "iBobil AS - Nye bobiler i Nord-Norge og brukte bobiler i til hele Norge";
  },
  description() {
    return "Bobilen din finner du hos iBobil, vi leverer nye bobiler fra Challenger, Eura Mobil, Concordre samt brukte fra alle produsenter.";
  },
  asyncData({
    store,
    route: {
      params: { id }
    }
  }) {
    return store.dispatch("FETCH_PRODUCT_ITEM", { id });
  },
  methods: {
    submit_form() {
      var self = this;
      this.successMessage = "";
      this.showSuccess = false;
      this.errorMessage = "";
      this.showError = false;

      var token = localStorage.getItem("token");
      this.$refs.myVueDropzone.setOption(
        "url",
        this.SERVER_URL +
          "update_images/" +
          this.$store.state.product.adId +
          "?token=" +
          token
      );
      this.$refs.myVueDropzone.processQueue();
      var product = this.$store.state.product;
      axios
        .post(
          this.SERVER_URL +
            "update_product/" +
            product.adId +
            "?token=" +
            token,
          {
            id: product.adId,
            meta_title: this.$refs.meta_title.value,
            meta_description: this.$refs.meta_description.value,
            video: this.$refs.video.value,
            vin: this.$refs.vin.value,
            name: this.$refs.productname.value
          }
        )
        .then(response => {
          this.showSuccess = true;
          this.successMessage = response.data.message;
        })
        .catch(function(error) {
          if (error.response.data.code == 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user-info");
            self.$router.push({ name: "login" });
          }
          self.errorMessage = error.response.data.message;
          self.showError = true;
        });
    },
    removeImage(url) {
      var self = this;
      self.successMessage = "";
      self.showSuccess = false;
      self.errorMessage = "";
      self.showError = false;

      axios
        .post(
          rooturl +
            "remove_image/" +
            this.$store.state.product.id +
            "?token=" +
            token,
          {
            url: url
          }
        )
        .then(response => {
          this.$store.commit("SET_PRODUCT_ITEM", response.data.product);
          this.showSuccess = true;
          this.successMessage = response.data.message;
        })
        .catch(function(error) {
          if (error.response.data.code == 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user-info");
            this.$router.push({ name: "login" });
          }
          this.invalidError = error.response.data.message;
          this.showInvalidError = true;
        });
    }
  }
};
</script>

<style scoped>
.file-label {
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #d8d8d8;
}
.hide {
  display: none;
}
.dropzone-div {
  padding: 10px;
}
.previous-images-div {
  width: 100%;
  padding: 10px;
}
.green {
  color: green;
  padding: 20px 10px 0px 10px;
  background: #3bcb9c;
}
.red {
  color: red;
  padding: 20px 10px 0px 10px;
}
.remove-btn {
  position: relative;
  top: -25px;
  left: -10px;
  cursor: pointer;
  color: #909090;
}

h3,
.h3 {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>

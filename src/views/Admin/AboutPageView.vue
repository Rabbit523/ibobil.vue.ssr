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
        <div class="row">
          <div class="col-md-12">
            <h3>Top Banner Title</h3>
            <input type="text" class="form-control" v-model="top_banner_title">
            <h3>Top Banner Image</h3>
            <label
              for="top_banner_image"
              class="blue-text font-18 label-class"
              id="brand_image_label"
            >
              <template v-if="top_banner_image">
                <div class="picture">
                  <img :src="top_banner_image" alt class="pro-image">
                </div>
              </template>
              <template v-else>
                <div class="comment">Upload top banner image (1 Image)
                  <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
                </div>
              </template>
              <input
                type="file"
                name="top_banner_image"
                id="top_banner_image"
                @change="onFileChange"
                ref="top_banner_image"
              >
            </label>
            <h3>Article 1</h3>
            <vue-editor v-model="article_1" id="article_1"></vue-editor>
            <h3>Article 2</h3>
            <vue-editor v-model="article_2" id="article_2"></vue-editor>

            <h3>Side Images</h3>
            <label for="side_images" class="blue-text font-18 label-class" id="brand_image_label">
              <template v-if="side_images.length > 0">
                <div class="label-images">
                  <div
                    class="picture picture-all"
                    v-for="(image, index) in side_images"
                    :key="index"
                  >
                    <img :src="image" alt class="pro-image">
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="comment">Upload side images (4 Images)
                  <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
                </div>
              </template>
              <input
                type="file"
                name="side_images"
                id="side_images"
                @change="onFileChange2"
                ref="side_images"
                multiple
              >
            </label>

            <h3>Slider Images</h3>
            <label for="slider_images" class="blue-text font-18 label-class" id="brand_image_label">
              <template v-if="slider_images.length > 0">
                <div class="label-images">
                  <div
                    class="picture picture-all"
                    v-for="(image, index) in slider_images"
                    :key="index"
                  >
                    <img :src="image" alt class="pro-image">
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="comment">Upload slider images
                  <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
                </div>
              </template>
              <input
                type="file"
                name="slider_images"
                id="slider_images"
                @change="onFileChange2"
                ref="slider_images"
                multiple
              >
            </label>

            <h3>Article 3</h3>
            <vue-editor v-model="article_3" id="article_3"></vue-editor>
            <h3>Article 4</h3>
            <vue-editor v-model="article_4" id="article_4"></vue-editor>

            <h3>Middle Banner Image</h3>
            <label
              for="middle_banner_image"
              class="blue-text font-18 label-class"
              id="brand_image_label"
            >
              <template v-if="middle_banner_image">
                <div class="picture">
                  <img :src="middle_banner_image" alt class="pro-image">
                </div>
              </template>
              <template v-else>
                <div class="comment">Upload middle banner image (1 Image)
                  <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
                </div>
              </template>
              <input
                type="file"
                name="middle_banner_image"
                id="middle_banner_image"
                @change="onFileChange"
                ref="middle_banner_image"
              >
            </label>

            <h3>Middle Slider Images</h3>
            <label
              for="middle_slider_images"
              class="blue-text font-18 label-class"
              id="brand_image_label"
            >
              <template v-if="middle_slider_images.length > 0">
                <div class="label-images">
                  <div
                    class="picture picture-all"
                    v-for="(image, index) in middle_slider_images"
                    :key="index"
                  >
                    <img :src="image" alt class="pro-image">
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="comment">Upload middle slider images
                  <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
                </div>
              </template>
              <input
                type="file"
                name="middle_slider_images"
                id="middle_slider_images"
                @change="onFileChange2"
                ref="middle_slider_images"
                multiple
              >
            </label>

            <h3>Address</h3>
            <input type="text" class="form-control" v-model="address">

            <h3>Email</h3>
            <input type="text" class="form-control" v-model="email">

            <h3>Phone</h3>
            <input type="text" class="form-control" v-model="phone">

            <div class="mb-50">
              <h3 class="my-heading">Meta tittel</h3>
              <input type="text" class="form-control" v-model="meta_title">
            </div>
            <div class="mb-50">
              <h3 class="my-heading">Metabeskrivelse</h3>
              <input type="text" class="form-control" v-model="meta_description">
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
import { VueEditor } from "vue2-editor";
import Avatar from "../../components/Avatar.vue";
import axios from "axios";

import { mapGetters } from "vuex";
export default {
  components: {
    VueEditor,
    Avatar
  },
  data() {
    return {
      content: "",
      successMessage: "",
      showSuccess: false,
      errorMessage: "",
      showError: false,
      brands: [],
      image: "",
      showclosebtn: false,
      infos: [],

      top_banner_image: "",
      top_banner_title: "",
      article_1: "",
      article_2: "",
      article_3: "",
      article_4: "",
      side_images: [],
      slider_images: [],
      middle_banner_image: "",
      middle_slider_images: [],
      address: "",
      email: "",
      phone: "",
      meta_title: "",
      meta_description: ""
    };
  },
  asyncData({ store, route }) {
    if (!store.state.homeData) return store.dispatch("FETCH_HOME_DATA");
    return;
  },
  title() {
    return "iBobil AS - Nye bobiler i Nord-Norge og brukte bobiler i til hele Norge";
  },
  description() {
    return "Bobilen din finner du hos iBobil, vi leverer nye bobiler fra Challenger, Eura Mobil, Concordre samt brukte fra alle produsenter.";
  },
  methods: {
    submit_form() {
      this.showSuccess = false;
      var token = localStorage.getItem("token");

      axios
        .post(this.SERVER_URL + "update_about?token=" + token, {
          top_banner_image: this.top_banner_image,
          top_banner_title: this.top_banner_title,
          article_1: this.article_1,
          article_2: this.article_2,
          article_3: this.article_3,
          article_4: this.article_4,
          side_images: this.side_images,
          slider_images: this.slider_images,
          middle_banner_image: this.middle_banner_image,
          middle_slider_images: this.middle_slider_images,
          address: this.address,
          email: this.email,
          phone: this.phone,
          meta_title: this.meta_title,
          meta_description: this.meta_description
        })
        .then(response => {
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
    },
    onFileChange(e) {
      var self = this;
      self.invalidImageError = ".";
      self.showInvalidImageError = false;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.createImage(files[0], e.target.name);
      this.showclosebtn = true;
    },
    createImage(file, name) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm[name] = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange2(e) {
      var self = this;
      self.invalidImageError = ".";
      self.showInvalidImageError = false;
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      this.createImage2(files, e.target.name);
      this.showclosebtn = true;
    },
    createImage2(files, name) {
      var index = 0;
      var vm = this;

      vm[name] = [];

      Array.from(files).forEach(function(file) {
        var image = new Image();
        var reader = new FileReader();

        reader.onload = e => {
          vm[name].push(e.target.result);
        };
        reader.readAsDataURL(file);

        index++;
      });
    }
  },
  beforeMount() {
    var homeData = this.$store.state.homeData;

    var temp = homeData.find(p => p.key == "top_banner_image");
    this.top_banner_image = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "address");
    this.address = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "email");
    this.email = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "phone");
    this.phone = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "about_meta_title");
    this.meta_title = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "about_meta_description");
    this.meta_description = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "middle_slider_images");
    this.middle_slider_images = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "middle_banner_image");
    this.middle_banner_image = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "slider_images");
    this.slider_images = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "side_images");
    this.side_images = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "article_4");
    this.article_4 = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "article_3");
    this.article_3 = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "article_2");
    this.article_2 = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "article_1");
    this.article_1 = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "top_banner_title");
    this.top_banner_title = temp ? temp.value : "";
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

/*testing*/
.red {
  color: red;
}
.green {
  color: #f2fff2;
  padding: 10px;
  background: #3bcb9c;
}
input[type="file"] {
  display: none;
}
#brand_image_label {
  cursor: pointer;
}
.pro-image {
  height: 100px;
}
.show {
  display: block;
}
.label-class {
  width: 100%;
  background: #dedede;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 150px;
}

.label-images {
  width: 100%;
  background: #dedede;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 150px;
  overflow: scroll;
}
.comment {
  text-align: center;
}

.picture-all {
  margin-left: 10px;
  margin-right: 10px;
}

h3,
.h3 {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>

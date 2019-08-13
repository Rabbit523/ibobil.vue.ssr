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
            <h3>Home Top Sub Headline</h3>
            <input
              type="text"
              class="form-control"
              v-model="home_top_sub_headline"
              placeholder="gode tilbud"
            >
            <h3>Home Top Headline</h3>
            <input
              type="text"
              class="form-control"
              v-model="home_top_headline"
              placeholder="BOBILEN DU TRENGER"
            >
            <h3>Home Top Text</h3>
            <vue-editor v-model="home_top_text" id="article_1"></vue-editor>
            <h3>Home Top Image</h3>
            <label
              for="home_top_image"
              class="blue-text font-18 label-class"
              id="brand_image_label"
            >
              <template v-if="home_top_image">
                <div class="picture">
                  <img :src="home_top_image" alt class="pro-image">
                </div>
              </template>
              <template v-else>
                <div class="comment">Upload Home Top Image (1 Image)
                  <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
                </div>
              </template>
              <input
                type="file"
                name="home_top_image"
                id="home_top_image"
                @change="onFileChange"
                ref="home_top_image"
              >
            </label>
            <h3>Brand Top Sub Headline</h3>
            <input
              type="text"
              class="form-control"
              v-model="brand_top_sub_headline"
              placeholder="gode tilbud"
            >
            <h3>Brand Top Headline</h3>
            <input
              type="text"
              class="form-control"
              v-model="brand_top_headline"
              placeholder="SE ALLE VÅRE MERKER"
            >
            <h3>Brand Top Image</h3>
            <label
              for="brand_top_image"
              class="blue-text font-18 label-class"
              id="brand_image_label"
            >
              <template v-if="brand_top_image">
                <div class="picture">
                  <img :src="brand_top_image" alt class="pro-image">
                </div>
              </template>
              <template v-else>
                <div class="comment">Upload Brand Top Image (1 Image)
                  <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
                </div>
              </template>
              <input
                type="file"
                name="brand_top_image"
                id="brand_top_image"
                @change="onFileChange"
                ref="brand_top_image"
              >
            </label>
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
      successMessage: "",
      showSuccess: false,
      errorMessage: "",
      showError: false,
      image: "",
      showclosebtn: false,
      infos: [],

      home_top_sub_headline: "",
      home_top_headline: "",
      home_top_text: "",
      home_top_image: "",
      brand_top_headline: "",
      brand_top_sub_headline: "",
      // brand_top_text:'',
      brand_top_image: ""
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
        .post(this.SERVER_URL + "update_top?token=" + token, {
          home_top_headline: this.home_top_headline,
          home_top_sub_headline: this.home_top_sub_headline,
          home_top_text: this.home_top_text,
          home_top_image: this.home_top_image,
          brand_top_headline: this.brand_top_headline,
          brand_top_sub_headline: this.brand_top_sub_headline,
          brand_top_image: this.brand_top_image
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
    }
  },
  created() {
    var homeData = this.$store.state.homeData;

    var temp = homeData.find(p => p.key == "brand_top_image");
    this.brand_top_image = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "brand_top_sub_headline");
    this.brand_top_sub_headline = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "brand_top_headline");
    this.brand_top_headline = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "home_top_image");
    this.home_top_image = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "home_top_text");
    this.home_top_text = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "home_top_sub_headline");
    this.home_top_sub_headline = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "home_top_headline");
    this.home_top_headline = temp ? temp.value : "";
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

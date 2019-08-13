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

      <div class="col-md-10 col-sm-12 mb-10">
        <br>
        <div class="mb-50">
          <button
            class="btn btn-sm"
            @click="submit_form"
            style="background-color:#7BD52A;color:white;"
          >Update Products</button>
        </div>
        <!-- nye Bobiler -->
        <h2>Nye Bobiler</h2>
        <div class="mb-50">
          <h3 class="my-heading">Title</h3>
          <input type="text" class="form-control" v-model="nye_bobiler_title">
        </div>
        <h3 class="my-heading">Image</h3>
        <label class="blue-text font-18 label-class" id="nye_bobiler_image">
          <template v-if="nye_bobiler_image">
            <div class="picture">
              <img :src="nye_bobiler_image" alt class="pro-image">
            </div>
          </template>
          <template v-else>
            <div class="comment">Upload Nye bobiler logo
              <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
            </div>
          </template>
          <input type="file" @change="onFileChangeNye">
        </label>
        <h3 class="my-heading">Description</h3>
        <vue-editor v-model="nye_bobiler_description" id="nye_bobiler_description"></vue-editor>

        <div class="mb-50">
          <h3 class="my-heading">Meta tittel</h3>
          <input type="text" class="form-control" v-model="nye_meta_title">
        </div>
        <div class="mb-50">
          <h3 class="my-heading">Metabeskrivelse</h3>
          <input type="text" class="form-control" v-model="nye_meta_description">
        </div>
        <!-- brukute bobiler -->
        <h2>Brukte bobiler</h2>
        <div class="mb-50">
          <h3 class="my-heading">Title</h3>
          <input type="text" class="form-control" v-model="brukute_bobiler_title">
        </div>
        <h3 class="my-heading">Image</h3>
        <label class="blue-text font-18 label-class" id="brukute_bobiler_image">
          <template v-if="brukute_bobiler_image">
            <div class="picture">
              <img :src="brukute_bobiler_image" alt class="pro-image">
            </div>
          </template>
          <template v-else>
            <div class="comment">Upload Nye bobiler logo
              <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
            </div>
          </template>
          <input type="file" @change="onFileChangeBrukute">
        </label>
        <h3 class="my-heading">Description new</h3>
        <vue-editor v-model="brukute_bobiler_description" id="brukute_bobiler_description"></vue-editor>

        <div class="mb-50">
          <h3 class="my-heading">Meta tittel</h3>
          <input type="text" class="form-control" v-model="brukute_meta_title">
        </div>
        <div class="mb-50">
          <h3 class="my-heading">Metabeskrivelse</h3>
          <input type="text" class="form-control" v-model="brukute_meta_description">
        </div>
        <h2>Merker</h2>
        <div class="mb-50">
          <h3 class="my-heading">Meta tittel</h3>
          <input type="text" class="form-control" v-model="meta_title">
        </div>
        <div class="mb-50">
          <h3 class="my-heading">Metabeskrivelse</h3>
          <input type="text" class="form-control" v-model="meta_description">
        </div>
        <!-- meta keywords for merker page -->
        <div class="mb-50">
          <h3 class="my-heading">Meta søkeord</h3>
          <input type="text" class="form-control" v-model="meta_keywords">
        </div>
        <!-- meta keywords for merker page -->
        <div class="mb-50">
          <h3 class="my-heading">Merkebeskrivelse</h3>
          <vue-editor v-model="brands_description" id="brands_description"></vue-editor>
        </div>

        <div class="edit-wrapper" v-for="(brand,index) in brands" :key="index">
          <!-- <div id="summernote"></div> -->
          <button
            class="accordion active"
            data-toggle="collapse"
            :data-target="'#'+brand.name | strTrim"
          >{{brand.name }}</button>
          <div class="panel col-md-12 dropzone-div collapse" :id="brand.name | strTrim">
            <label :for="index" class="blue-text font-18 label-class" id="brand_image_label">
              <template v-if="brand.logo">
                <div class="picture">
                  <img :src="brand.logo" alt class="pro-image">
                </div>
              </template>
              <template v-else>
                <div class="comment">Upload brand logo
                  <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
                </div>
              </template>
              <input type="file" :name="index" :id="index" @change="onFileChange" :ref="index">
            </label>
            <!-- meta title, Description -->
            <div class="mb-50">
              <h3 class="my-heading">Meta tittel</h3>
              <input
                type="text"
                class="form-control"
                :id="brand.name"
                v-model="brand.new_brand_meta_title"
              >
            </div>
            <div class="mb-50">
              <h3 class="my-heading">Metabeskrivelse</h3>
              <input
                type="text"
                class="form-control"
                :id="brand.name"
                v-model="brand.new_brand_meta_description"
              >
            </div>
            <!-- meta title, Description -->
            <!-- meta Keyword -->
            <div class="mb-50">
              <h3 class="my-heading">Meta søkeord</h3>
              <input
                type="text"
                class="form-control"
                :id="brand.name"
                v-model="brand.new_brand_meta_keywords"
              >
            </div>
            <!-- meta Keyword -->
            <h3 class="my-heading">MERKEBESKRIVELSE</h3>
            <vue-editor v-model="brand.description" :id="brand.name"></vue-editor>
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
      errorMessage: [],
      showError: false,
      brands: [],
      image: "",
      showclosebtn: false,
      meta_title: "",
      meta_description: "",
      brands_description: "",
      meta_keywords: "",
      nye_meta_title: "",
      nye_meta_description: "",
      brukute_meta_title: "",
      brukute_meta_description: "",
      nye_bobiler_title: "",
      nye_bobiler_image: "",
      nye_bobiler_description: "",
      brukute_bobiler_title: "",
      brukute_bobiler_image: "",
      brukute_bobiler_description: "sgrter"
    };
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
        .post(this.SERVER_URL + "update_brands?token=" + token, {
          brands: this.brands,
          meta_title: this.meta_title,
          meta_description: this.meta_description,
          brands_description: this.brands_description,
          meta_keywords: this.meta_keywords,
          nye_meta_title: this.nye_meta_title,
          nye_meta_description: this.nye_meta_description,
          brukute_meta_title: this.brukute_meta_title,
          brukute_meta_description: this.brukute_meta_description,
          nye_bobiler_title: this.nye_bobiler_title,
          nye_bobiler_image: this.nye_bobiler_image,
          nye_bobiler_description: this.nye_bobiler_description,
          brukute_bobiler_title: this.brukute_bobiler_title,
          brukute_bobiler_image: this.brukute_bobiler_image,
          brukute_bobiler_description: this.brukute_bobiler_description
        })
        .then(response => {
          this.showSuccess = true;
          this.successMessage = response.data.message;
        })
        .catch(error => {
          if (error.response.data.code == 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user-info");
            this.$router.push({ name: "login" });
          }
          this.invalidError = error.response.data.message;
          this.showInvalidError = true;
        });
    },

    // nye - brukute - image
    onFileChangeNye(e) {
      var self = this;
      self.invalidImageError = ".";
      self.showInvalidImageError = false;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (files[0].size / 1024 > 500) {
        self.invalidImageError = "Image size should be less than 500kb.";
        self.showInvalidImageError = true;
        return;
      }
      this.createImageNye(files[0], e.target.name);
      this.showclosebtn = true;
    },
    createImageNye(file, index) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.nye_bobiler_image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChangeBrukute(e) {
      var self = this;
      self.invalidImageError = ".";
      self.showInvalidImageError = false;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (files[0].size / 1024 > 500) {
        self.invalidImageError = "Image size should be less than 500kb.";
        self.showInvalidImageError = true;
        return;
      }
      this.createImageBrukute(files[0], e.target.name);
      this.showclosebtn = true;
    },
    createImageBrukute(file, index) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.brukute_bobiler_image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    // nye - brukute - image

    onFileChange(e) {
      var self = this;
      self.invalidImageError = ".";
      self.showInvalidImageError = false;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (files[0].size / 1024 > 500) {
        self.invalidImageError = "Image size should be less than 500kb.";
        self.showInvalidImageError = true;
        return;
      }
      this.createImage(files[0], e.target.name);
      this.showclosebtn = true;
    },
    createImage(file, index) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.brands[index].logo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  },
  asyncData({ store, route }) {
    return store.dispatch("FETCH_BRAND_DATA").then(() => {
      if (!store.state.homeData) return store.dispatch("FETCH_HOME_DATA");
      return;
    });
  },
  beforeMount() {
    var homeData = this.$store.state.homeData;
    this.brands = this.$store.state.brands;

    var temp = homeData.find(p => p.key == "brand_meta_title");
    this.meta_title = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "brand_meta_keywords");
    this.meta_keywords = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "brand_meta_description");
    this.meta_description = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "brands_description");
    this.brands_description = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "nye_meta_title");
    this.nye_meta_title = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "nye_meta_description");
    this.nye_meta_description = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "brukute_meta_title");
    this.brukute_meta_title = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "brukute_meta_description");
    this.brukute_meta_description = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "nye_bobiler_title");
    this.nye_bobiler_title = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "nye_bobiler_image");
    this.nye_bobiler_image = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "nye_bobiler_description");
    this.nye_bobiler_description = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "brukute_bobiler_title");
    this.brukute_bobiler_title = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "brukute_bobiler_image");
    this.brukute_bobiler_image = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "brukute_bobiler_description");
    this.brukute_bobiler_description = temp ? temp.value : "";

    this.$store.state.current_path = this.$route.path;
  },
  filters: {
    strTrim: function(value) {
      if (!value) return "";
      return value.replace(" ", "");
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
.comment {
  text-align: center;
}

.edit-wrapper {
  padding-top: 10px;
  padding-bottom: 0;
}
.mb-10 {
  margin-bottom: 10px;
}
h3,
.h3 {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>

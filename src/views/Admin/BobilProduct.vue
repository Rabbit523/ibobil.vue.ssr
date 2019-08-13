<template>
  <div class="col-md-10 col-sm-12 sider-wrapper">
    <div class="title-bar row">
      <span class="font-25">Bobiler</span>
      <avatar></avatar>
    </div>
    <div class="table">
      <div class="row">
        <div v-if="showSuccess" class="green">{{ successMessage }}</div>
        <template v-if="showError">
          <div class="red" v-for="(error, index) in errorMessage" :key="index">{{ error }}</div>
        </template>
        <div class="col-md-12 col-sm-12">
          <h3 class="my-heading">Bobiler Title</h3>
          <input type="text" class="form-control" v-model="bobiler_title">
          <h3 class="my-heading">Bobiler Image</h3>
          <label class="blue-text font-18 label-class" id="brand_image_label">
            <template v-if="bobiler_image">
              <div class="picture">
                <img :src="bobiler_image" alt class="pro-image">
              </div>
            </template>
            <template v-else>
              <div class="comment">Upload bobiler logo
                <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
              </div>
            </template>
            <input type="file" @change="onFileChange">
          </label>
          <h3 class="my-heading">Bobiler Description</h3>
          <vue-editor v-model="bobiler_description"></vue-editor>
          <br>
        </div>
        <!-- bobiler text new -->
        <div class="col-md-12"></div>
        <div class="col-md-3 col-sm-12">
          <div class="input-group" style="margin-bottom:20px">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              v-model="query"
              v-on:keyup.enter="runallfilters"
            >
            <div class="input-group-btn">
              <button class="btn btn-default" type="button" @click.stop="runallfilters">
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="input-group" style="margin-bottom:20px">
            <select name id class="form-control" @change="runallfilters" v-model="brand">
              <option value>Select Brand</option>
              <option :value="index" v-for="(innerbrand,index) in brands" :key="index">{{index}}</option>
            </select>
          </div>
        </div>
        <div class="input-group">
          <button class="btn btn-success" @click="saveBobiler">Update</button>
          <br>
        </div>
      </div>
      <div class="table-header col-lg-12 col-md-12">
        <div class="col-md-6 col-sm-12">
          <span>Bobil modell</span>
        </div>
        <div class="col-md-2 col-sm-12">
          <span>Merke</span>
        </div>
        <div class="col-md-2 col-sm-12">
          <span>Arsmodell</span>
        </div>
        <div class="col-md-2 col-sm-12">
          <span>Soveplasser</span>
        </div>
      </div>
      <div
        class="table-row col-lg-12 col-md-12"
        v-for="(product, index) in filteredproducts"
        :key="index"
      >
        <div class="cell col-md-6 col-sm-12">
          <span>{{product.name}}</span>
          <ul class="edit">
            <li @click="editOne(product.adId)">Rediger</li>
            <template v-if="product.active == 1">
              <li @click="deactivated(product.adId)">Deaktivere</li>
            </template>
            <template v-else>
              <li @click="activated(product.adId)" class="green">Aktivere</li>
            </template>
          </ul>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Merke</span>
          <span>{{ product.adata.make}}</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Arsmodell</span>
          <span>{{ product.adata.year}}</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Soveplasser</span>
          <div>{{ product.adata.seats}}</div>
        </div>
        <div class="cell"></div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Avatar from "../../components/Avatar.vue";
import { VueEditor } from "vue2-editor";
import _ from "lodash";

export default {
  components: {
    Avatar,
    VueEditor
  },
  data() {
    return {
      query: "",
      products: [],
      filteredproducts: [],
      message: "",
      showMessage: false,
      successMessage: "",
      showSuccess: false,
      errorMessage: "",
      showError: false,
      brands: [],
      brand: "",
      bobiler_title: "",
      bobiler_image: "",
      bobiler_description: ""
    };
  },
  asyncData({ store, route }) {
    return store.dispatch("FETCH_RV_DATA");
  },
  title() {
    return "iBobil AS - Nye bobiler i Nord-Norge og brukte bobiler i til hele Norge";
  },
  description() {
    return "Bobilen din finner du hos iBobil, vi leverer nye bobiler fra Challenger, Eura Mobil, Concordre samt brukte fra alle produsenter.";
  },
  methods: {
    saveBobiler() {
      this.showSuccess = false;
      var token = localStorage.getItem("token");
      axios
        .post(this.SERVER_URL + "saveBobilerText?token=" + token, {
          bobiler_title: this.bobiler_title,
          bobiler_image: this.bobiler_image,
          bobiler_description: this.bobiler_description
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
        vm.bobiler_image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    runallfilters() {
      this.filteredproducts = this.products;
      if (this.brand) {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return product.adata.make == this.brand;
        });
      }

      this.filteredproducts = this.filteredproducts.filter(product => {
        return (
          product.name.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
        );
      });
    },
    editOne(id) {
      this.$router.push({ path: "/admin/product/" + id });
    },
    deactivated(id) {
      var token = localStorage.getItem("token");
      axios
        .get(this.SERVER_URL + "deactivated/" + id + "?token=" + token)
        .then(data => {
          if (data) {
            for (var i = 0; i < this.products.length; i++) {
              if (this.products[i].adId == id) {
                this.products[i].active = 0;
                break;
              }
            }
          }
        })
        .catch(error => {
          console.log("error:", error);
        });
    },
    activated(id) {
      var token = localStorage.getItem("token");
      axios
        .get(this.SERVER_URL + "activated/" + id + "?token=" + token)
        .then(data => {
          if (data) {
            for (var i = 0; i < this.products.length; i++) {
              if (this.products[i].adId == id) {
                this.products[i].active = 1;
                break;
              }
            }
          }
        })
        .catch(error => {
          console.log("error:", error);
        });
    }
  },
  mounted() {
    this.products = this.$store.state.products;
    this.filteredproducts = this.$store.state.products;
    this.brands = _.countBy(this.$store.state.products, function(c) {
      return c.adata.make;
    });
    var token = localStorage.getItem("token");
    axios
      .get(this.SERVER_URL + "getBobilerText?token=" + token)
      .then(response => {
        let infos = response.data.infos;

        this.bobiler_title = infos.filter(product => {
          return product.key == "bobiler_title";
        })[0].value;
        this.bobiler_image = infos.filter(product => {
          return product.key == "bobiler_image";
        })[0].value;
        this.bobiler_description = infos.filter(product => {
          return product.key == "bobiler_description";
        })[0].value;
      })
      .catch(function(error) {});
  }
};
</script>

<style scoped>
.green {
  color: green !important;
}
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

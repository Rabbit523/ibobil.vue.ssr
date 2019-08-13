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

      <div class="col-md-10 col-sm-12 mt-50">
        <div class="mb-50">
          <h3 class="my-heading">UKENS BOBIL</h3>
          <select
            name="weekly_motorhome"
            id="weekly_motorhome"
            class="form-control"
            v-model="weekly_motorhome"
          >
            <option
              :value="product.id"
              v-for="(product, index) in products"
              :key="index"
            >{{product.name}}</option>
          </select>
        </div>
        <div class="mb-50">
          <h3 class="my-heading">SISTE NYESTE BOBIL</h3>
          <select
            name="new_motorhome"
            id="new_motorhome"
            class="form-control"
            v-model="new_motorhome"
          >
            <option
              :value="product.id"
              v-for="(product, index) in products"
              :key="index"
            >{{product.name}}</option>
          </select>
        </div>
        <div class="mb-50">
          <h3 class="my-heading">SISTE BRUKTE BOBIL</h3>
          <select
            name="used_motorhome"
            id="used_motorhome"
            class="form-control"
            v-model="used_motorhome"
          >
            <option
              :value="product.id"
              v-for="(product, index) in products"
              :key="index"
            >{{product.name}}</option>
          </select>
        </div>
        <div class="mb-50">
          <h3 class="my-heading">BOBIL PA TILBUD</h3>
          <select
            name="sale_motorhome"
            id="sale_motorhome"
            class="form-control"
            v-model="sale_motorhome"
          >
            <option
              :value="product.id"
              v-for="(product, index) in products"
              :key="index"
            >{{product.name}}</option>
          </select>
        </div>

        <div style="height:1px;background-color:#cbcbcb;margin:10px 0px 50px 0px"></div>

        <div class="mb-50">
          <h3 class="my-heading">Meta tittel</h3>
          <input type="text" class="form-control" v-model="meta_title">
        </div>
        <div class="mb-50">
          <h3 class="my-heading">Metabeskrivelse</h3>
          <input type="text" class="form-control" v-model="meta_description">
        </div>
        <div style="height:1px;background-color:#cbcbcb;margin:10px 0px 50px 0px"></div>

        <div class="mb-50">
          <h3 class="my-heading">Skriv brev</h3>
          <input type="text" class="form-control" v-model="sign_letter">
        </div>
        <div class="mb-50">
          <h3 class="my-heading">Filmbeskrivelse</h3>
          <input type="text" class="form-control" v-model="film_description">
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
  computed: {
    // ...mapGetters({
    //   ProductData: "ProductData"
    // })
  },
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
      products: [],
      weekly_motorhome: "",
      new_motorhome: "",
      used_motorhome: "",
      sale_motorhome: "",
      infos: [],
      meta_title: "",
      meta_description: "",
      sign_letter: "",
      film_description: ""
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
        .post(this.SERVER_URL + "update_home?token=" + token, {
          weekly_motorhome: this.weekly_motorhome,
          new_motorhome: this.new_motorhome,
          used_motorhome: this.used_motorhome,
          sale_motorhome: this.sale_motorhome,
          meta_title: this.meta_title,
          meta_description: this.meta_description,
          sign_letter: this.sign_letter,
          film_description: this.film_description
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
    }
  },
  asyncData({ store, route }) {
    return store
      .dispatch("FETCH_RV_DATA")
      .then(() => store.dispatch("FETCH_HOME_DATA"));
  },
  mounted() {
    this.products = this.$store.state.products.filter(
      product => product.active == 1
    );

    var temp = this.$store.state.homeData.find(
      p => p.key == "weekly_motorhome"
    );
    this.weekly_motorhome = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "new_motorhome");
    this.new_motorhome = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "used_motorhome");
    this.used_motorhome = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "sale_motorhome");
    this.sale_motorhome = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "home_meta_title");
    this.meta_title = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(
      p => p.key == "home_meta_description"
    );
    this.meta_description = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "sign_letter");
    this.sign_letter = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "film_description");
    this.film_description = temp ? temp.value : "";
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

.form-input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}
.mt-50 {
  margin-top: 50px;
  padding-left: 25px;
}
.mb-50 {
  margin-bottom: 50px;
}
.my-heading {
  font-size: 12px;
  color: #fff;
  background: #000;
  padding: 10px 20px;
  margin-bottom: 0px;
}

h3,
.h3 {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>

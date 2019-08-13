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

      <div class="col-md-9 col-sm-12">
        <div class="row">
          <div class="col-md-12">
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
    </div>
    <div class="col-md-2 col-sm-12 update-btn">
      <button class="btn btn-lg" @click="submit_form">OPPDATER</button>
    </div>
  </div>
</template>


<script>
import Avatar from "../../components/Avatar.vue";
import axios from "axios";

export default {
  components: {
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
      meta_title: "",
      meta_description: ""
    };
  },
  methods: {
    submit_form() {
      this.showSuccess = false;
      var token = localStorage.getItem("token");

      axios
        .post(this.SERVER_URL + "update_finance?token=" + token, {
          meta_title: this.meta_title,
          meta_description: this.meta_description
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
  title() {
    return "iBobil AS - Nye bobiler i Nord-Norge og brukte bobiler i til hele Norge";
  },
  description() {
    return "Bobilen din finner du hos iBobil, vi leverer nye bobiler fra Challenger, Eura Mobil, Concordre samt brukte fra alle produsenter.";
  },
  asyncData({ store, route }) {
    return store.dispatch("FETCH_HOME_DATA");
    // if (!store.state.homeData) return Promise.resolve();
  },
  beforeMount() {
    this.$store.state.current_path = this.$route.path;
    var homeData = this.$store.state.homeData;

    var temp = homeData.find(p => p.key == "finance_meta_title");
    this.meta_title = temp ? temp.value : "";

    temp = homeData.find(p => p.key == "finance_meta_description");
    this.meta_description = temp ? temp.value : "";
  }
};
</script>

<style scoped>
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
.show {
  display: block;
}

.mb-50 {
  margin-bottom: 50px;
}

h3,
.h3 {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>

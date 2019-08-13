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
      successMessage: "",
      showSuccess: false,
      errorMessage: "",
      showError: false,
      meta_title: "",
      meta_description: ""
    };
  },
  methods: {
    submit_form() {
      this.showSuccess = false;
      var token = localStorage.getItem("token");

      axios
        .post(this.SERVER_URL + "update_rv?token=" + token, {
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
    }
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
  beforeMount() {
    var homeData = this.$store.state.homeData;

    var temp = homeData.find(p => p.key == "rv_meta_title");
    this.meta_title = temp ? temp.value : "";

    var temp = homeData.find(p => p.key == "rv_meta_description");
    this.meta_description = temp ? temp.value : "";
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

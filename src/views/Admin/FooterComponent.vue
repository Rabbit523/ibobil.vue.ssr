<template>
  <div class="col-md-10 col-sm-12 sider-wrapper">
    <div class="title-bar row">
      <span class="font-25">Footer</span>
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
            <h3>Content</h3>
            <vue-editor v-model="footer_content" id="footer_content"></vue-editor>

            <h3>Address</h3>
            <input type="text" class="form-control" v-model="address">

            <h3>Email</h3>
            <input type="text" class="form-control" v-model="email">

            <h3>Phone</h3>
            <input type="text" class="form-control" v-model="phone">

            <h3>Facebook link</h3>
            <input type="text" class="form-control" v-model="facebook_link">

            <h3>Twitter link</h3>
            <input type="text" class="form-control" v-model="twitter_link">

            <h3>Google plus link</h3>
            <input type="text" class="form-control" v-model="google_link">

            <h3>Pinterest link</h3>
            <input type="text" class="form-control" v-model="pinterest_link">

            <h3>Youtube link</h3>
            <input type="text" class="form-control" v-model="youtube_link">
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
      errorMessage: "",
      showError: false,
      brands: [],
      image: "",
      showclosebtn: false,
      infos: [],

      footer_content: "",
      address: "",
      email: "",
      phone: "",
      facebook_link: "",
      twitter_link: "",
      google_link: "",
      pinterest_link: "",
      youtube_link: ""
    };
  },
  methods: {
    submit_form() {
      this.showSuccess = false;
      var token = localStorage.getItem("token");

      var self = this;
      axios
        .post(this.SERVER_URL + "update_footer?token=" + token, {
          footer_content: self.footer_content,
          address: self.address,
          email: self.email,
          phone: self.phone,
          facebook_link: self.facebook_link,
          twitter_link: self.twitter_link,
          google_link: self.google_link,
          pinterest_link: self.pinterest_link,
          youtube_link: self.youtube_link
        })
        .then(function(response) {
          self.showSuccess = true;
          self.successMessage = response.data.message;
        })
        .catch(error => {
          if (error.response.data.code == 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user-info");
            self.$router.push({ name: "login" });
          }
          self.invalidError = error.response.data.message;
          self.showInvalidError = true;
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
    if (!store.state.homeData) return store.dispatch("FETCH_HOME_DATA");
    return;
  },
  created() {
    this.$store.state.current_path = this.$route.path;
    var temp;

    temp = this.$store.state.homeData.find(p => p.key == "youtube_link");
    this.youtube_link = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "pinterest_link");
    this.pinterest_link = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "google_link");
    this.google_link = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "twitter_link");
    this.twitter_link = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "facebook_link");
    this.facebook_link = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "phone");
    this.phone = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "email");
    this.email = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "address");
    this.address = temp ? temp.value : "";

    temp = this.$store.state.homeData.find(p => p.key == "footer_content");
    this.footer_content = temp ? temp.value : "";
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

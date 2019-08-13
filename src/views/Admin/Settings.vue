<template>
  <div class="col-md-10 col-sm-12 sider-wrapper">
    <div class="title-bar row">
      <span class="font-25">Sider</span>
      <avatar></avatar>
    </div>
    <div class="col-md-12 col-sm-12">
      <div class="col-md-12 col-sm-12 innstillinger-content">
        <div class="col-md-6 col-sm-12">
          <div class="col-md-12">
            <p class="font-21 title">Profilbilde</p>
            <p class="font-13">Last opp et profilbilde og personligjør din konto</p>
            <div v-if="showInvalidImageError" class="red">{{ invalidImageError }}</div>
            <label for="profile_image" class="blue-text font-18" id="profile_image_label">
              <div class="picture">
                <img :src="image" alt class="pro-image">
                <div
                  v-bind:class="{ close_btn: true, 'show': showclosebtn }"
                  v-on:click.stop.prevent="removeImage()"
                >X</div>
                <div class="comment">
                  Last opp et bilde
                  <input
                    type="file"
                    name="profile_image"
                    id="profile_image"
                    @change="onFileChange"
                  >
                  <!-- <p class="blue-text font-18">Last opp et bilde</p> -->
                  <p class="font-13">Maksimum opplastningsstørrelse er 500KB, JPG, PNG, JPEG.</p>
                </div>
              </div>
            </label>
          </div>

          <div class="col-md-12">
            <p class="font-21 title">Personlig</p>
            <p class="font-13">informasjon Endre kontoinformasjon</p>
            <div v-if="showError" class="red">{{ error }}</div>
            <template v-if="showInvalidError" class="red">
              <div v-for="(err, index) in invalidError" :key="index">{{ err }}</div>
            </template>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label for>FULLT NAVN</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Jan-Børre Håheim"
                    v-model="name"
                  >
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label for>E-POSTADRESSE</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="post@icaravan.no"
                    v-model="email"
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <p class="font-21 title">Passord</p>
            <p class="font-13">Husk å bruke et sterkt passord</p>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label for>NYTT PASSWORD</label>
                  <input type="password" class="form-control" v-model="password">
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label for>BEKREFT PASSORD</label>
                  <input type="password" class="form-control" v-model="password_confirmation">
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <button
              class="btn blue-btn"
              type="button"
              @click.stop.prevent="update_profile()"
              :disabled="button_validated"
            >LAGRE</button>
            <div v-if="showSuccess" class="green">{{ successMessage }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Avatar from "../../components/Avatar.vue";

export default {
  components: {
    Avatar
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      error:
        "Please enter your email and password before clicking the login button",
      invalidError: "",
      invalidImageError: "",
      showError: false,
      showInvalidError: false,
      showInvalidImageError: false,
      showSuccess: false,
      successMessage: "",
      image: require("../../../public/img/icons/avarta1.png"),
      default_image: require("../../../public/img/icons/avarta1.png"),
      showclosebtn: false,
      button_validated: false
    };
  },
  title() {
    return "iBobil AS - Nye bobiler i Nord-Norge og brukte bobiler i til hele Norge";
  },
  description() {
    return "Bobilen din finner du hos iBobil, vi leverer nye bobiler fra Challenger, Eura Mobil, Concordre samt brukte fra alle produsenter.";
  },
  methods: {
    update_profile() {
      var self = this;
      this.showInvalidError = false;
      this.showError = false;
      this.showSuccess = false;
      this.button_validated = true;

      if (this.name == "" || this.email == "") {
        this.showError = true;
        return;
      }

      axios
        .post(rooturl + "update_profile?token=" + token, {
          name: this.name,
          email: this.email,
          password: this.password ? this.password : null,
          password_confirmation: this.password_confirmation
            ? this.password_confirmation
            : null,
          image: this.image == this.default_image ? null : this.image
        })
        .then(response => {
          self.showSuccess = true;
          self.successMessage = response.data.message;
          self.password = "";
          self.password_confirmation = "";
          self.showSuccess = true;
          self.button_validated = false;
          self.$store.state.name = self.name;
          self.$store.state.image = self.image;
        })
        .catch(function(error) {
          self.password = "";
          self.password_confirmation = "";
          if (error.response.data.code == 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user-info");
            self.$router.push({ name: "login" });
          }
          self.showInvalidError = true;
          self.successMessage = "";
          self.showSuccess = false;
          self.button_validated = false;
          self.invalidError = error.response.data.message;
          self.showInvalidError = true;
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
      this.createImage(files[0]);
      this.showclosebtn = true;
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = this.default_image;
      this.showclosebtn = false;
      document.getElementById("profile_image").value = "";
    }
  },
  beforeMount() {
    this.$store.state.current_path = this.$route.path;

    var token = localStorage.getItem("token");
    var info = localStorage.getItem("user-info");
    if (info) {
      info = JSON.parse(info);
      this.name = info.name;
      this.email = info.email;
      if (info.image) {
        this.image = info.image;
        this.default_image = info.image;
      }
    }
  }
};
</script>

<style scoped>
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
#profile_image_label {
  cursor: pointer;
}
.pro-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.close_btn {
  position: relative;
  top: -30px;
  display: none;
}
.show {
  display: block;
}
label {
  font-size: 10px;
}
</style>


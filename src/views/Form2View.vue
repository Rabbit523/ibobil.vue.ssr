<template>
  <div id="formdiv">
    <div>
      <div class="fs-webform-loader" style="margin:auto">
        <div class="loader-box">
          <div class="loader"></div>
          <div id="loader-text" style>It's just you, me and the loading screen.</div>
        </div>
      </div>
      <div
        id="fs-webform-container_dd43eaec6c0a3de5b4c2ae2cdb33759986c37f3ff9081b128baae352ba6014f7_4622"
        class="fs-webform-container fs_dd43eaec6c0a3de5b4c2ae2cdb33759986c37f3ff9081b128baae352ba6014f7"
        style="display:none;"
      >
        <div id="appendscript"></div>

        <div class="form-modal">
          <div>
            <link
              rel="stylesheet"
              type="text/css"
              href="https://d2q29yaerazix2.cloudfront.net/1/formserv.css"
              crossorigin="anonymous"
            >
            <link
              rel="stylesheet"
              type="text/css"
              href="https://d952cmcgwqsjf.cloudfront.net/assets/webforms.css"
              crossorigin="anonymous"
            >
          </div>
          <div class="fserv-container">
            <div :class="{'fs-notifier':true,'showSuccess':showSuccess}">
              <span>Takk for henvendelsen, den er nå registrert.</span>
              <a class="close" @click="()=> { this.showSuccess = false}">×</a>
            </div>
            <h2 class="fserv-form-name">Reserver denne bilen</h2>
            <label
              class="fserv-form-description"
            >Fyll ut skjemaet nedenfor og en av representantene våre vil kontakte deg snart.</label>
            <div class="pipedrive-form">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="fserv-field fserv-required">
                    <label class="fserv-label">HVA HETER DU?</label>
                    <input
                      data-regex-required-error="can't be empty."
                      data-regex-required="([^\s])"
                      class="fserv-input-text"
                      name="lead[first_name]"
                      type="text"
                      placeholder="Fyll inn"
                      v-model="first_name"
                    >
                    <label
                      id="lead[last_name]-error"
                      :class="{'error':true, 'hide':true,'show':showerror1}"
                      for="lead[last_name]"
                    >First name can't be empty.</label>
                    <div class="fserv-control" style="display:none;"></div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="fserv-field fserv-required">
                    <label class="fserv-label">HVA ER E-POSTADRESSEN DIN?</label>
                    <input
                      data-regex-required-error="can't be empty."
                      data-regex-required="([^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$])"
                      class="fserv-input-text"
                      name="lead[first_name]"
                      type="email"
                      placeholder="Fyll inn"
                      v-model="email"
                    >
                    <label
                      id="lead[last_name]-error"
                      :class="{'error':true, 'hide':true,'show':showerror3}"
                      for="lead[last_name]"
                    >Invalid Email address</label>
                    <div class="fserv-control" style="display:none;"></div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="fserv-field fserv-required">
                    <label class="fserv-label">HVA ER TELEFONNUMMERET DITT?</label>
                    <input
                      data-regex-required-error="can't be empty."
                      data-regex-required="([^\s])"
                      class="fserv-input-text"
                      name="lead[first_name]"
                      type="text"
                      placeholder="Fyll inn"
                      v-model="mobile"
                    >
                    <label
                      id="lead[last_name]-error"
                      :class="{'error':true, 'hide':true,'show':showerror4}"
                      for="lead[last_name]"
                    >Telephone can't be empty.</label>
                    <div class="fserv-control" style="display:none;"></div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="fserv-field fserv-required">
                    <label class="fserv-label">LEGG TIL YTTERLIGERE MERKNADER HER</label>
                    <textarea v-model="comment" class="comment" placeholder rows="3"></textarea>
                    <label
                      id="lead[last_name]-error"
                      :class="{'error':true, 'hide':true,'show':showerror5}"
                      for="lead[last_name]"
                    >This field can't be empty.</label>
                    <div class="fserv-control" style="display:none;"></div>
                  </div>
                  <div class="row" style="text-align:right;padding-right:20px">
                    <div class="col-xs-12">
                      <button class="fserv-button-submit" type="submit" @click="submitform">Send inn</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["value"],
  data() {
    return {
      activeurl: "",
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      city: "",
      zipcode: "",
      org_name: "",
      org_address: "",
      reg_number: "",
      org_id: "",
      url: "",
      showerror1: false,
      showerror2: false,
      showerror3: false,
      showerror4: false,
      showerror5: false,
      showerror6: false,
      showSuccess: false,
      comment: ""
    };
  },

  methods: {
    toStep2() {
      this.$router.push({ path: "/step2" });
    },
    closeMenu() {
      this.hide = !this.hide;
    },
    openform() {
      document.getElementById("formdiv").style.display = "block";
    },
    onOrgNameChange() {
      var pipedrive_url = "https://ibobil.pipedrive.com/v1";
      var api_token = "?api_token=4f13e510368fe6f476da040c6bf8eb76c0272caa";
      var self = this;
      axios
        .get(pipedrive_url + "/organizations/find" + api_token, {
          term: this.org_name
        })
        .then(function(msg) {
          var orgs = msg.data;
          if (orgs && orgs.length > 0) {
            self.org_id = orgs[0].id;
            self.org_address = orgs[0].details.org_address;
          }
        })
        .catch(function(xhr, textStatus, errorThrown) {
          console.log(xhr.responseText);
        });
    },
    submitform1() {
      var self = this;
      if (this.first_name == "") {
        this.showerror1 = true;
      } else {
        this.showerror1 = false;
      }
      if (this.email == "") {
        this.showerror3 = true;
      } else {
        this.showerror3 = false;
      }
      if (this.mobile == "") {
        this.showerror4 = true;
      } else {
        this.showerror4 = false;
      }
      if (this.comment == "") {
        this.showerror5 = true;
      } else {
        this.showerror5 = false;
      }

      if (
        this.showerror1 &&
        this.showerror3 &&
        this.showerror4 &&
        this.showerror5
      ) {
        return;
      }

      axios
        .post("https://icaravan.freshsales.io/smart_form/create_entity", {
          "lead[first_name]": this.first_name,
          "lead[last_name]": this.last_name,
          "lead[email]": this.email,
          "lead[mobile_number]": this.mobile,
          "lead[city]": this.city,
          "lead[zipcode]": this.zipcode,
          "lead[deal][name]": this.reg_number,
          "lead[custom_field][cf_url]": this.activeurl,
          entity_type: 1,
          asset_key:
            "139d2edcc0cc8e7a92707caa15b64dadafc35a38c347453a6d4793ccf7b6bc8d"
        })
        .then(function(msg) {
          if (msg.status == "ok") {
            self.showSuccess = true;
            self.first_name = "";
            self.last_name = "";
            self.email = "";
            self.mobile = "";
            self.city = "";
            self.zipcode = "";
            self.reg_number = "";
          }
        })
        .catch(function(xhr, textStatus, errorThrown) {
          console.log(xhr.responseText);
        });
    },
    submitform() {
      var pipedrive_url = "https://ibobil.pipedrive.com/v1";
      var api_token = "?api_token=4f13e510368fe6f476da040c6bf8eb76c0272caa";
      var self = this;
      if (this.first_name == "") {
        this.showerror1 = true;
      } else {
        this.showerror1 = false;
      }
      if (this.email == "") {
        this.showerror3 = true;
      } else {
        this.showerror3 = false;
      }
      if (this.mobile == "") {
        this.showerror4 = true;
      } else {
        this.showerror4 = false;
      }
      if (this.comment == "") {
        this.showerror5 = true;
      } else {
        this.showerror5 = false;
      }

      if (
        this.showerror1 &&
        this.showerror3 &&
        this.showerror4 &&
        this.showerror5
      ) {
        return;
      }
      if (self.org_id === "") {
        if (self.org_name) {
          axios
            .post(pipedrive_url + "/organizations" + api_token, {
              name: self.org_name,
              address: self.org_address
            })
            .then(msg => {
              axios
                .post(pipedrive_url + "/persons" + api_token, {
                  name: self.first_name + " " + self.last_name,
                  org_id: msg.data.id,
                  email: self.email,
                  phone: self.mobile
                })
                .then(msg1 => {
                  axios
                    .post(pipedrive_url + "/deals" + api_token, {
                      title: self.$route.query.title,
                      value: self.$route.query.value,
                      person_id: msg1.data.id,
                      org_id: msg.data.id,
                      stage_id: 8,
                      "01c9bed1b2ae3ca5eaaea932091539aaa79d2cb9": self.comment
                    })
                    .then(msg2 => {
                      self.first_name = "";
                      self.last_name = "";
                      self.email = "";
                      self.mobile = "";
                      self.org_name = "";
                      self.org_address = "";
                      self.showSuccess = true;
                      self.comment = "";
                    })
                    .catch(err2 => {});
                })
                .catch(err1 => {});
            })
            .catch(err => {});
        } else {
          axios
            .post(pipedrive_url + "/persons" + api_token, {
              name: self.first_name + " " + self.last_name,
              email: self.email,
              phone: self.mobile
            })
            .then(msg1 => {
              axios
                .post(pipedrive_url + "/deals" + api_token, {
                  title: self.$route.query.title,
                  value: self.$route.query.value,
                  person_id: msg1.data.id,
                  stage_id: 8,
                  "01c9bed1b2ae3ca5eaaea932091539aaa79d2cb9": self.comment
                })
                .then(msg2 => {
                  self.first_name = "";
                  self.last_name = "";
                  self.email = "";
                  self.mobile = "";
                  self.org_name = "";
                  self.org_address = "";
                  self.showSuccess = true;
                  self.comment = "";
                })
                .catch(err2 => {});
            })
            .catch(err1 => {});
        }
      } else {
        axios
          .post(pipedrive_url + "/persons" + api_token, {
            name: self.first_name + " " + self.last_name,
            org_id: self.org_id,
            email: self.email,
            phone: self.mobile
          })
          .then(msg1 => {
            axios
              .post(pipedrive_url + "/deals" + api_token, {
                title: self.$route.query.title,
                value: self.$route.query.value,
                person_id: msg1.data.id,
                org_id: self.org_id,
                stage_id: 8,
                "01c9bed1b2ae3ca5eaaea932091539aaa79d2cb9": self.comment
              })
              .then(msg2 => {
                self.first_name = "";
                self.last_name = "";
                self.email = "";
                self.mobile = "";
                self.org_name = "";
                self.org_address = "";
                self.showSuccess = true;
                self.comment = "";
              })
              .catch(err2 => {});
          })
          .catch(err1 => {});
      }
    }
  },
  title() {
    return "iBobil AS - Nye bobiler i Nord-Norge og brukte bobiler i til hele Norge";
  },

  description() {
    return "Bobilen din finner du hos iBobil, vi leverer nye bobiler fra Challenger, Eura Mobil, Concordre samt brukte fra alle produsenter.";
  },
  mounted() {
    // this.activeurl = this.$store.state.currenturl
    //   ? this.$store.state.currenturl
    //   : "Direct";
    var my_awesome_script = document.createElement("script");
    my_awesome_script.setAttribute(
      "src",
      "https://d952cmcgwqsjf.cloudfront.net/assets/webform-5ecfee3987a35c65f7feafdc76f38eb24a2426c6.js"
    );

    document.getElementById("appendscript").appendChild(my_awesome_script);
  }
};
</script>

<style scoped>
.loader-box {
  width: 100%;
  margin: auto;
  margin-top: 50px;
  text-align: center;
}

.loader {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  border-top: 3px solid #ffa800;
  border-bottom: 3px solid #ffa800;
  border-left: 3px solid #ffffff;
  border-right: 3px solid #ffa800;
  display: block;
  margin: 25px auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#loader-text {
  vertical-align: middle;
  text-align: center;
  color: #333;
  display: inline-block;
  vertical-align: middle;
  margin-top: -20px;
  height: 100%;
}

.fserv-body {
  background-color: #fff5e5 !important;
}

.fserv-container {
  font-family: inherit !important;
  background-color: #ffffff !important;
  width: 100% !important;
  max-width: 640px;
  border-radius: 0px;
  border: solid 1px #c2c8cd;
}

.fserv-form-name {
  color: #000000 !important;
  font-size: 24px !important;
  font-weight: bold;
}

button[type="submit"].fserv-button-submit {
  background: linear-gradient(#5897cf, #4591cc, #5897cf) !important;
}

.fserv-container button[type="submit"].fserv-button-submit.btn-saving::after {
  background-color: rgba(255, 255, 255, 0.3) !important;
}

.fserv-label,
.fserv-form-description {
  color: #666666 !important;
  font-size: 14px;
}

.fserv-container .fserv-hidden {
  display: none;
}

.loader {
  border-top: 3px solid #ffa800;
  border-bottom: 3px solid #ffa800;
  border-left: 3px solid #ffffff;
  border-right: 3px solid #ffa800;
}

.form-modal {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  background: #f5f5f5 !important;
  padding-top: 20px;
}
.showerror {
  display: inline-block;
}
.showSuccess {
  display: block;
  opacity: 1;
  background: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
}
textarea.comment {
  background-color: #fff !important;
  background-image: none !important;
  border: 1px solid #e8e8e8 !important;
  padding: 0 10px !important;
  width: 100% !important;
  border-bottom: 1px solid var(--form-theme-color);
  color: black;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 1em;
  border-radius: 0;
  line-height: 22px;
  display: block;
  padding: 5px;
  width: 60%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  resize: none;
  color: #333 !important;
  font-size: 12px !important;
  font-weight: 400 !important;
}
</style>


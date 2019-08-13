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
              <span>Tusen takk, din henvendelse er mottatt.</span>
              <a class="close" @click="()=> { this.showSuccess = false}">×</a>
            </div>
            <h2 class="fserv-form-name">Få tilbud på denne enheten</h2>
            <label
              class="fserv-form-description"
            >Fyll ut skjemaet nedenfor og en av representantene våre vil kontakte deg snart.</label>
            <!-- <form action="https://icaravan.freshsales.io/smart_form/create_entity"
            method="POST" novalidate="novalidate">-->
            <div class="fserv-form">
              <div class="fserv-field fserv-required">
                <label class="fserv-label">HVA HETER DU?</label>
                <input
                  class="fserv-input-text"
                  name="lead[first_name]"
                  type="text"
                  placeholder="Enter value"
                  v-model="first_name"
                >
                <label
                  id="lead[last_name]-error"
                  :class="{'error':true, 'hide':true,'show':showerror1}"
                  for="lead[last_name]"
                >Name can't be empty.</label>
                <div class="fserv-control" style="display:none;"></div>
              </div>
              <div class="fserv-field fserv-required">
                <label class="fserv-label">HVA ER DITT MOBILNUMMER?</label>
                <input
                  class="fserv-input-text"
                  name="lead[mobile_number]"
                  type="tel"
                  placeholder="Enter value"
                  v-model="mobile_number"
                >
                <label
                  id="lead[last_name]-error"
                  :class="{'error':true, 'hide':true,'show':showerror4}"
                  for="lead[last_name]"
                >Mobile can't be empty.</label>
                <div class="fserv-control" style="display:none;"></div>
              </div>
              <div class="fserv-field fserv-required">
                <label class="fserv-label">HVA ER DIN E-POSTADRESSE?</label>
                <input
                  data-regex-format="^[-a-zA-Z0-9.'’&amp;_%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$"
                  data-regex-message="is invalid"
                  data-regex-format-error="is invalid."
                  class="fserv-input-text"
                  name="lead[email]"
                  type="email"
                  placeholder="Enter value"
                  v-model="email"
                >
                <label
                  id="lead[last_name]-error"
                  :class="{'error':true, 'hide':true,'show':showerror3}"
                  for="lead[last_name]"
                >Email can't be empty.</label>
                <div class="fserv-control" style="display:none;"></div>
              </div>
              <div class="fserv-field fserv-required">
                <label class="fserv-label">HAR DU INNBYTTE DU ØNSKER Å FÅ MED I TILBUD (REGNUMMER)?</label>
                <textarea v-model="comment" class="comment" placeholder rows="3"></textarea>
                <label
                  id="lead[last_name]-error"
                  :class="{'error':true, 'hide':true,'show':showerror5}"
                  for="lead[last_name]"
                >Comment can't be empty.</label>
                <div class="fserv-control" style="display:none;"></div>
              </div>
              <div class="fserv-field fserv-required fserv-hidden">
                <label class="fserv-label">Url</label>
                <input
                  data-regex-required-error="can't be empty."
                  data-regex-required="([^\s])"
                  class="fserv-input-text"
                  name="lead[custom_field][cf_url]"
                  type="text"
                  placeholder="Enter value"
                  v-model="activeurl"
                >
                <div class="fserv-control" style="display:none;"></div>
              </div>
              <div class="fserv-field fserv-required fserv-hidden">
                <label class="fserv-label">entity type</label>
                <input
                  data-regex-required-error="can't be empty."
                  data-regex-required="([^\s])"
                  class="fserv-input-text"
                  name="entity_type"
                  type="text"
                  value="1"
                >
                <div class="fserv-control" style="display:none;"></div>
              </div>
              <div class="fserv-field fserv-required fserv-hidden">
                <label class="fserv-label">web form id</label>
                <input
                  data-regex-required-error="can't be empty."
                  data-regex-required="([^\s])"
                  class="fserv-input-text"
                  name="asset_key"
                  type="text"
                  value="dd43eaec6c0a3de5b4c2ae2cdb33759986c37f3ff9081b128baae352ba6014f7"
                >
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
      mobile_number: "",
      org_name: "",
      org_address: "",
      url: "",
      comment: "",
      showerror: false,
      showerror1: false,
      showerror2: false,
      showerror3: false,
      showerror4: false,
      showerror5: false,
      showerror6: false,
      showSuccess: false
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
    submitform() {
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
      if (this.mobile_number == "") {
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
      var pipedrive_url = "https://ibobil.pipedrive.com/v1";
      var api_token = "?api_token=4f13e510368fe6f476da040c6bf8eb76c0272caa";
      var self = this;
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
                phone: self.mobile_number
              })
              .then(msg1 => {
                axios
                  .post(pipedrive_url + "/deals" + api_token, {
                    title: self.$route.query.title,
                    value: self.$route.query.value,
                    person_id: msg1.data.id,
                    org_id: msg.data.id,
                    stage_id: 3,
                    "01c9bed1b2ae3ca5eaaea932091539aaa79d2cb9": self.comment
                  })
                  .then(msg2 => {
                    self.first_name = "";
                    self.last_name = "";
                    self.email = "";
                    self.mobile_number = "";
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
            phone: self.mobile_number
          })
          .then(msg1 => {
            axios
              .post(pipedrive_url + "/deals" + api_token, {
                title: self.$route.query.title,
                value: self.$route.query.value,
                person_id: msg1.data.data.id,
                stage_id: 3,
                "01c9bed1b2ae3ca5eaaea932091539aaa79d2cb9": self.comment
              })
              .then(msg2 => {
                self.first_name = "";
                self.last_name = "";
                self.email = "";
                self.mobile_number = "";
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


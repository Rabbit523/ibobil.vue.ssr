<template></template>

<script>
import axios from "axios";

export default {
  name: "Logout",

  data() {
    return {};
  },
  title() {
    return "iBobil AS - Nye bobiler i Nord-Norge og brukte bobiler i til hele Norge";
  },
  description() {
    return "Bobilen din finner du hos iBobil, vi leverer nye bobiler fra Challenger, Eura Mobil, Concordre samt brukte fra alle produsenter.";
  },
  beforeCreate() {
    var self = this;
    var token = localStorage.getItem("token");
    if (token) {
      axios
        .post(this.SERVER_URL + "logout?token=" + token)
        .then(data => {
          localStorage.removeItem("token");
          localStorage.removeItem("user-info");
          this.$router.replace("/login");
        })
        .catch(error => {
          localStorage.removeItem("token");
          localStorage.removeItem("user-info");
          this.$router.replace("/login");
        });
    }
    this.$router.replace("/login");
  }
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>

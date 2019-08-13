<template>
  <div id="login-wrapper">
    <div class="top-wrapper">
      <router-link to="/" class="blue-btn shadowed my-btn">SE ALLE BOBILER</router-link>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 col-sm-12">
          <div class="login-form">
            <div class="logo-wrapper">
              <router-link to="/" class="logo">
                <img src="~public/img/logo.png" alt>
              </router-link>
            </div>
            <form v-on:submit.prevent="login()">
              <div v-if="showSuccess" class="green">{{ successMessage }}</div>
              <div v-if="showError" class="red">{{ error }}</div>
              <div v-if="showInvalidError" class="red">{{ invalidError }}</div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-at"></i>
                </span>
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  name="email"
                  placeholder="E-post"
                  v-model="email"
                >
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-lock"></i>
                </span>
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Passord"
                  v-model="password"
                >
              </div>
              <button
                class="blue-btn shadowed my-btn full-width"
                :disabled="disabled"
                v-html="buttonText"
              ></button>
            </form>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "login-view",
  data() {
    return {
      email: "",
      password: "",
      disabled: false,
      buttonText: "LOG IN"
    };
  },
  methods: {
    login() {
      this.disabled = true;
      this.buttonText = '<i class="fa fa-spinner fa-spin"></i> LOGGING IN';

      var credential = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("POST_LOGIN", { credential }).then(data => {
        this.email = "";
        this.password = "";
        this.disabled = false;
        this.$router.replace("/admin/page");
      });
    }
  },
  title() {
    return "title";
  },
  description() {
    return "Vi leverer nye bobiler til hele Nord-Norge, brukte bobiler leverer vi til hele Norge.";
  }
};
</script>

<style scoped>
</style>

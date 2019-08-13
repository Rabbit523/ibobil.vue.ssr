<template>
  <div class="col-md-2 col-sm-12 admin-header sticky-sidebar">
    <div class="col-md-12 col-sm-6 col-xs-6">
      <div class="logo-wrapper">
        <router-link to="/" class="logo">
          <img src="~public/img/logo.png" alt>
        </router-link>
      </div>
    </div>
    <div id="admin-nav" class="col-md-12">
      <div class="nav-wrapper">
        <li class="active font-12" v-for="(nav, index) in navs" :key="index">
          <router-link
            :to="nav.url"
            :class="{'active-link':(nav.url == '/admin_sider' && (current_path == '/edit_home' || current_path == '/edit_brands' || current_path == '/edit_about' || current_path == '/edit_finance' || current_path == '/edit_rv' || current_path == '/edit_caravan' || current_path == '/edit_top'))}"
          >{{nav.title}}</router-link>
        </li>
      </div>
    </div>
    <div class="col-md-12 copyright">
      <p>© 2018 ICARAVAN AS.</p>
      <p>
        UI/UX DESIGN & WEBUTVIKLING:
        <span class="blue-text">FANTASYLAB.</span>
      </p>
    </div>
    <div class="col-sm-6 col-xs-6">
      <div class="admin-menu-btn font-20">
        <span>MENY</span>
        <span class="glyphicon glyphicon-menu-hamburger"></span>
      </div>
      <div class="admin-menu-btn hidden font-20">
        <span>LUKK</span>
        <i class="fa fa-close"></i>
      </div>
    </div>
    <div class="admin-mobile-menu hidden">
      <div class="nav-wrapper">
        <li class="active font-22" v-for="(nav, index) in navs" :key="index">
          <router-link v-bind:to="nav.url">{{nav.title}}</router-link>
        </li>
        <button class="blue-btn shadowed my-btn login-btn font-20">FÅ ET TILBUD</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      current_path: "",
      navs: [
        { title: "Sider", url: "/admin/page" },
        { title: "Bobiler", url: "/admin/bobil" },
        { title: "Campingvogn", url: "/admin/caravan" },
        { title: "Footer", url: "/admin/footer" },
        { title: "Innstillinger", url: "/admin/settings" },
        { title: "Logg ut", url: "/logout" }
      ],
      default_image: require("../../public/img/icons/avarta1.png")
    };
  },
  created() {}
};
</script>

<style>
.router-link-exact-active {
  /*border-bottom:3px solid #3A8ECA;*/
  color: #3a8eca !important;
}
.active-link {
  color: #3a8eca !important;
}
@media (min-width: 768px) {
  .sticky-sidebar {
    position: fixed;
    max-width: 20%;
  }
}

a:hover,
a:focus {
  text-decoration: none;
}
</style>


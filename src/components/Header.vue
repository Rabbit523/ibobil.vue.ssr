<template>
  <header class="header">
    <div class="nav-bar">
      <div class="row">
        <div class="col-md-2 col-sm-6 col-xs-6">
          <div class="logo-wrapper">
            <router-link to="/" class="logo">
              <img src="~public/img/logo.png" alt>
            </router-link>
          </div>
        </div>
        <div id="nav" class="col-md-8 col-sm-12">
          <div class="nav-wrapper">
            <template v-for="nav in navs">
              <template v-if="nav.title == 'KUNDESERVICE'">
                <li v-bind:key="nav.title" class="active font-12">
                  <a :href="nav.url" target="_blank">{{nav.title}}</a>
                </li>
              </template>
              <template v-else>
                <router-link v-bind:key="nav.title" tag="li" :to="nav.url" class="active font-12">
                  <a>{{nav.title}}</a>
                </router-link>
              </template>
            </template>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-xs-6">
          <div :class="{'mobile-menu-btn':true,'hide':!hide, 'font-20':true}" @click="closeMenu">
            <span>MENY</span>
            <span class="glyphicon glyphicon-menu-hamburger"></span>
          </div>
          <div :class="{'mobile-menu-btn':true, 'hide':hide, 'font-20':true}" @click="closeMenu">
            <span>LUKK</span>
            <i class="fa fa-close"></i>
          </div>
          <router-link
            target="_blank"
            tag="a"
            to="/form1?value=000&title=GÅ TIL SKJEMA"
            class="blue-btn shadowed my-btn login-btn font-12 my-btn-2 pointer"
          >FÅ ET TILBUD</router-link>
        </div>
      </div>
    </div>
    <div class="market-info-bar">
      <div class="row full-width">
        <div class="col-md-1"></div>
        <div class="col-md-10 col-sm-12">
          <div class="market-info-wrapper row">
            <li class="market-info" v-for="info in info" v-bind:key="info">
              <img src="~public/img/icons/check-icon.png" alt>
              <span class="font-12">{{info}}</span>
            </li>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
    <div :class="{'mobile-menu':true,'hide':hide}">
      <div class="nav-wrapper">
        <li class="active font-22" v-for="(nav, index) in navs" @click="closeMenu" :key="index">
          <router-link v-bind:to="nav.url">{{nav.title}}</router-link>
        </li>
        <router-link
          tag="a"
          to="/form1?value=&title="
          class="blue-btn shadowed my-btn login-btn font-20 my-btn-2"
        >FÅ ET TILBUD</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import ResponsiveNav from "./ResponsiveNav.vue";

export default {
  data() {
    return {
      hide: true,
      navs: [
        { title: "HJEM", url: "/" },
        { title: "MERKER", url: "/merker" },
        { title: "CAMPINGVOGN", url: "/campingvogn" },
        { title: "BOBIL", url: "/bobil" },
        { title: "FINANSIERING", url: "/finansiering" },
        { title: "OM OSS", url: "/om-oss" },
        {
          title: "KUNDESERVICE",
          url: "https://caravan.freshdesk.com/support/home"
        }
      ],
      info: [
        "Verkstedgodkjent",
        "Opptil 5 årsgaranti ",
        "Nye og brukte enehter",
        "Gode finansieringsmuligheter ",
        "Vi er her etter handelen"
      ]
    };
  },
  components: {
    ResponsiveNav
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
    }
  }
};
</script>

<style scoped>
.hide {
  display: none;
}

.my-btn-2:hover,
.my-btn-2:focus {
  color: white !important;
  text-decoration: none;
}
header .nav-bar {
  position: fixed;
  top: 0px;
  width: 100%;
  margin: auto;
  z-index: 99;
  background: #fff;
}
header .nav-bar .row {
  width: 82%;
  margin: auto;
}
.market-info-bar {
  margin-top: 100px;
}
.market-info-bar .font-12 {
  padding-left: 6px;
}
</style>

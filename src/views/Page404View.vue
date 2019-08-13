<template>
  <div>
    <div class="container">
      <div class="toggle-wrapper row">
        <div class="col-md-12">
          <button :class="{'btn':true, 'blue-btn':true, 'show':!show}" @click="toggleShow">VIS TREFF</button>
          <button :class="{'btn':true, 'show':show}" @click="toggleShow">ENDRE SØK</button>
        </div>
      </div>
      <div data-v-3404c0ad class="article-container container">
        <div class="contact-wrapper" style="padding: 100px 0px;">
          <p class="section-title font-33">
            <a>Error 404: Siden ble ikke funnet.</a>
          </p>
          <p class="font-20">Whoops! Du har søkt etter en side som ikke eksisterer. Gå til
            <router-link tag="span" to="/" class="pointer">
              <a>forsiden</a>
            </router-link>
          </p>
          <p
            class="font-20"
          >eller utforsk våre bobiler og campingvogner ved å klikke på en knappene nedenfor.</p>
          <router-link tag="span" to="/bobil" class="pointer">
            <a class="blue-btn shadowed my-btn login-btn font-12 my-btn-2 pointer">ALLE BOBILER</a>
          </router-link>
          <router-link tag="span" to="/campingvogn" class="pointer">
            <a
              class="blue-btn shadowed my-btn login-btn font-12 my-btn-2 pointer"
            >ALLE CAMPINGVOGNER</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-404-view",
  data() {
    return {
      show: false
    };
  },
  asyncData({ store, route }) {
    if (!store.state.homeData) return store.dispatch("FETCH_HOME_DATA");
    return;
  },
  title() {
    return "404 - Siden ble ikke funnet";
  },
  description() {
    return "Bobilen din finner du hos iBobil, vi leverer nye bobiler fra Challenger, Eura Mobil, Concordre samt brukte fra alle produsenter.";
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
</style>


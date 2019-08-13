<template>
  <div class="about-view">
    <div class="about-banner banner">
      <template v-if="top_banner_image">
        <div
          class="parallelogram"
          v-bind:style="{ backgroundImage: 'url(' + top_banner_image + ')' }"
        >
          <div class="container">
            <div class="banner-content">
              <template v-if="top_banner_title">
                <h1 class="font-33 banner-title">{{ top_banner_title }}</h1>
              </template>
              <template v-else>
                <h1 class="font-33 banner-title">Nord-Norges største
                  <br>Caravansenter
                </h1>
              </template>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="parallelogram">
          <div class="container">
            <div class="banner-content">
              <template v-if="top_banner_title">
                <h1 class="font-33 banner-title">{{ top_banner_title }}</h1>
              </template>
              <template v-else>
                <h1 class="font-33 banner-title">Nord-Norges største
                  <br>Caravansenter
                </h1>
              </template>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="article-container container">
      <div class="col-md-6">
        <div class="about-article" v-if="article_1" v-html="article_1"></div>
        <div class="about-article" v-else>
          <p class="font-25 title">En familiebedrift</p>
          <p
            class="font-21 sub-title"
          >iCaraven er en familiebedrift som brenner for fritid, ferie go campingliv.</p>
          <br>
          <p
            class="font-18"
          >Siden starten i 2010 har vi opplevd solid vekst og god mottakelse i markedet. Vi er en av Nord-Norges ledende totalleverandør innen bobil og campingvogn, med landsdelens største caravansenter i Strandvegen i Tromsø.</p>
          <br>
          <p
            class="font-18"
          >Våre nye flotter lokaler på 2000kvm rommer alt du trenger for et problemfritt bobilhold og enklere campingliv. Fra markedsledende modeller til verksted, delelager og tilbehør. vi har også egen nettbutikk, med landets største utvalg innen deler og rekvisita til ulike firitdskøretøy</p>
          <br>
          <p
            class="font-18"
          >I samarbeid med kjeden Motorhome har iCaravan også Nord-Norges største senter for bobilutleie lokalisert i Tromsø. Det gir det perfekte utgangspunktet for deg som ønsker å oppleve landsdelens største severdigheter som Lofoten, Nordkapp, Senja og indre Troms. Uansett årstid!</p>
          <br>
          <p class="font-18 foot-title">Søker du gode opplevelser?</p>
          <p class="font-18 foot-title">Start hos oss iCaravan!</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="about-article" v-if="article_2" v-html="article_2"></div>
        <div class="about-article" v-else>
          <p class="font-25 title">Bobilen du trenger</p>
          <p class="font-21 sub-title">Skal du kjøpe bobil, lønner det seg å ta turen til oss.</p>
          <br>
          <p
            class="font-18"
          >Vårt brede utvalg omfatter alt fra populære bestselgere til mer eksluksuive modeller. Vi tilbyr markedetsledende fritidskjøretøy som er konkurransedyktige når det gjelder både utstyrsgrad og pris.</p>
          <br>
          <p
            class="font-18"
          >Hos oss iCaravan har vi helt sikkert det du ser etter! Uansett hva du legger vekt på, vil du finne en bobil som tar hensyn til dine ønsker og behov Fra innovativ design og teknologi, til praktiske løsninger med god plass til både mennesker, utstyr og bagasje.</p>
          <br>
          <p
            class="font-18"
          >Vi vet hva som er viktig å tenke på når du skal kjøpe bobil - og deler mer enn gjerne vår kompetanse med deg! Våre erfarne kjøpshjelpere står alltid klare til å hjelpe deg med å velge den beste løsningen - med hensyn til både behov og lommebok. Har du spørsmål kan du alltid kontakte oss på live chat, telefon eller e-post.</p>
          <br>
          <p class="font-18 foot-title">Ønsker du å vite mer om riktig valg av bobil?</p>
          <p class="font-18 foot-title">
            <span class="blue-text">Se tips og råd</span> fra våre kjøpshjelpere .
          </p>
        </div>
      </div>
      <div class="side-banner side1">
        <img :src="side_images[0]" alt v-if="side_images[0]">
        <img src="~public/img/main/slide2-2.jpg" alt v-else>
      </div>
      <div class="side-banner side2">
        <img :src="side_images[1]" alt v-if="side_images[1]">
        <img src="~public/img/main/left2.jpg" alt v-else>
      </div>
      <div class="side-banner side3">
        <img :src="side_images[2]" alt v-if="side_images[2]">
        <img src="~public/img/main/right1.jpg" alt v-else>
      </div>
      <div class="side-banner side4">
        <img :src="side_images[3]" alt v-if="side_images[3]">
        <img src="~public/img/main/right2.jpg" alt v-else>
      </div>
    </div>

    <div class="banner-slide">
      <div class="slide-wrapper row slide-wrapper1">
        <template v-if="slider_images.length > 0">
          <div class="slide-image" v-for="(image, imageIndex) in slider_images" :key="imageIndex">
            <img :src="image" alt class="image-style" style="width:500px;height:280px">
          </div>
        </template>
        <template v-else>
          <div class="slide-image">
            <img src="~public/img/main/slide2-2.jpg" alt>
          </div>
          <div class="slide-image">
            <img src="~public/img/main/slide1-2.jpg" alt>
          </div>
          <div class="slide-image">
            <img src="~public/img/main/slide1-3.jpg" alt>
          </div>
          <div class="slide-image">
            <img src="~public/img/main/slide1-4.jpg" alt>
          </div>
        </template>
      </div>
    </div>
    <div class="article-container container">
      <div class="col-md-6">
        <div class="about-article" v-html="article_3" v-if="article_3"></div>
        <div class="about-article" v-else>
          <p class="font-25 title">Veien til bedre opplevelser</p>
          <p
            class="font-21 sub-title"
          >iCaravan har som mål å være best på mer enn bare kjøpshjelp og riktig valg av bobil.</p>
          <br>
          <p
            class="font-18"
          >Vi ønsker å gi deg tryggheten du trenger når bobilholdet starter for alvor Da slipper du å bekymre deg og kan heller nyte ferien slik den er ment å nytes.</p>
          <br>
          <p
            class="font-18"
          >Vi har et moderne verksted med stor kapasitet og høy kompetanse. Våre erfarne mekanikere er sertifisert for montering og vedlikehold av utstyr, som gassprodukter, på alle fritidskjøretøy.</p>
          <br>
          <p class="font-18 foot-title">Vi tilbyr også drop-in-timer på testing av
            <br>fukt og gass.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="about-article" v-html="article_4" v-if="article_4"></div>
        <div class="about-article" v-else>
          <p class="font-25 title">Merkeverksted og delelager</p>
          <p
            class="font-21 sub-title"
          >iCaravan er et sertifisert bransjegodkjent gassverksted i Nord-Norge, Tromsø.</p>
          <br>
          <p
            class="font-18"
          >iCaravan er merkeverksted og delelager for produsenter som Challenger, Mobilvetta, Euramobil, Concorde, Caravelair og Camp-let. Vi forhandler også alt innen teknisk utstyr som tv, varme og gass så vel som møbler og annet tilbehør for alle typer firitdskjøretøy.</p>
        </div>
        <div class="stamp" style="text-align: center;">
          <img src="~public/img/main/stamp.png" alt>
        </div>
      </div>
    </div>
    <div class="about-banner2 banner">
      <template v-if="middle_banner_image">
        <div
          class="parallelogram"
          v-bind:style="{ backgroundImage: 'url(' + middle_banner_image + ')' }"
        ></div>
      </template>
      <template v-else>
        <div class="parallelogram"></div>
      </template>
    </div>
    <div class="banner-slide">
      <div class="slide-wrapper row slide-wrapper2">
        <template v-if="middle_slider_images.length > 0">
          <div class="slide-image" v-for="(image, index) in middle_slider_images" :key="index">
            <img :src="image" alt>
          </div>
        </template>
        <template v-else>
          <div class="slide-image" style="display:inline-block">
            <img src="~public/img/main/slide1-2.jpg" alt>
          </div>
          <div class="slide-image" style="display:inline-block">
            <img src="~public/img/main/slide2-2.jpg" alt>
          </div>
          <div class="slide-image" style="display:inline-block">
            <img src="~public/img/main/slide2-3.jpg" alt>
          </div>
          <div class="slide-image" style="display:inline-block">
            <img src="~public/img/main/slide1-4.jpg" alt>
          </div>
        </template>
      </div>
    </div>
    <contact></contact>
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";

export default {
  name: "about-view",

  components: {
    Contact
  },

  data() {
    return {};
  },

  computed: {
    top_banner_image() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "top_banner_image";
      });

      return temp ? temp.value : "";
    },
    top_banner_title() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "top_banner_title";
      });

      return temp ? temp.value : undefined;
    },
    article_1() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "article_1";
      });

      return temp ? temp.value : undefined;
    },
    article_2() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "article_2";
      });

      return temp ? temp.value : undefined;
    },
    article_3() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "article_3";
      });

      return temp ? temp.value : undefined;
    },
    article_4() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "article_4";
      });

      return temp ? temp.value : undefined;
    },
    side_images() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "side_images";
      });

      return temp ? temp.value : [];
    },
    slider_images() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "slider_images";
      });

      return temp ? temp.value : [];
    },
    middle_banner_image() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "middle_banner_image";
      });

      return temp ? temp.value : [];
    },
    middle_slider_images() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "middle_slider_images";
      });

      return temp ? temp.value : [];
    },
    address() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "address";
      });

      return temp ? temp.value : undefined;
    },
    email() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "email";
      });

      return temp ? temp.value : undefined;
    },
    phone() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "phone";
      });

      return temp ? temp.value : undefined;
    },
    metaTitle() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "about_meta_title";
      });

      return temp ? temp.value : "undefined";
    },
    metaDescription() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "about_meta_description";
      });

      return temp ? temp.value : "undefined";
    }
  },

  asyncData({ store, route }) {
    return store.dispatch("FETCH_HOME_DATA");
  },

  title() {
    return this.metaTitle;
  },

  description() {
    return this.metaDescription;
  },
  mounted() {
    document.querySelector("#app").scrollTo(0, 0);
  }
};
</script>

<style scoped>
.image-style {
  height: 200px;
  width: auto;
}
</style>


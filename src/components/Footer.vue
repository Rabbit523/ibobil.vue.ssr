<template>
  <footer>
    <div class="brand-section">
      <div class="container">
        <div class="brand-wrapper">
          <div class="brand">
            <div>
              <a href="/merker/eura-mobil">
                <v-lazy-image src="../../public/img/icons/brand1.png" alt/>
              </a>
            </div>
            <div>
              <a href="/merker/challenger">
                <v-lazy-image src="../../public/img/icons/brand2.png" alt/>
              </a>
            </div>
            <div>
              <a href="/merker/mobilvetta">
                <v-lazy-image src="../../public/img/icons/brand3.png" alt/>
              </a>
            </div>
            <div>
              <a href="/merker/concorde">
                <v-lazy-image src="../../public/img/icons/brand4.png" alt/>
              </a>
            </div>
            <div>
              <a href="/merker/caravelair">
                <v-lazy-image src="../../public/img/icons/brand5.png" alt/>
              </a>
            </div>
            <div>
              <a href="/merker/andre">
                <v-lazy-image src="../../public/img/icons/brand6.png" alt/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper footer-content">
      <!-- TrustBox widget - Slider -->
      <div
        class="trustpilot-widget"
        data-locale="nb-NO"
        data-template-id="54ad5defc6454f065c28af8b"
        data-businessunit-id="5a1ffe140000ff0005b1faa0"
        data-style-height="240px"
        data-style-width="100%"
        data-theme="light"
        data-stars="4,5"
        data-schema-type="Organization"
      >
        <a href="https://no.trustpilot.com/review/ibobil.as" target="_blank">Trustpilot</a>
      </div>
      <!-- End TrustBox widget -->
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-10">
          <div class="social-panel">
            <router-link to="#" class="logo">
              <v-lazy-image src="../../public/img/logo.png" alt/>
            </router-link>
            <p class="font-12" v-if="footerContent" v-html="footerContent"></p>
            <p
              class="font-12"
              v-else
            >iCaraven er en familiebedrift som brenner for fritid, ferie og campingliv. Siden starten i 2010, har vi opplevd solid vekst og god mottakelse i markedet.</p>
            <div class="media-icon-wrapper">
              <a :href="facebookLink" v-if="facebookLink" target="_blank">
                <i class="fa fa-facebook my-color-bot" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/iCaravan" v-else target="_blank">
                <i class="fa fa-facebook my-color-bot" aria-hidden="true"></i>
              </a>
              <a :href="twitterLink" v-if="twitterLink" target="_blank">
                <i class="fa fa-twitter my-color-bot" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/icaravan" v-else target="_blank">
                <i class="fa fa-twitter my-color-bot" aria-hidden="true"></i>
              </a>
              <a :href="googleLink" v-if="googleLink" target="_blank">
                <i class="fa fa-google-plus my-color-bot" aria-hidden="true"></i>
              </a>
              <a href="https://plus.google.com/+CaravanNo" v-else target="_blank">
                <i class="fa fa-google-plus my-color-bot" aria-hidden="true"></i>
              </a>
              <a :href="youtubeLink" v-if="youtubeLink" target="_blank">
                <i class="fa fa-youtube-play my-color-bot" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/user/iCaravanas/" v-else target="_blank">
                <i class="fa fa-youtube-play my-color-bot" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-9 col-sm-12 col-xs-12 external-links">
          <div class="row">
            <div
              class="col-md-3 col-sm-6 col-xs-12 column"
              v-for="(item, itemIndex) in external"
              v-bind:key="itemIndex"
            >
              <div>
                <p class="title font-15">{{item.title}}</p>
                <li
                  v-for="(list, listIndex) in item.list"
                  class="font-12 item"
                  v-bind:key="listIndex"
                >
                  <a :href="list.url" :target="item.title=='ICARAVANGRUPPEN' ? '_blank' : ''">{{list.text}}</a>
                </li>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 column">
              <div>
                <p class="title font-15">MERKER</p>
                <li
                  v-for="(brand, brandIndex) in brands"
                  class="font-12 item"
                  v-bind:key="brandIndex"
                >
                  <a @click="brandclick(brand.slug)" class="pointer">{{brand.name}}</a>
                </li>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 font-12">
              <p class="title font-15">KUNDESENTER</p>
              <p v-if="phone">
                <span>Tlf:</span>
                {{phone}}
              </p>
              <p v-else>
                <span>Tlf:</span> +47 95 43 43 56
              </p>
              <p v-if="email">
                <span>E-post:</span>
                {{email}}
              </p>
              <p v-else>
                <span>E-post:</span> salg@icaravan.no
              </p>
              <template v-if="address">
                <p>{{address}}</p>
              </template>
              <template v-else>
                <p>
                  <span>iCaravan AS</span>
                  <br>Strandvegen 144B Postboks 2077, Postens bedriftadresse 9266 / TROMSØ
                </p>
                <p>Orgnr: 996072991</p>
                <p>Norway</p>
              </template>

              <a v-if="googleLink" :href="googleLink" style="color:#2D9EDC" target="_blank">Google+</a>
              <a
                v-else
                href="https://plus.google.com/+CaravanNo"
                style="color:#2D9EDC"
                target="_blank"
              >Google+</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bar">
      <div class="wrapper">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <p class="font-12">
              © iBobil AS
              {{ new Date().getFullYear() }}. Med enerett.
              <br>UI/UX design & Full Stack utvikling:
              <a
                href="https://fantasylab.io/"
                target="_blank"
              >FantasyLab.</a>
            </p>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="footer-icon-wrapper">
              <v-lazy-image src="../../public/img/icons/footer-icon1.png" alt/>
              <v-lazy-image src="../../public/img/icons/footer-icon2.png" alt/>
              <v-lazy-image src="../../public/img/icons/footer-icon3.png" alt/>
              <v-lazy-image src="../../public/img/icons/footer-icon4.png" alt/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      external: [
        {
          title: "ICARAVANGRUPPEN",
          list: [
            {
              text: "IBobil AS",
              url: "https://caravan.no/Kategori/459/IBOBIL-AS"
            },
            {
              text: "iCaravan AS",
              url: "https://caravan.no"
            },
            {
              text: "iBobilverksted AS",
              url: "https://caravan.no/Kategori/461/IBOBILVERKSTED-AS"
            },
            {
              text: "iCaravan Alta AS",
              url: "https://caravan.no/Kategori/462/ICARAVAN-ALTA-AS"
            },
            {
              text: "Klikk & Hent Oslo",
              url: "https://caravan.no/Kategori/463/KLIKK-HENT-OSLO"
            },
            {
              text: "Klikk & hent Tromsø",
              url: "https://caravan.no/Kategori/465/KLIKK-HENT-TROMS%C3%98"
            },
            {
              text: "iCaravan Proff B2B",
              url: "https://caravan.no/Kategori/466/ICARAVAN-PROFF-B2B"
            },
            {
              text: "Affiliatebutikk",
              url: "https://caravan.no/Kategori/467/AFFILATEBUTIKK"
            }
          ]
        },
        {
          title: "IBOBIL",
          list: [
            {
              text: "Hjem",
              url: "/"
            },
            {
              text: "Merker",
              url: "/merker"
            },
            {
              text: "Campingvogn",
              url: "/campingvogn"
            },
            {
              text: "Bobil",
              url: "/bobil"
            },
            {
              text: "Om oss",
              url: "/om-oss"
            },
            {
              text: "Kunderservice",
              url: "https://caravan.freshdesk.com/support/home"
            }
          ]
        }
      ]
    };
  },
  computed: {
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
    facebookLink() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "facebook_link";
      });

      return temp ? temp.value : undefined;
    },
    twitterLink() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "twitter_link";
      });

      return temp ? temp.value : undefined;
    },
    googleLink() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "google_link";
      });

      return temp ? temp.value : undefined;
    },
    pinterestLink() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "pinterest_link";
      });

      return temp ? temp.value : undefined;
    },
    youtubeLink() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "youtube_link";
      });

      return temp ? temp.value : undefined;
    },
    footerContent() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "footer_content";
      });

      return temp ? temp.value : undefined;
    },
    brands() {
      var _brands = this.$store.state.brands || [];
      _brands = _brands && _brands.length > 5 ? _brands.slice(0, 5) : _brands;
      _brands.push({
        name: "Vis alle"
      });
      return _brands;
    }
  },
  beforeMount() {
    // if (!this.$store.state.brands) {
    //   this.$store.dispatch("FETCH_BRAND_DATA");
    // }
    // if (!this.$store.state.homeData) {
    //   this.$store.dispatch("FETCH_HOME_DATA");
    // }
  },
  methods: {
    brandclick(id) {
      if (id === undefined) {
        this.$router.push({ path: "/merker" });
      } else {
        this.$router.push({ path: "/merker/" + id });
      }
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.width-100 {
  width: 200px;
  height: auto;
}

.my-color-bot {
  color: black;
}
.my-color-bot:hover {
  color: #5897cf;
}
</style>

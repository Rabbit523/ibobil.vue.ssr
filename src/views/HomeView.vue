<template>
  <div class="home-view">
    <div
      class="top-banner banner"
      v-if="home_top_image"
      v-bind:style="{ backgroundImage: 'url(' + home_top_image + ')' }"
    >
      <div class="gradient-back">
        <div class="container">
          <div class="banner-content">
            <p
              class="sign_letter"
              v-if="home_top_sub_headline"
              style="color:white"
            >{{ home_top_sub_headline }}</p>
            <p class="sign_letter" v-else style="color:white">gode tilbud</p>
            <h1
              class="font-33 banner-title"
              v-if="home_top_headline"
              style="color:white"
            >{{ home_top_headline }}</h1>
            <h1 class="font-33 banner-title" v-else style="color:white">BOBILEN DU TRENGER</h1>
            <p v-if="home_top_text" v-html="home_top_text" style="color:white"></p>
            <p
              v-else
              style="color:white"
            >Skal du kjøpe bobil, lønner det seg å ta turen til oss. Vårt brede utvalg omfatter alt fra populære best-selgere til mer eksklusive modeller.</p>
            <router-link tag="button" to="/bobil" class="blue-btn shadowed my-btn">SE ALLE BOBILER</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="top-banner banner" v-else>
      <div class="gradient-back">
        <div class="container">
          <div class="banner-content">
            <p
              class="sign_letter"
              v-if="home_top_sub_headline"
              style="color:white"
            >{{ home_top_sub_headline }}</p>
            <p class="sign_letter" v-else style="color:white">Gode tilbud</p>
            <h1
              class="font-33 banner-title"
              v-if="home_top_headline"
              style="color:white"
            >{{ home_top_headline }}</h1>
            <h1 class="font-33 banner-title" v-else style="color:white">BOBILEN DU TRENGER</h1>
            <p v-if="home_top_text" v-html="home_top_text" style="color:white"></p>
            <p
              v-else
              style="color:white"
            >Skal du kjøpe bobil, lønner det seg å ta turen til oss. Vårt brede utvalg omfatter alt fra populære best-selgere til mer eksklusive modeller.</p>
            <router-link tag="button" to="/bobil" class="blue-btn shadowed my-btn">SE ALLE BOBILER</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row seller-contact">
        <div class="col-md-4">
          <router-link to="/form1?value=000&title=GÅ TIL SKJEMA">
            <div
              class="seller-contact-panel shadowed blue-btn my-panel"
              @mouseover="document_image"
              @mouseleave="document_image2"
            >
              <v-lazy-image
                ref="document_image"
                src="../../public/static/document.svg"
                alt
                id="document_image"
                style="height: 80px;margin-right:10px;margin-left:-10px"
              />
              <div class="panel-content">
                <div>
                  <p class="panel-title font-21">Få et tilbud</p>
                  <p
                    class="panel-description font-13"
                  >Fyll ut et enkelt skjema og vi tar kontakt med deg.</p>
                </div>
                <router-link
                  tag="a"
                  to="/form1?value=000&title=GÅ TIL SKJEMA"
                  class="linkToForm font-13 my-btn-2"
                >
                  GÅ TIL SKJEMA
                  <v-lazy-image src="../../public/img/icons/right-arrow.png" alt/>
                </router-link>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/finansiering">
            <div
              class="seller-contact-panel shadowed blue-btn my-panel"
              @mouseover="handshake_image"
              @mouseleave="handshake_image2"
            >
              <v-lazy-image
                src="../../public/static/handshake.svg"
                alt
                ref="handshake_image"
                id="handshake_image"
                style="height: 80px;margin-right:10px;margin-left:-10px"
              />
              <div class="panel-content">
                <div>
                  <p class="panel-title font-21">Søk finansiering</p>
                  <p class="panel-description font-13">Vi hjelper deg med finansiering av din bobil.</p>
                </div>
                <router-link to="/finansiering" class="linkToForm font-13 my-btn-2">
                  LÅNEKALKULATOR
                  <v-lazy-image src="../../public/img/icons/right-arrow.png" alt/>
                </router-link>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <a href="https://caravan.freshdesk.com/support/home" target="_blank">
            <div
              class="seller-contact-panel shadowed blue-btn my-panel"
              @mouseover="customer_image"
              @mouseleave="customer_image2"
            >
              <v-lazy-image
                src="../../public/static/customer-support.svg"
                alt
                ref="customer_image"
                id="customer_image"
                style="height: 80px;margin-right:10px;margin-left:-10px"
              />
              <div class="panel-content">
                <div>
                  <p class="panel-title font-21">Kundeservice</p>
                  <p class="panel-description font-13">Vi er her for deg etter handelen også.</p>
                </div>
                <a
                  tag="a"
                  href="https://caravan.freshdesk.com/support/home"
                  target="_blank"
                  class="linkToForm font-13 my-btn-2"
                >
                  KONTAKT OSS
                  <v-lazy-image src="../../public/img/icons/right-arrow.png" alt/>
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="row m-20-0">
        <div class="product">
          <div class="row">
            <product-item v-if="weeklyProduct" :item="weeklyProduct" tag="UKENS BOBIL"></product-item>
            <product-item v-if="newProduct" :item="newProduct" tag="SISTE NYESTE BOBIL"></product-item>
            <product-item v-if="usedProduct" :item="usedProduct" tag="SISTE BRUKTE BOBIL"></product-item>
            <product-item v-if="saleProduct" :item="saleProduct" tag="BOBIL PA TILBUD"></product-item>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery-banner banner gallery-banner2">
      <div class="gradient-back gradient-back2">
        <div class="container">
          <div class="banner-content banner-content2">
            <p class="sign_letter sign_letter2" id="sign_letter_new" v-html="signLetter"></p>
            <p id="film_description_new" v-html="filmDescription"></p>
            <a target="blank" href="https://www.ibobiltv.no/">
              <button class="blue-btn shadowed circle-btn video-play">
                <v-lazy-image src="../../public/img/icons/play.png" alt/>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row m-20-0">
        <div class="section-title flex-between">
          <div class="category-sort">
            <span class="font-25 color-blue">Bobiler</span>
            <span class="color-grey">- siste brukte bobiler</span>
          </div>
          <div class="link">
            <span class="color-blue pointer" @click="brukte_bobiler()">Se alle brukte bobiler >></span>
          </div>
        </div>
        <div class="product">
          <div class="row">
            <template v-for="(data,index) in oldProducts">
              <product-item v-if="index < 4" :item="data" :key="index"></product-item>
            </template>
          </div>
        </div>
      </div>
      <div class="row m-20-0">
        <div class="section-title flex-between">
          <div class="category-sort">
            <span class="font-25 color-blue">Bobiler</span>
            <span class="color-grey">- siste nye bobiler</span>
          </div>
          <div class="link">
            <span class="color-blue pointer" @click="nye_bobiler()">Se alle nye bobiler >></span>
          </div>
        </div>
        <div class="product">
          <div class="row">
            <template v-for="(data,index) in newProducts">
              <product-item v-if="index < 4" :item="data" :key="index"></product-item>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <a href="https://caravan.no/" target="_blank">
        <div class="ad-wrapper"></div>
      </a>
    </div>
    <contact></contact>
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";
import ProductItem from "../components/Item.vue";
export default {
  name: "home-view",

  components: {
    Contact,
    ProductItem
  },
  data() {
    return {
      user: {
        errors: [],
        _id: "",
        villa: "",
        email: ""
      },
      contactForm: [
        {
          title: "Få et tilbud",
          description: "Fyll ut et enkelt skjema og vi tar kontakt med deg.",
          icon: require("../../public/static/document.svg"),
          linkString: "GÅ TIL SKJEMA"
        },
        {
          title: "Søk finansiering",
          description: "Vi hjelper deg med finansiering av din bobil.",
          icon: require("../../public/static/handshake.svg"),
          linkString: "LÅNEKALKULATOR"
        }
      ],
      productData: [
        {
          name: "Challenger SIRIUS 3018",
          productionDate: "2012",
          distance: 36600,
          cost: 719000,
          sub: "Autoriser NCB-forhandler",
          img: require("../../public/img/motorhome1.webp")
        },
        {
          name: "Challenger SIRIUS 3018",
          productionDate: "2012",
          distance: 36600,
          cost: 719000,
          sub: "Autoriser NCB-forhandler",
          img: require("../../public/img/motorhome2.webp")
        },
        {
          name: "Challenger SIRIUS 3018",
          productionDate: "2012",
          distance: 36600,
          cost: 719000,
          sub: "Autoriser NCB-forhandler",
          img: require("../../public/img/motorhome3.webp")
        },
        {
          name: "Challenger SIRIUS 3018",
          productionDate: "2012",
          distance: 36600,
          cost: 719000,
          sub: "Autoriser NCB-forhandler",
          img: require("../../public/img/motorhome4.webp")
        }
      ],
      contactInfo: [
        {
          img: require("../../public/img/icons/contact-icon1.png"),
          title: "Besøk oss i dag  Strandvegen 144B, 9006 Tromsø Google Kart"
        }
      ],
      width: 0,
      products: [],
      newproducts: [],
      oldproducts: [],
      weekly_motorhome: "",
      new_motorhome: "",
      used_motorhome: "",
      sale_motorhome: "",

      weekly_motorhome_product: "",
      new_motorhome_product: "",
      used_motorhome_product: "",
      sale_motorhome_product: "",
      infos: [],
      home_top_sub_headline: "",
      home_top_headline: "",
      home_top_text: "",
      home_top_image: "",
      brand_top_headline: "",
      brand_top_sub_headline: "",
      brand_top_image: "",
      meta_title: "",
      meta_description: "",
      sign_letter: "",
      film_description: ""
    };
  },
  computed: {
    oldProducts() {
      return (
        this.$store.state.products &&
        this.$store.state.products.filter(product => {
          return product.adata.mileage;
        })
      );
    },
    newProducts() {
      return (
        this.$store.state.products &&
        this.$store.state.products.filter(product => {
          return !product.adata.mileage;
        })
      );
    },
    homeTopHeadline() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "home_top_headline";
      });

      return temp ? temp.value : undefined;
    },
    homeTopSubHeadline() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "home_top_sub_headline";
      });

      return temp ? temp.value : undefined;
    },
    homeTopText() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "home_top_text";
      });

      return temp ? temp.value : undefined;
    },
    homeTopImage() {
      var _topImage = this.$store.state.homeData.find(product => {
        return product.key == "home_top_image";
      });

      return _topImage ? _topImage.value : undefined;
    },
    brandTopHeadline() {
      var _topHeadline = this.$store.state.homeData.find(product => {
        return product.key == "brand_top_headline";
      });

      return _topHeadline ? _topHeadline.value : undefined;
    },
    brandTopSubHeadline() {
      var _topSubHeadline = this.$store.state.homeData.find(product => {
        return product.key == "brand_top_sub_headline";
      });

      return _topSubHeadline ? _topSubHeadline.value : undefined;
    },
    brandTopImage() {
      var _topImage = this.$store.state.homeData.find(product => {
        return product.key == "brand_top_image";
      });

      return _topImage ? _topImage.value : undefined;
    },
    signLetter() {
      var _letter = this.$store.state.homeData.find(product => {
        return product.key == "sign_letter";
      });

      return _letter ? _letter.value : undefined;
    },
    filmDescription() {
      var _film = this.$store.state.homeData.find(product => {
        return product.key == "film_description";
      });
      return _film ? _film.value : undefined;
    },
    weeklyProduct() {
      var _product = this.$store.state.homeData.find(product => {
        return product.key == "weekly_motorhome";
      });

      if (_product && this.$store.state.products) {
        return this.$store.state.products.find(product => {
          return product.id == _product.value;
        });
      } else {
        return undefined;
      }
    },
    newProduct() {
      var _product = this.$store.state.homeData.find(product => {
        return product.key == "new_motorhome";
      });
      if (_product && this.$store.state.products) {
        return this.$store.state.products.find(product => {
          return product.id == _product.value;
        });
      } else {
        return undefined;
      }
    },
    usedProduct() {
      var _product = this.$store.state.homeData.find(product => {
        return product.key == "used_motorhome";
      });

      if (_product && this.$store.state.products) {
        return this.$store.state.products.find(product => {
          return product.id == _product.value;
        });
      } else {
        return undefined;
      }
    },
    saleProduct() {
      var _product = this.$store.state.homeData.find(product => {
        return product.key == "sale_motorhome";
      });

      if (_product && this.$store.state.products) {
        return this.$store.state.products.find(product => {
          return product.id == _product.value;
        });
      } else {
        return undefined;
      }
    },
    metaTitle() {
      var _title = this.$store.state.homeData.find(product => {
        return product.key == "home_meta_title";
      });

      return _title ? _title.value : "title";
    },
    metaDescription() {
      var _description = this.$store.state.homeData.find(product => {
        return product.key == "home_meta_description";
      });

      return _description ? _description.value : "description";
    }
  },
  methods: {
    brandclick(id) {
      this.$router.push("/merker_caravan");
    },
    handleResize() {
      this.width = $(window).width();
    },
    nye_bobiler() {
      this.$router.push("/nye-bobiler");
    },
    brukte_bobiler() {
      this.$router.push("/brukte-bobiler");
    },
    gotoRV(id) {
      this.$store.state.used = id;
      this.$router.push("/bobil");
    },
    document_image() {
      this.$refs.document_image.src = "public/static/document2.svg";
    },
    document_image2() {
      this.$refs.document_image.src = "public/static/document.svg";
    },
    handshake_image() {
      this.$refs.handshake_image.src = "public/static/handshake2.svg";
    },
    handshake_image2() {
      this.$refs.handshake_image.src = "public/static/handshake.svg";
    },
    customer_image() {
      this.$refs.customer_image.src = "public/static/customer-support2.svg";
    },
    customer_image2() {
      this.$refs.customer_image.src = "public/static/customer-support.svg";
    }
  },

  asyncData({ store, route }) {
    if (!store.state.homeData) return store.dispatch("FETCH_HOME_DATA");
    return;
  },

  title() {
    return this.metaTitle;
  },

  description() {
    return this.metaDescription;
  },

  mounted() {
    if (!this.$store.state.products) this.$store.dispatch("FETCH_RV_DATA");
    document.querySelector("#app").scrollTo(0, 0);
  }
};
</script>

<style scoped>
.color-blue {
  color: #79c7ff;
}
.color-grey {
  color: #ababab;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.product-title {
  color: #000;
}
.product-title:hover {
  color: #2d9edc;
}

.property {
  font-family: "Gotham-Bold";
}

.sub-section-gap {
  padding: 0 10px;
}

.sub-section {
  border-top: 1px solid #d1dbe4;
  border-bottom: 1px solid #d1dbe4;
}
.cost {
  font-family: "Gotham-Bold";
  margin: 0;
}
.sub-section-gap {
  padding: 0 10px;
}
.sub-section {
  padding: 10px;
}
.product-section .product .col-md-12 .sub-section button {
  width: 100%;
  margin: 5px 0;
}
.m-20-0 {
  margin: 20px 0px;
}

.product-hover:hover {
  border: 1px solid #d1dbe4;
}
.button-1 {
  width: 100%;
  margin-bottom: 10px;
  box-shadow: none;
}
.button-2 {
  width: 100%;
}

.sub-section1 {
  border-top: 1px solid #d1dbe4;
  border-bottom: none;
}
.sub-section3 {
  border-top: none;
  border-bottom: none;
}
.myproduct {
  border-radius: 20px;
}

.pointer {
  cursor: pointer;
}
.width100 {
  width: 100%;
}

.top-radius {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  max-height: 180px;
  height: 180px;
}
.product-title {
  min-height: 50px;
}
.product-tag {
  position: relative;
  font-size: 0.8em;
  display: block;
  text-align: right;
  top: 30px;
  right: 10px;
}
.product-tag-inside {
  background: #63bf34;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
}
a {
  display: block;
  text-align: center;
  color: white;
}

.seller-contact-panel:hover {
  background: #4181b6;
}

.gallery-banner2 {
  margin-bottom: 70px;
  background-image: url(~public/static/img/gallery-banner.55d5a77.webp);
  border-radius: 60px;
  background-size: cover;
  background-position-y: center;
  -webkit-transform: skew(-3deg);
  -moz-transform: skew(-3deg);
  -o-transform: skew(-3deg);
  margin-left: -10px;
}

@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill) {
  .gallery-banner2 {
    background-image: url(~public/img/main/gallery-banner.png);
  }
}

@media only screen and (max-width: 580px) {
  .gallery-banner2 {
    background-image: url(~public/img/main/gallery-banner-mobile.webp);
  }
  @supports (-webkit-marquee-repetition: infinite) and (object-fit: fill) {
    .gallery-banner2 {
      background-image: url(~public/img/main/gallery-banner-mobile.png);
    }
  }
}
.banner .gradient-back2 {
  border-radius: 60px;
  background-color: #00000054;
  background-image: none;
  height: 100%;
  padding-top: 150px;
  background-repeat: no-repeat;
}

.sign_letter2 {
  color: white !important;
}

.gallery-banner .gradient-back2 .banner-content p {
  color: white !important;
}

.banner .gradient-back {
  background-image: none;
  background: #00000075;
  border-radius: 60px;
}

.banner {
  border-radius: 60px;
  background-size: cover;
  background-position-y: center;
  -webkit-transform: skew(-3deg);
  -moz-transform: skew(-3deg);
  -o-transform: skew(-3deg);
  margin-top: 15px;
}
</style>


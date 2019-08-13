<template>
  <div>
    <div
      class="top-banner banner"
      v-if="brandTopImage"
      v-bind:style="{ backgroundImage: 'url(' + brandTopImage + ')' }"
    >
      <div class="gradient-back">
        <div class="container">
          <div class="banner-content">
            <p class="sign_letter" v-if="brandTopSubHeadline">{{ brandTopSubHeadline }}</p>
            <p class="sign_letter" v-else>gode tilbud</p>
            <h1 v-if="brandTopHeadline">{{ brandTopHeadline }}</h1>
            <h1 v-else>
              SE ALLE VÅRE
              <br>MERKER
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="brand-banner banner" v-else>
      <div class="gradient-back">
        <div class="container">
          <div class="banner-content">
            <p class="sign_letter" v-if="brandTopSubHeadline">{{ brandTopSubHeadline }}</p>
            <p class="sign_letter" v-else>gode tilbud</p>
            <h1 v-if="brandTopHeadline">{{ brandTopHeadline }}</h1>
            <h1 v-else>
              SE ALLE VÅRE
              <br>MERKER
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="container">
        <p style v-html="brandsDescription" class="brand-description"></p>
      </div>
      <div class="row" style="width:80%;margin:0 auto">
        <div
          class="col-md-4 row product-section product-section1 brand-box pointer"
          v-for="(brand, index) in brands"
          @click="gotobrand(brand)"
          :key="index"
        >
          <img :src="brand.logo" class="brand-logo">
        </div>
      </div>
    </div>
    <contact></contact>
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";

function chunks(array, size) {
  var results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
}

export default {
  components: {
    Contact
  },
  computed: {
    brands() {
      return this.$store.state.brands;
    },
    // updatedBrands() {
    //   return this.$store.state.brands.map(brand => {
    //     brand.products = this.$store.state.products.filter(product => {
    //       return product.adata.make == brand.name;
    //     });
    //     brand.products = chunks(brand.products, 4);
    //     return brand;
    //   });
    // },
    metaTitle() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brand_meta_title";
      });

      return temp ? temp.value : "undefined";
    },
    metaDescription() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brand_meta_description";
      });

      return temp ? temp.value : "undefined";
    },
    brandsDescription() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brands_description";
      });

      return temp ? temp.value : undefined;
    },
    brandTopImage() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brand_top_image";
      });

      return temp ? temp.value : undefined;
    },
    brandTopSubHeadline() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brand_top_sub_headline";
      });

      return temp ? temp.value : undefined;
    },
    brandTopHeadline() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brand_top_headline";
      });

      return temp ? temp.value : undefined;
    },
    homeTopImage() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "home_top_image";
      });

      return temp ? temp.value : undefined;
    },
    homeTopText() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "home_top_text";
      });

      return temp ? temp.value : undefined;
    },
    homeTopSubHeadline() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "home_top_sub_headline";
      });

      return temp ? temp.value : undefined;
    },
    homeTopHeadline() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "home_top_headline";
      });

      return temp ? temp.value : undefined;
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
  methods: {
    gotobrand(brand) {
      this.$router.push({
        name: "BrandItem",
        params: {
          id: brand.slug,
          title: brand.name,
          description: brand.description
        }
      });
    }
  },
  mounted() {
    this.$store.dispatch("FETCH_BRAND_DATA");
    document.querySelector("#app").scrollTo(0, 0);
  }
};
</script>

<style scoped>
.brand-description {
  text-align: center;
  width: 60%;
  margin: 0 auto;
  font-weight: bold;
}
.brand-logo {
  height: auto;
  width: 200px;
}

.product-section1 {
  margin: 25px 0;
  overflow: hidden;
  height: auto;
}

.banner-content {
  margin: auto;
  margin-top: 50px !important;
  margin-left: 80px !important;
}

.banner-content h1 {
  font-size: 33px;
  font-family: "Gotham-Black";
  color: white;
}

.banner .gradient-back {
  background-color: #00000054;
  background-image: none;
  height: 100%;
  padding-top: 150px;
  padding-left: 30vw;
  background-repeat: no-repeat;
  /*-webkit-transform: skew(-3deg);
    	-moz-transform: skew(-3deg);
    	-o-transform: skew(-3deg);*/
  border-radius: 60px;
}
.brand-banner {
  border-radius: 60px;
  background-size: cover;
  background-position-y: center;
  -webkit-transform: skew(-3deg);
  -moz-transform: skew(-3deg);
  -o-transform: skew(-3deg);
  margin-top: 15px;
}
.sign_letter {
  color: white !important;
}

.brand-box {
  padding: 10px 20px;
  text-align: center;
  border-radius: 5px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
}
.brand-box:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>

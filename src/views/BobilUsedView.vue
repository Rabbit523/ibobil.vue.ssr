<template>
  <div class="bobil-view">
    <div class="container">
      <div class="toggle-wrapper row">
        <div class="col-md-12">
          <button :class="{'btn':true, 'blue-btn':true, 'show':!show}" @click="toggleShow">VIS TREFF</button>
          <button :class="{'btn':true, 'show':show}" @click="toggleShow">ENDRE SØK</button>
        </div>
      </div>
      <div class="setting-wrapper">
        <p class="path font-12">
          <router-link tag="span" to="/" class="pointer">Hjem</router-link>
          <i class="fa fa-caret-right"></i>
          <router-link tag="span" to="/bobil" class="pointer">Bobil</router-link>
          <i class="fa fa-caret-right"></i>
          <router-link tag="span" to="/bobil" class="blue-text underlined">Brukte Bobiler</router-link>
        </p>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div :class="{'filter-wrapper':true,'show':!show }">
            <div class="sub-section">
              <button class="accordion active">MERKER</button>
              <div class="panel">
                <div style="padding: 10px 0;">
                  <div v-for="(count,name) in brands" class="filter-list" :key="name">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" @click="toggleBrandFilter($event)" :value="name">
                        {{name}}
                      </label>
                    </div>
                    <span>{{count}}</span>
                  </div>
                </div>
              </div>

              <button class="accordion active">ÅRSMODELL</button>
              <div class="panel">
                <div style="padding: 10px 0;">
                  <div class="filter-list">
                    <input
                      type="text"
                      placeholder="Fra"
                      v-model="minYearFilter"
                      @change="runallfilters"
                    >
                    <span>-</span>
                    <input
                      type="text"
                      placeholder="Til"
                      v-model="maxYearFilter"
                      @change="runallfilters"
                    >
                  </div>
                </div>
              </div>

              <button class="accordion active">KILOMETERSTAND</button>
              <div class="panel">
                <div style="padding: 10px 0;">
                  <div class="filter-list">
                    <input
                      type="text"
                      placeholder="Fra km"
                      v-model="minMileageFilter"
                      @change="runallfilters"
                    >
                    <span>-</span>
                    <input
                      type="text"
                      placeholder="Til km"
                      v-model="maxMileageFilter"
                      @change="runallfilters"
                    >
                  </div>
                </div>
              </div>

              <button class="accordion active">PRIS</button>
              <div class="panel">
                <div style="padding: 10px 0;">
                  <div class="filter-list">
                    <input
                      type="text"
                      placeholder="Fra kr"
                      v-model="minPriceFilter"
                      @change="runallfilters"
                    >
                    <span>-</span>
                    <input
                      type="text"
                      placeholder="Til kr"
                      v-model="maxPriceFilter"
                      @change="runallfilters"
                    >
                  </div>
                </div>
              </div>
              <button class="accordion active">HESTEKREFTER</button>
              <div class="panel">
                <div style="padding: 10px 0;">
                  <div class="filter-list">
                    <input
                      type="text"
                      placeholder="Fra hk"
                      v-model="minHPFilter"
                      @change="runallfilters"
                    >
                    <span>-</span>
                    <input
                      type="text"
                      placeholder="Til hk"
                      v-model="maxHPFilter"
                      @change="runallfilters"
                    >
                  </div>
                </div>
              </div>

              <button class="accordion active">ANTALL SETER</button>
              <div class="panel">
                <div style="padding: 10px 0;">
                  <div class="filter-list">
                    <input
                      type="text"
                      placeholder="Fra"
                      v-model="minSeatFilter"
                      @change="runallfilters"
                    >
                    <span>-</span>
                    <input
                      type="text"
                      placeholder="Til"
                      v-model="maxSeatFilter"
                      @change="runallfilters"
                    >
                  </div>
                </div>
              </div>

              <button class="accordion active">GIRKASSE</button>
              <div class="panel">
                <div style="padding: 10px 0;">
                  <div v-for="(count,name) in transmissions" class="filter-list" :key="name">
                    <div class="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          @click="toggleTransmissionFilter($event)"
                          :value="name"
                        >
                        {{name}}
                      </label>
                    </div>
                    <span>{{count}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="category-wrapper row">
            <!-- New text content for bobil -->
            <div class="col-md-12 label-instruction">
              <div class="col-md-9 col-sm-6">
                <p class="font-25 title">{{bobilerTitle}}</p>
                <p v-html="bobilerDescription"></p>
              </div>
              <div class="col-md-3 col-sm-6">
                <img :src="bobilerImage" alt>
              </div>
            </div>
            <div
              class="product-panel col-md-3 col-sm-6 col-xs-6"
              v-for="data in filteredproducts"
              :key="data.slug"
            >
              <div class="col-md-12" typeof="Product">
                <div class="product-wrapper row pointer" itemprop="slug" @click="saveId(data.slug)">
                  <div class="col-md-12" itemprop="images" style="padding:0;">
                    <img v-if="data.images[0]" v-bind:src="data.images[0].url" alt>
                  </div>
                  <div class="detail col-md-12">
                    <div class="sub-section">
                      <p class="product-title font-13" itemprop="model">{{data.name}}</p>
                      <p class="property font-12">
                        <span
                          itemprop="year"
                          datetime="date"
                        >{{data.adata.year}},&nbsp;&nbsp;&nbsp;{{ data.adata.mileage ? data.adata.mileage : 0 }}km</span>
                      </p>
                    </div>
                    <div class="sub-section-gap">
                      <div class="sub-section">
                        <p class="cost font-16">
                          <span
                            itemprop="prices"
                            itemtype="https://schema.org/offers"
                          >{{data.adata.prices ? data.adata.prices.main : 'N/A' }},-</span>
                        </p>
                        <p
                          class="sub font-10"
                          itemprop="caravan_dealer_segment"
                        >{{data.adata.caravan_dealer_segment}}</p>
                      </div>
                    </div>
                    <div class="sub-section-gap">
                      <div
                        style="display:flex;align-items:center;padding:10px 20px;margin-bottom:10px;border-bottom: 1px solid #eee;"
                      >
                        <div>
                          <img src="~public/static/santander.jpg" alt class="santander-image">
                        </div>
                        <div class="col-xs-6" style>
                          <p style="font-size: 0.7em;margin:0">Vi tilbyr Caravanlån</p>
                        </div>
                      </div>
                    </div>
                    <div class="sub-section row">
                      <div class="col-md-12">
                        <button
                          class="blue-btn shadowed my-btn font-12"
                          v-on:click="saveId(data.slug)"
                          itemprop="availability"
                        >MER INFO</button>
                      </div>
                    </div>
                  </div>
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
import _ from "lodash";

export default {
  name: "bobil-view",

  data() {
    return {
      show: false,
      user: {
        errors: [],
        _id: "",
        villa: "",
        email: ""
      },
      MerkerFilter: [
        {
          title: "Eura Mobil",
          number: "53"
        },
        {
          title: "Challenger",
          number: "19"
        },
        {
          title: "Mobilvetta",
          number: "30"
        },
        {
          title: "Concorde",
          number: "46"
        },
        {
          title: "Caravelair",
          number: "65"
        },
        {
          title: "Isabella Camp-let",
          number: "22"
        }
      ],
      DrivFilter: [
        {
          title: "Bensin",
          number: "53"
        },
        {
          title: "Diesel",
          number: "19"
        },
        {
          title: "Elektrisitet",
          number: "30"
        },
        {
          title: "Hybrid",
          number: "46"
        },
        {
          title: "Gass",
          number: "65"
        },
        {
          title: "Gass + Bensin",
          number: "22"
        }
      ],
      FargeFilter: [
        {
          title: "Blå",
          number: "53"
        },
        {
          title: "Grå",
          number: "19"
        },
        {
          title: "Hvit",
          number: "30"
        },
        {
          title: "Svart",
          number: "46"
        },
        {
          title: "Sølv",
          number: "65"
        }
      ],
      GirkasseFilter: [
        {
          title: "Automat",
          number: "53"
        },
        {
          title: "Manuell",
          number: "19"
        }
      ],
      filteredproducts: [],
      products: [],
      brands: [],
      brandsFilter: [],
      minYear: "",
      maxYear: "",
      minYearFilter: "",
      maxYearFilter: "",
      minMileageFilter: "",
      maxMileageFilter: "",
      minPriceFilter: "",
      maxPriceFilter: "",
      transmissions: [],
      transmissionsFilter: [],
      minSeatFilter: "",
      maxSeatFilter: "",
      minHPFilter: "",
      maxHPFilter: "",
      usedornew: 1
    };
  },

  computed: {
    _filteredProducts() {
      return this.$store.state.products.filter(product => {
        return product.active == 1;
      });
    },
    _filteredBrands() {
      return _.countBy(this._filteredProducts, function(c) {
        return c.adata.make;
      });
    },
    _filteredTransmissions() {
      return _.countBy(this._filteredProducts, function(c) {
        return c.adata.transmission;
      });
    },
    bobilerDescription() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brukute_bobiler_description";
      });

      return temp ? temp.value : undefined;
    },
    bobilerImage() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brukute_bobiler_image";
      });

      return temp ? temp.value : undefined;
    },
    bobilerTitle() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brukute_bobiler_title";
      });

      return temp ? temp.value : undefined;
    },
    metaDescription() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brukute_meta_description";
      });

      return temp ? temp.value : "undefined";
    },
    metaTitle() {
      var temp = this.$store.state.homeData.find(product => {
        return product.key == "brukute_meta_title";
      });

      return temp ? temp.value : "Vi leverer nye bobiler til hele Nord-Norge, brukte bobiler leverer vi til hele Norge.";
    }
  },

  asyncData({ store, route }) {
    return store
      .dispatch("FETCH_RV_DATA")
      .then(() => store.dispatch("FETCH_HOME_DATA"));
  },

  title() {
    return this.metaTitle;
  },

  description() {
    return this.metaDescription;
  },

  methods: {
    toggleShow() {
      this.show = !this.show;
    },

    saveId(id) {
      this.$router.push({ path: "/bobil/" + id });
    },
    toggleBrandFilter(event) {
      if (event.target.checked) {
        this.brandsFilter.push(event.target.value);
        this.runallfilters();
      } else {
        var index = this.brandsFilter.indexOf(event.target.value);
        if (index !== -1) this.brandsFilter.splice(index, 1);
        this.runallfilters();
      }
    },
    toggleTransmissionFilter(event) {
      if (event.target.checked) {
        this.transmissionsFilter.push(event.target.value);
        this.runallfilters();
      } else {
        var index = this.transmissionsFilter.indexOf(event.target.value);
        if (index !== -1) this.transmissionsFilter.splice(index, 1);
        this.runallfilters();
      }
    },

    runallfilters() {
      this.filteredproducts = this._filteredProducts;
      if (this.brandsFilter.length > 0) {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return this.brandsFilter.indexOf(product.adata.make) != -1;
        });
      }
      if (this.minYearFilter && this.maxYearFilter) {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return (
            product.adata.year >= this.minYearFilter &&
            product.adata.year <= this.maxYearFilter
          );
        });
      }
      if (this.minMileageFilter && this.maxMileageFilter) {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return (
            product.adata.mileage >= this.minMileageFilter &&
            product.adata.mileage <= this.maxMileageFilter
          );
        });
      }
      if (this.minPriceFilter && this.maxPriceFilter) {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return (
            product.adata.prices &&
            (product.adata.prices.main >= this.minPriceFilter &&
              product.adata.prices.main <= this.maxPriceFilter)
          );
        });
      }
      if (this.transmissionsFilter.length > 0) {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return (
            this.transmissionsFilter.indexOf(product.adata.transmission) != -1
          );
        });
      }
      if (this.minSeatFilter && this.maxSeatFilter) {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return (
            product.adata.seats >= this.minSeatFilter &&
            product.adata.seats <= this.maxSeatFilter
          );
        });
      }
      if (this.minHPFilter && this.maxHPFilter) {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return (
            product.adata.engine.effect >= this.minHPFilter &&
            product.adata.engine.effect <= this.maxHPFilter
          );
        });
      }
      if (this.usedornew != 0) {
        if (this.usedornew == 1) {
          this.filteredproducts = this.filteredproducts.filter(product => {
            return product.adata.mileage;
          });
        } else {
          this.filteredproducts = this.filteredproducts.filter(product => {
            return !product.adata.mileage;
          });
        }
      } else {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return product.adata.mileage;
        });
      }
    }
  },
  beforeMount() {
    this.filteredproducts = this._filteredProducts;
    this.brands = this._filteredBrands;
    this.transmissions = this._filteredTransmissions;
    this.runallfilters();
  },
  mounted() {
    document.querySelector("#app").scrollTo(0, 0);
  }
};
</script>

<style scoped>
.setting-wrapper .display-opt {
  width: auto;
}
.category-wrapper .product-panel .product-wrapper .my-btn {
  box-shadow: none;
}
.show {
  display: block !important;
}
@media only screen and (max-width: 580px) {
  .show {
    display: none !important;
  }
}
</style>
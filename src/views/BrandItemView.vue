 <template>
  <div class="brand-item-view">
    <div class="container">
      <div class="toggle-wrapper row">
        <div class="col-md-12">
          <button :class="{'btn':true, 'blue-btn':true, 'show':!show}" @click="toggleShow">VIS TREFF</button>
          <button :class="{'btn':true, 'show':show}" @click="toggleShow">ENDRE SØK</button>
        </div>
      </div>
      <div class="setting-wrapper">
        <p class="path font-12">
          Hjem
          <i class="fa fa-caret-right"></i> Bobil
          <i class="fa fa-caret-right"></i>
          <span class="blue-text underlined">{{meta_title}}</span>
        </p>
        <div class="display-opt">
          <div class="form-group">
            <select class="form-control" id="sel1" v-model="usedornew" @change="runallfilters">
              <option value="0">Alle bobiler</option>
              <option value="1">Brukt bobil</option>
              <option value="2">Nye bobil</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div :class="{'filter-wrapper':true,'show':!show }">
            <div class="sub-section">
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
              <button class="accordion active">Pris</button>
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
                  <div v-for="(count,name) in transmissionProducts" class="filter-list" :key="name">
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
            <div class="col-md-12 col-sm-12">
              <div class="col-md-12 label-instruction">
                <div class="col-md-6 col-sm-6">
                  <p class="font-25 title">{{brand.name}}</p>
                  <p v-html="brand.description"></p>
                </div>
                <div class="col-md-6 col-sm-6">
                  <img :src="brand.logo" alt>
                </div>
              </div>
            </div>
            <div
              class="product-panel col-md-3 col-sm-6 col-xs-6"
              v-for="data in filteredproducts"
              :key="data.adId"
            >
              <div class="col-md-12" v-on:click="saveId(data.slug)">
                <div class="product-wrapper row">
                  <div class="col-md-12" style="padding:0;">
                    <template v-if="data.images.length > 0">
                      <img v-bind:src="data.images[0].url" alt>
                    </template>
                    <template v-else>
                      <img
                        src="https://www.zimmermanhonda.com/app/zh/assets/addons/zh/zh/zimmermanhonda-theme/resources/img/no-Image-available.png?v=1533237969"
                        alt
                      >
                    </template>
                  </div>
                  <div class="detail col-md-12">
                    <div class="sub-section">
                      <p class="product-title font-13">{{data.adata.make}} {{data.adata.model}}</p>
                      <p class="property font-12">
                        <span>{{data.adata.year}}</span>&nbsp;&nbsp;&nbsp;
                        <span>{{ data.adata.mileage ? data.adata.mileage : 0 }} km</span>
                      </p>
                    </div>
                    <div class="sub-section-gap">
                      <div class="sub-section">
                        <p class="cost font-16">
                          <span>{{data.adata.prices.main}},-</span>
                        </p>
                        <p class="sub font-10">{{data.adata.caravan_dealer_segment}}</p>
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

function chunks(array, size) {
  var results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
}

export default {
  name: "brand-item-view",
  data() {
    return {
      show: false,
      user: {
        errors: [],
        _id: "",
        villa: "",
        email: ""
      },
      products: [],
      filteredproducts: [],
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
      usedornew: 0,
      meta_title: ""
    };
  },
  computed: {
    newBrandMetaTitle() {
      return this.$store.state.brand.new_brand_meta_title;
    },
    newBrandMetaDescription() {
      var _metaDescription = this.$store.state.brand.new_brand_meta_description;
      return _metaDescription ? _metaDescription : "description";
    },
    newBrandMetaKeywords() {
      return this.$store.state.brand.new_brand_meta_keywords;
    },
    brand() {
      return this.$store.state.brand;
    },
    _filteredProducts() {
      return this.$store.state.products.filter(product => {
        return (
          product.active == 1 &&
          product.adata.make == this.$store.state.brand.name
        );
      });
    },
    transmissionProducts() {
      var _transmission = _.countBy(this._filteredProducts, function(c) {
        return c.adata.transmission;
      });
      return _transmission;
    }
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
            product.adata.prices.main >= this.minPriceFilter &&
            product.adata.prices.main <= this.maxPriceFilter
          );
        });
      }
      if (this.transmissionsFilter.length > 0) {
        this.filteredproducts = this.filteredproducts.filter(product => {
          return (
            $.inArray(product.adata.transmission, this.transmissionsFilter) !=
            -1
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
      }
    }
  },
  asyncData({
    store,
    route: {
      params: { id }
    }
  }) {
    return store
      .dispatch("FETCH_BRAND_ITEM", { id })
      .then(() => {
        if (!store.state.entries) return store.dispatch("FETCH_ALL_DATA");
        return;
      })
      .then(() => {
        if (!store.state.homeData) return store.dispatch("FETCH_HOME_DATA");
        return;
      });
  },
  beforeMount() {
    this.meta_title = this.$route.params.title;
    this.filteredproducts = this._filteredProducts;
  },
  mounted() {
    document.querySelector("#app").scrollTo(0, 0);
  },
  title() {
    return this.newBrandMetaTitle;
  },
  description() {
    return this.newBrandMetaDescription;
  }
};
</script>

<style scoped>
.show {
  display: block !important;
}
@media only screen and (max-width: 580px) {
  .show {
    display: none !important;
  }
}
</style>

<template>
  <div style="background-color: #F0F3F4">
    <template v-if="RVData && RVData.adata">
      <div class="container" itemscope itemtype="https://schema.org/product">
        <div class="col-md-8 col-sm-12">
          <div class="detail-section">
            <p class="path font-12">
              <router-link tag="span" to="/" class="pointer">Hjem</router-link>
              <i class="fa fa-caret-right"></i>
              <router-link tag="span" to="/bobil" class="pointer">Bobil</router-link>
              <i class="fa fa-caret-right"></i>
              <router-link
                tag="span"
                to="/single_caravan"
                class="blue-text underlined"
              >{{RVData.adata.make}} {{RVData.adata.model}}</router-link>
            </p>
            <div class="row">
              <div class="col-md-12">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                  <!-- Wrapper for slides -->
                  <div class="carousel-inner" itemscope itemtype="https://schema.org/product">
                    <template v-if="RVData.video">
                      <div class="item active">
                        <iframe
                          class="video-div"
                          :src="RVData.video"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          itemprop="video"
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowfullscreen
                        ></iframe>
                      </div>
                      <template v-for="(image, index) in RVData.images">
                        <div v-bind:class="{item:true}" :key="index">
                          <img v-bind:src="image.url" style="width:100%;" itemprop="image">
                        </div>
                      </template>
                    </template>
                    <template v-else>
                      <template v-for="(image, index) in RVData.images">
                        <div v-bind:class="{item:true , active:index==0}" :key="index">
                          <img v-bind:src="image.url" style="width:100%;" itemprop="image">
                        </div>
                      </template>
                    </template>
                  </div>

                  <!-- Left and right controls -->
                  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="section row" id="information_div">
            <p class="blue-text font-20">Informasjon</p>
            <div class="col-md-12" itemscope itemtype="https://schema.org/Product">
              <div class="data-wrapper row info-section" itemtype="product">
                <div class="col-md-6 col-sm-12 column font-15">
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p itemprop="sales_form">Salgsform</p>
                      <p itemprop="mobile_home_segment">Type bobil</p>
                      <p itemprop="chassis_type">Chassistype</p>
                      <p itemprop="distance">Km.stand</p>
                      <p itemprop="year">Årsmodell</p>
                      <p itemprop="transmission">Girkasse</p>
                      <p itemprop="wheel_drive">Hjuldrift</p>
                      <p itemprop="effect">Effekt</p>
                      <p itemprop="volume">Sylindervolum</p>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 value-col">
                      <p itemprop="sales_form">{{RVData.adata.sales_form}}</p>
                      <p itemprop="mobile_home_segment">{{RVData.adata.mobile_home_segment}}</p>
                      <p itemprop="chassis_type">{{RVData.adata.chassis_type}}</p>
                      <p itemprop="distance">{{RVData.adata.distance}} km</p>
                      <p itemprop="year">{{RVData.adata.year}}</p>
                      <p itemprop="transmission">{{RVData.adata.transmission}}</p>
                      <p itemprop="wheel_drive">{{RVData.adata.wheel_drive}}</p>
                      <p itemprop="effect">{{RVData.adata.engine.effect}} Hk</p>
                      <p itemprop="volume">{{RVData.adata.engine.volume}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 column font-15">
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <p itemprop="seats">Reg. sitteplasser</p>
                      <p itemprop="no_of_sleepers">Soveplasser</p>
                      <p itemprop="length">Lengde</p>
                      <p itemprop="width">Bredde</p>
                      <p itemprop="total">Totalvekt</p>
                      <p itemprop="net">Egenvekt</p>
                      <p itemprop="cargo">Nyttelast</p>
                      <p itemprop="country">Bilen står i</p>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 value-col">
                      <p itemprop="seats">{{RVData.adata.seats}}</p>
                      <p itemprop="no_of_sleepers">{{RVData.adata.no_of_sleepers}}</p>
                      <p itemprop="length">{{RVData.adata.length}} cm</p>
                      <p itemprop="width">{{RVData.adata.width}} cm</p>
                      <p itemprop="total">{{RVData.adata.weight.total}} kg</p>
                      <p itemprop="net">{{RVData.adata.weight.net}} kg</p>
                      <p itemprop="cargo">{{RVData.adata.weight.cargo}} kg</p>
                      <p itemprop="country">{{RVData.location.country}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section row">
            <p class="blue-text font-20">Utstyr</p>
            <div class="col-md-12">
              <div class="data-wrapper row">
                <template v-for="(data, index) in RVData.adata.equipment">
                  <div class="col-md-6 col-sm-12 col-xs-12 column font-15" :key="index">
                    <li itemprop="equipment">{{ data }}</li>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="section row">
            <p class="blue-text font-20">Beskrivelse</p>
            <div class="col-md-12">
              <div class="data-wrapper row">
                <div class="column font-15" style="width: 100%; border:none">
                  <p v-html="RVData.adata.description" itemprop="description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="single-detail" class="col-md-4 col-sm-12">
          <div id="detail-content" itemtype="product">
            <p class="font-10">TROMSØ</p>
            <p class="font-25 blue-text" itemprop="model">{{RVData.name}}</p>
            <p
              class="font-15"
              v-if="RVData.vin"
              itemprop="mileage"
            >{{ RVData.adata.mileage ? 'Reg.nr' : 'VIN' }} : {{RVData.vin}}</p>
            <p class="font-15" itemprop="year">Årsmodell: {{RVData.adata.year}}</p>
            <p
              class="font-15"
              itemprop="stand"
            >Km. stand: {{ RVData.adata.mileage ? RVData.adata.mileage : 0 }} km</p>
            <p class="font-15" itemprop="seats">Reg. sitteplasser: {{RVData.adata.seats}}</p>
            <p
              class="font-15"
              itemprop="no_of_sleepers"
            >Soveplasser: {{RVData.adata.no_of_sleepers}}</p>
            <p class="font-15" itemprop="length">Lengde: {{RVData.adata.length}} cm</p>
            <a href="#information_div" class="font-15 blue-text">
              Mer informasjon
              <i class="fa fa-caret-down"></i>
            </a>
            <div>
              <img
                src="~public/static/santander.jpg"
                alt
                style="width: 100px;margin-top:30px;margin-bottom:10px"
              >
            </div>
            <div>
              <p style="margin:0">
                Estimert
                <span
                  style="font-size: 2em;"
                  itemprop="TotalMonthlyCost"
                >{{ additionalInfo.TotalMonthlyCost ? Math.floor(additionalInfo.TotalMonthlyCost) : 'N/A' }} kr</span> pr. mnd.
              </p>
              <p
                style="font-size: 0.8em;"
                itemprop="EffectiveInterest"
              >{{ additionalInfo.EffectiveInterest ? Math.round(additionalInfo.EffectiveInterest * 100) / 100 : 'N/A' }} % eff. / {{ additionalInfo.NominalInterest ? Math.round(additionalInfo.NominalInterest * 100) / 100 : 'N/A'}}% non. rente</p>
              <p
                itemprop="prices"
              >Kjøpesum: kr. {{ RVData.adata.prices ? RVData.adata.prices.main : 'N/A'}},-</p>
            </div>
            <template v-if="RVData.adata.prices">
              <p class="font-15 blue-text pointer" style="margin-top:10px" @click="goToFinancePage">
                Vis Lånekalkulator
                <i class="fa fa-caret-right"></i>
              </p>
            </template>

            <!-- <p class="font-25">kr {{RVData.adata.prices.main}},-</p> -->
            <div class="sub-section row">
              <div class="col-md-12">
                <div
                  class="col-md-12"
                  style="display:flex;margin-bottom:10px"
                  itemprop="main_prices"
                >
                  <router-link
                    :to="{ name: 'Form2', query: {value: RVData.adata.prices ? RVData.adata.prices.main : 0,
										title: RVData.adata.make + RVData.adata.model }}"
                    target="_blank"
                    class="blue-btn shadowed my-btn font-12 full-width"
                  >KJØP NÅ</router-link>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12" style="display:flex">
                <div class="col-md-6 col-sm-6 col-xs-6" style="display:flex">
                  <router-link
                    :to="{ name: 'Form1', query: {value: RVData.adata.prices ? RVData.adata.prices.main : 0,
										title: RVData.adata.make + RVData.adata.model }}"
                    target="_blank"
                    class="shadowed gray-btn my-btn font-12 full-width"
                  >FÅ TILBUD</router-link>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6" style="display:flex">
                  <router-link
                    :to="{ name: 'Form3', query: {value: RVData.adata.prices ? RVData.adata.prices.main : 0,
										title: RVData.adata.make + RVData.adata.model }}"
                    target="_blank"
                    class="shadowed gray-btn my-btn font-12 full-width"
                  >SPØR OSS</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="subscribe-wrapper">
      <p class="title font-33">BLI KONTAKTET</p>
      <p>Vil du bli kontaktet når vi får inn flere biler?</p>
      <p>Legg igjen din e-postadresse og vi kontakter deg.</p>
      <div class="form-group" style="position:relative;">
        <input type="email" v-model="email" style="color: black;" placeholder="Din e-postadresse">
        <label v-if="!reg_err" class="reg-error">Type validate email address</label>
        <label v-if="reg_success" class="reg-success">Thank you for subscribing newsletter</label>
        <label
          v-if="exist_err"
          class="reg-error"
        >You already subscribed, please try with another one.</label>
        <button @click="subscribe()">KONTAKT MEG</button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "bobil-item-view",

  data() {
    return {
      email: "",
      reg_err: true,
      reg_success: false,
      exist_err: false
    };
  },

  computed: {
    RVData() {
      return this.$store.state.item;
    },
    additionalInfo() {
      return this.$store.state.additionalInfo;
    },
    metaTitle() {
      return this.$store.state.item.meta_title;
    },
    metaDescription() {
      return this.$store.state.item.meta_description
        ? this.$store.state.item.meta_description
        : "Vi leverer nye bobiler til hele Nord-Norge, brukte bobiler leverer vi til hele Norge.";
    }
  },

  asyncData({
    store,
    route: {
      params: { id }
    }
  }) {
    return store.dispatch("FETCH_RV_ITEM", { id }).then(() => {
      if (!store.state.homeData) return store.dispatch("FETCH_HOME_DATA");
      return;
    });
  },

  title() {
    return this.metaTitle;
  },

  description() {
    return this.metaDescription;
  },

  methods: {
    goToFinancePage(id) {
      this.$router.push({ path: "/finansiering" });
    }
  },
  mounted() {
    document.querySelector("#app").scrollTo(0, 0);
  }
};
</script>

<style scoped>
.video-div {
  width: 100%;
  height: 400px;
}
.reg-error {
  position: absolute;
  bottom: -10px;
  text-align: center;
  left: 0;
  right: 0;
  color: red;
  font-size: 12px;
}
.reg-success {
  position: absolute;
  bottom: -14px;
  text-align: center;
  left: 0;
  right: 0;
  color: #87c410;
  font-size: 14px;
}
</style>
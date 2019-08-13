<template>
  <div style="background-color: #F0F3F4">
    <template v-if="caravanData && caravanData.adata">
      <div class="container" itemscope itemtype="https://schema.org/product">
        <div class="col-md-8 col-sm-12">
          <div class="detail-section">
            <p class="path font-12">
              <router-link tag="span" to="/" class="pointer">Hjem</router-link>
              <i class="fa fa-caret-right"></i>
              <router-link tag="span" to="/campingvogn" class="pointer">Campingvogn</router-link>
              <i class="fa fa-caret-right"></i>
              <router-link
                tag="span"
                to="/single_caravan"
                class="blue-text underlined"
              >{{caravanData.adata.make}} {{caravanData.adata.model}}</router-link>
            </p>
            <div class="row">
              <div class="col-md-12">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                  <!-- Wrapper for slides -->
                  <div class="carousel-inner" itemscope itemtype="https://schema.org/product">
                    <template v-if="caravanData.video">
                      <div class="item active">
                        <iframe
                          class="video-div"
                          :src="caravanData.video"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          itemprop="video"
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowfullscreen
                        ></iframe>
                      </div>
                      <template v-for="(image, index) in caravanData.images">
                        <div v-bind:class="{item:true}" :key="index">
                          <img v-bind:src="image.url" style="width:100%;" itemprop="image">
                        </div>
                      </template>
                    </template>
                    <template v-else>
                      <template v-for="(image, index) in caravanData.images">
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
                      <p itemprop="year">Årsmodell</p>
                      <p itemprop="no_of_sleepers">Soveplasser</p>
                      <p itemprop="length">Lengde</p>
                      <p itemprop="width">Bredde</p>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 value-col">
                      <p itemprop="sales_form">{{caravanData.adata.sales_form}}</p>
                      <p itemprop="year">{{caravanData.adata.year}}</p>
                      <p itemprop="no_of_sleepers">{{caravanData.adata.no_of_sleepers}}</p>
                      <p itemprop="length">{{caravanData.adata.length}}</p>
                      <p itemprop="width">{{caravanData.adata.width}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 column font-15">
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <!-- <p>Reg. sitteplasser</p> -->
                      <p itemprop="total">Totalvekt</p>
                      <p itemprop="net">Egenvekt</p>
                      <p itemprop="cargo">Nyttelast</p>
                      <p itemprop="country">Bilen står i</p>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 value-col">
                      <!-- <p>4</p> -->
                      <p itemprop="total">{{caravanData.adata.weight.total}}kg</p>
                      <p itemprop="net">{{caravanData.adata.weight.net}}kg</p>
                      <p itemprop="cargo">{{caravanData.adata.weight.cargo}}kg</p>
                      <p itemprop="country">{{caravanData.location.country}}</p>
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
                <template v-for="(data, index) in caravanData.adata.equipment">
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
                  <p itemprop="description" v-html="caravanData.adata.description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="single-detail" class="col-md-4 col-sm-12">
          <div id="detail-content" itemtype="product">
            <p class="font-10">TROMSØ</p>
            <p
              class="font-25 blue-text"
              itemprop="model"
            >{{caravanData.adata.make}} {{caravanData.adata.model}}</p>
            <p class="font-15" v-if="caravanData.vin" itemprop="vin">VIN: {{caravanData.vin}}</p>
            <p class="font-15" itemprop="year">Årsmodell: {{caravanData.adata.year}}</p>
            <!-- <p class="font-15">Km. stand: {{caravanData.adata.distance}} km</p> -->
            <p
              class="font-15"
              itemprop="no_of_sleepers"
            >Soveplasser: {{caravanData.adata.no_of_sleepers}}</p>
            <p class="font-15" itemprop="length">Lengde: {{caravanData.adata.length}} cm</p>
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
                >{{ Math.floor(additionalInfo.TotalMonthlyCost) }} kr</span> pr. mnd.
              </p>
              <p
                style="font-size: 0.8em;"
                itemprop="EffectiveInterest"
              >{{Math.round(additionalInfo.EffectiveInterest * 100) / 100}}% eff. / {{Math.round(additionalInfo.NominalInterest * 100) / 100}}% non. rente</p>
              <p itemprop="main">Kjopesum: kr. {{caravanData.adata.prices.main}},-</p>
            </div>
            <p class="font-15 blue-text pointer" style="margin-top:10px" @click="goToFinancePage">
              Vis Lånekalkulator
              <i class="fa fa-caret-right"></i>
            </p>

            <div class="sub-section row">
              <div class="col-md-12">
                <div class="col-md-12" style="display:flex;margin-bottom:10px">
                  <router-link
                    tag="a"
                    to="/form2"
                    class="blue-btn shadowed my-btn font-12 full-width"
                  >KJØP NÅ</router-link>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12" style="display:flex">
                <div class="col-md-6 col-sm-6 col-xs-6" style="display:flex">
                  <router-link
                    tag="a"
                    to="/form1"
                    class="shadowed gray-btn my-btn font-12 full-width"
                  >FÅ TILBUD</router-link>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6" style="display:flex">
                  <router-link
                    tag="a"
                    to="/form3"
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
      <div class="form-group">
        <input type="text" placeholder="Din e-postadresse">
        <button>KONTAKT MEG</button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    caravanData() {
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
  methods: {
    goToFinancePage(id) {
      this.$store.state.productData = this.$store.state.caravanData;
      this.$store.state.equity =
        this.$store.state.productData.adata.prices.main * 0.35;
      this.$store.state.year = 10;
      this.$store.state.ibobil = false;
      this.$router.push({ path: "/finansiering" });
    }
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
.video-div {
  width: 100%;
  height: 400px;
}
</style>

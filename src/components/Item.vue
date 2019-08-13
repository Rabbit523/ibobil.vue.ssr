<template>
  <div class="col-md-3 col-sm-6 col-xs-6">
    <span class="product-tag" v-if="tag">
      <span class="product-tag-inside">{{tag}}</span>
    </span>
    <div
      :class="{ 'product-hover':true, 'myproduct':true,'pointer':true}"
      @click="saveId(item.slug)"
    >
      <v-lazy-image :src="item.images[0].url" alt class="img-responsive top-radius width100"/>
      <div class="sub-section sub-section1">
        <p class="product-title font-16">{{item.adata.make}} {{item.adata.model}}</p>
        <p class="property font-15">
          <span>{{item.adata.year}}</span>&nbsp;&nbsp;&nbsp;
          <span>{{item.adata.mileage ? item.adata.mileage : 0}} km</span>
        </p>
      </div>
      <div class="sub-section-gap sub-section2">
        <div class="sub-section">
          <p class="cost font-20">
            <span>{{item.adata.prices ? item.adata.prices.main : 'N/A'}},-</span>
          </p>
          <p class="sub font-13">{{item.adata.caravan_dealer_segment}}</p>
        </div>
      </div>
      <div class="sub-section-gap">
        <div class="sub-sectin-gap-content">
          <div>
            <v-lazy-image src="../../public/static/santander.jpg" alt class="santander-image"/>
          </div>
          <div class="col-xs-6" style>
            <p style="font-size: 0.7em;margin:0">Vi tilbyr Caravanlån</p>
          </div>
        </div>
      </div>
      <div class="sub-section row sub-section3">
        <div class="col-md-12">
          <div class="col-md-12">
            <button
              class="blue-btn shadowed my-btn font-12 button-1"
              @click="saveId(item.slug)"
            >MER INFO</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeAgo } from "../util/filters";

export default {
  name: "product-item",
  props: ["item", "tag"],
  // http://ssr.vuejs.org/en/caching.html#component-level-caching
  // serverCacheKey: ({ item: { id, __lastUpdated, time } }) => {
  //   return `${id}::${__lastUpdated}::${timeAgo(time)}`;
  // },
  methods: {
    saveId(slug) {
      this.$router.push({ path: "/bobil/" + slug });
    }
  }
};
</script>

<style scoped>
.sub-sectin-gap-content {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
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
  height: auto;
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
  z-index: 1;
}
.product-tag-inside {
  background: #63bf34;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
}
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
  .myproduct {
    min-height: 470px;
  }
}
</style>

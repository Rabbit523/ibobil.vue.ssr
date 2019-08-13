<template>
  <div class="article-container container">
    <div class="contact-wrapper">
      <p class="section-title font-33">Lurer du på noe?</p>
      <p class="font-15">Vi står klare til å hjelpe deg både i butikk, over e-post og telefon</p>
      <div class="row">
        <div class="col-md-4">
          <div class="contact-panel">
            <v-lazy-image src="../../public/img/icons/contact-icon1.png" alt/>
            <p class="font-21">Besøk oss i dag</p>
            <a class="font-15" v-if="address" target="_blank" href="https://www.google.com/maps/place/Strandvegen+144B,+9006+Troms%C3%B8/@69.6299667,18.9183442,17z/data=!3m1!4b1!4m5!3m4!1s0x45c4c5bd726b8c7d:0x909ad5ee227a3cd0!8m2!3d69.6299648!4d18.9205382">{{ address }}</a>
            <a class="font-15" v-else target="_blank" href="https://www.google.com/maps/place/Strandvegen+144B,+9006+Troms%C3%B8/@69.6299667,18.9183442,17z/data=!3m1!4b1!4m5!3m4!1s0x45c4c5bd726b8c7d:0x909ad5ee227a3cd0!8m2!3d69.6299648!4d18.9205382">Strandvegen 144B, 9006 Tromsø</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-panel">
            <v-lazy-image src="../../public/img/icons/contact-icon2.png" alt/>
            <p class="font-21">Send oss en e-post</p>
            <a
              class="cotact-detail font-15"
              :href="'mailto:'+email"
              target="_blank"
              v-if="email"
            >{{ email }}</a>
            <a
              class="cotact-detail font-15"
              href="mailto:salg@icaravan.no"
              target="_blank"
              v-else
            >salg@icaravan.no</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="contact-panel">
            <v-lazy-image src="../../public/img/icons/contact-icon3.png" alt/>
            <p class="font-21">Ring kundeservice</p>
            <a
              class="cotact-detail font-15"
              :href="'tel:'+phone"
              target="_blank"
              v-if="phone"
            >{{ phone }}</a>
            <a
              class="cotact-detail font-15"
              href="tel:+47 954 34 356"
              target="_blank"
              v-else
            >+47 954 34 356</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "contactinfo",

  data() {
    return {
      infos: [],
      address: "",
      email: "",
      phone: ""
    };
  }
};
</script>

<style>
.image-style {
  height: 200px;
  width: auto;
}
</style>

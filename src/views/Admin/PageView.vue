<template>
  <div class="col-md-10 col-sm-12 sider-wrapper">
    <div class="title-bar row">
      <span class="font-25">Sider</span>
      <avatar></avatar>
    </div>
    <div class="table">
      <div class="table-header col-lg-12 col-md-12">
        <div class="col-md-4 col-sm-12">
          <span>Tittel</span>
        </div>
        <div class="col-md-2 col-sm-12">
          <span>Forfatter</span>
        </div>
        <div class="col-md-2 col-sm-12">
          <span>Publisert</span>
        </div>
        <div class="col-md-2 col-sm-12">
          <span>Sist oppdatert</span>
        </div>
        <div class="col-md-2 col-sm-12">
          <span>Status</span>
        </div>
      </div>
      <div class="table-row col-lg-12 col-md-12">
        <div class="cell col-md-4 col-sm-12">
          <span>Hjem</span>
          <ul class="edit">
            <li @click="editHome()" class="pointer">Rediger</li>
            <!-- <li>Slett</li> -->
          </ul>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Forfatter:</span>
          <span>Jan-Børre H.</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Publisert</span>
          <span>25.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Sist oppdatert:</span>
          <span>28.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <div class="status">PUBLISERT</div>
        </div>
      </div>
      <div class="table-row col-lg-12 col-md-12">
        <div class="cell col-md-4 col-sm-12">
          <span>Merker</span>
          <ul class="edit">
            <li @click="editBrands()" class="pointer">Rediger</li>
            <!-- <li>Slett</li> -->
          </ul>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Forfatter:</span>
          <span>Jan-Børre H.</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Publisert</span>
          <span>25.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Sist oppdatert:</span>
          <span>28.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <div class="status">PUBLISERT</div>
        </div>
      </div>

      <div class="table-row col-lg-12 col-md-12">
        <div class="cell col-md-4 col-sm-12">
          <span>Finansiering</span>
          <ul class="edit">
            <li @click="editFinance()" class="pointer">Rediger</li>
            <!-- <li>Slett</li> -->
          </ul>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Forfatter:</span>
          <span>Jan-Børre H.</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Publisert</span>
          <span>25.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Sist oppdatert:</span>
          <span>28.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <div class="status">PUBLISERT</div>
        </div>
      </div>
      <div class="table-row col-lg-12 col-md-12">
        <div class="cell col-md-4 col-sm-12">
          <span>Bobil</span>
          <ul class="edit">
            <li @click="editrv()" class="pointer">Rediger</li>
            <!-- <li>Slett</li> -->
          </ul>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Forfatter:</span>
          <span>Jan-Børre H.</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Publisert</span>
          <span>25.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Sist oppdatert:</span>
          <span>28.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <div class="status">PUBLISERT</div>
        </div>
      </div>
      <div class="table-row col-lg-12 col-md-12">
        <div class="cell col-md-4 col-sm-12">
          <span>Campingvogn</span>
          <ul class="edit">
            <li @click="editcaravan()" class="pointer">Rediger</li>
            <!-- <li>Slett</li> -->
          </ul>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Forfatter:</span>
          <span>Jan-Børre H.</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Publisert</span>
          <span>25.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Sist oppdatert:</span>
          <span>28.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <div class="status">PUBLISERT</div>
        </div>
      </div>
      <div class="table-row col-lg-12 col-md-12">
        <div class="cell col-md-4 col-sm-12">
          <span>Om oss</span>
          <ul class="edit">
            <li @click="editAbout()" class="pointer">Rediger</li>
            <!-- <li>Slett</li> -->
          </ul>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Forfatter:</span>
          <span>Jan-Børre H.</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Publisert</span>
          <span>25.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Sist oppdatert:</span>
          <span>28.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <div class="status">PUBLISERT</div>
        </div>
      </div>
      <div class="table-row col-lg-12 col-md-12">
        <div class="cell col-md-4 col-sm-12">
          <span>Top Images and text</span>
          <ul class="edit">
            <li @click="editTop()" class="pointer">Rediger</li>
            <!-- <li>Slett</li> -->
          </ul>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Forfatter:</span>
          <span>Jan-Børre H.</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Publisert</span>
          <span>25.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <span class="field">Sist oppdatert:</span>
          <span>28.01.18</span>
        </div>
        <div class="cell col-md-2 col-sm-12">
          <div class="status">PUBLISERT</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Avatar from "../../components/Avatar.vue";

export default {
  components: {
    Avatar
  },
  data() {
    return {};
  },
  methods: {
    editHome() {
      this.$router.push({ path: "/admin/page/home" });
    },
    editBrands() {
      this.$router.push({ path: "/admin/page/brand" });
    },
    editAbout() {
      this.$router.push({ path: "/admin/page/about" });
    },
    editFinance() {
      this.$router.push({ path: "/admin/page/finance" });
    },
    editrv() {
      this.$router.push({ path: "/admin/page/bobil" });
    },
    editcaravan() {
      this.$router.push({ path: "/admin/page/caravan" });
    },
    editTop() {
      this.$router.push({ path: "/admin/page/top" });
    }
  },
  created() {
    this.$store.state.current_path = this.$route.path;
  },
  title() {
    return "iBobil AS - Nye bobiler i Nord-Norge og brukte bobiler i til hele Norge";
  },
  description() {
    return "Bobilen din finner du hos iBobil, vi leverer nye bobiler fra Challenger, Eura Mobil, Concordre samt brukte fra alle produsenter.";
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
  color: #3d8fcb !important;
}
</style>

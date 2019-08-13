<template>
  <div class="responsive-nav d-block d-sm-none" v-bind:class="{collapsed: collapsed}">
    <a class="hamburger float-right" v-on:click="toggleActive(!collapsed)">{{triggerText}}</a>
    <slot v-on:click="toggleActive(false)"></slot>
  </div>
</template>

<script>
export default {
  name: "responsive-nav",
  data() {
    return {
      collapsed: true
    };
  },
  computed: {
    triggerText() {
      return (this.collapsed && "Menu") || "Close";
    }
  },
  methods: {
    toggleActive(flag) {
      this.collapsed = flag;
    }
  }
};
</script>

<style lang="stylus" scoped>
.responsive-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  background: #f8f8f8;
  transition: margin 0.2s ease-out;
  border: 1px solid #cccccc;
}

.responsive-nav.collapsed {
  margin-left: -250px;
}

.hamburger {
  display: block;
  height: 30px;
  width: 30px;
  padding: 15px;
  text-align: center;
  position: relative;
  left: 30px;
}
</style>

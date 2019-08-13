<template>
  <div id="app">
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.path {
  &.font-12 {
    i, span {
      padding-right: 3px;
    }
  }
}
</style>

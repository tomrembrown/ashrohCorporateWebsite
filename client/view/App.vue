<template>
  <div>
    <ar-navbar></ar-navbar>
    <router-view></router-view>
    <login-modal/>
  </div>
</template>

<script>
import Navbar from './components/navigation/navbar.vue'

export default {
  components: {
    arNavbar: Navbar
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import './scss/main.scss';
</style>
<template>
  <div>
    <nav class="navbar navbar-expand-xl p-0 navbar-custom" role="navigation" id="topmenu">
      <div class="container">
        <span class="navbar-brand">
          <img src="/img/ashrohLogo.svg" width="80%" />
        </span>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapseTop"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-on:click="toggleNavbar"
        >
          <i class="fas fa-bars"></i>
        </button>

          <div class="navbar-collapse" id="navbarCollapseTop" v-bind:class="{ smallscreen: isSmall, show: isShown, collapse: !isShown }">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item px-2">
                <router-link to="/" class="nav-link" active-class="active" exact @click.native="toggleNavbar()">HOME</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/vision" class="nav-link" active-class="active" @click.native="toggleNavbar()">VISION</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/loneliness" class="nav-link" active-class="active" @click.native="toggleNavbar()">LONELINESS</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/about" class="nav-link" active-class="active" @click.native="toggleNavbar()">ABOUT</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/philosophy" class="nav-link" active-class="active" @click.native="toggleNavbar()">PHILOSOPHY</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/business" class="nav-link" active-class="active" @click.native="toggleNavbar()">BUSINESS</router-link>
              </li>
              <li class="nav-item px-2">
                <router-link to="/contact" class="nav-link" active-class="active" @click.native="toggleNavbar()">CONTACT</router-link>
              </li>
            </ul>
          </div>

      </div>
    </nav>
  </div>
</template>

<script>
const SHOW_NAVBAR_FULL_WIDTH = 1200

export default {
  data() {
    return {
      isShown: false,
      isSmall: true,
      window: {
        width: 0,
      }
    }
  },
  methods: {
    toggleNavbar() {
      this.isShown = !this.isShown
    },
    handleResize() {
      if (this.window.width >= SHOW_NAVBAR_FULL_WIDTH && window.innerWidth < SHOW_NAVBAR_FULL_WIDTH) {
        this.isShown = false
        this.isSmall = true
      } else if (this.window.width < SHOW_NAVBAR_FULL_WIDTH && window.innerWidth >= SHOW_NAVBAR_FULL_WIDTH) {
        this.isShown = true
        this.isSmall = false
      }
      
      this.window.width = window.innerWidth
    }
  }, 
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss">
@import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
@import '../../scss/navbar.scss';
</style>


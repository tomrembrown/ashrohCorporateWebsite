<template>
  <div>
    <nav class="navbar navbar-expand-lg p-0 navbar-custom" role="navigation" id="topmenu">
      <div class="container">
        <span class="navbar-brand">Ashroh Enterprises</span>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapseTop">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapseTop">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item px-2">
              <router-link to="/" class="nav-link" active-class="active" exact>HOME</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/vision" class="nav-link" active-class="active">VISION</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/loneliness" class="nav-link" active-class="active">LONELINESS</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/about" class="nav-link" active-class="active">ABOUT</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/philosophy" class="nav-link" active-class="active">PHILOSOPHY</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/business" class="nav-link" active-class="active">BUSINESS</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/contact" class="nav-link" active-class="active">CONTACT</router-link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
@import '../../scss/navbar.scss'
</style>

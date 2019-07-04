<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0" role="navigation" id="topmenu">
      <div class="container">
        <span class="navbar-brand">Ashroh Enterprises</span>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapseTop">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapseTop">
          <ul class="navbar-nav">
            <li class="nav-item px-2">
              <router-link to="/" class="nav-link" active-class="active" exact>HOME</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/about" class="nav-link" active-class="active">ABOUT</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/values" class="nav-link" active-class="active">VALUES</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/websites" class="nav-link" active-class="active">WEBSITES</router-link>
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
</style>

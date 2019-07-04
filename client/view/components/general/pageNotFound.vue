<template>
  <div id="home">
    <div class="home-wrapper container">
      <div class="quote-wrapper">
        <div class="quote">
          <i class="fas fa-quote-left"></i>
          {{ quotation }}
          <i class="fas fa-quote-right"></i>
        </div>
        <div class="attribute">{{ person }}</div>
      </div>
    </div>
    <div class="headliner-wrapper">
      <div class="headliner">Page Not Found</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      quotation: 'to put here',
      person: 'a person'
    }
  },
  methods: {
    readRandomQuotation() {
      let $this = this
      axios.get('readRoutesServer/readRandomQuotation').then(response => {
        $this.quotation = response.data.quotation
        $this.person = response.data.person
      })
    }
  },
  beforeMount() {
    this.readRandomQuotation()
  }
}
</script>

<style lang="scss" scoped>
@import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
@import '../../scss/home.scss';
</style>

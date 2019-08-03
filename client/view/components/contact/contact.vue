<template>
  <div class="container">
    <form action class="sky-form form-sizing-reset">
      <div v-if="emailSentOK">
        <header>Email Sent Successfully</header>
      </div>
      <div v-else>
        <header>Contact Us</header>
        <fieldset>
          <div class="row">
            <div class="col-md-6">
              <ash-textbox
                heading="Name"
                placeholder="Name"
                :idName="formName + '__name'"
                helpText="Enter your name"
              ></ash-textbox>
            </div>
            <div class="col-md-6">
              <ash-textbox
                heading="Email"
                placeholder="Email"
                :idName="formName + '__email'"
                helpText="Enter your email address so we can respond"
              ></ash-textbox>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ash-textbox
                heading="Subject"
                placeholder="Subject"
                :idName="formName + '__subject'"
                helpText="Enter the subject of your email"
              ></ash-textbox>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ash-textarea
                heading="Message"
                placeholder="Message"
                :idName="formName + '__message'"
                helpText="Enter the message you want to send"
                :isExpandable = "false"
              ></ash-textarea>
            </div>
          </div>

        </fieldset>
        <footer>
          <button type="submit" class="button" @click.prevent="submitForm">Send Email</button>
          <button type="reset" class="button button-secondary">Reset</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import { forms } from '../../../../joint/dataValidation/general/formsAndTable'
import Textbox from '../formElements/textbox.vue'
import Textarea from '../formElements/textarea.vue'

export default {
  data() {
    return {
      emailSentOK: false
    }
  },
  methods: {
    setThisForm() {
      this.$store.commit('setThisForm', this.formName)
    },
    submitForm() {
      let $this = this
      this.$store.dispatch('submitForm').then(itWorked => {
        if (itWorked) $this.emailSentOK = true
      })
    }
  },
  components: {
    'ash-textbox': Textbox,
    'ash-textarea': Textarea
  },
  computed: {
    formName() {
      return forms.SEND_EMAIL
    }
  },
  mounted() {
    this.setThisForm()
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/forms/form';
@import '../../scss/forms/header';
@import '../../scss/forms/fieldset';
@import '../../scss/forms/h2';
@import '../../scss/forms/footer';
@import '../../scss/forms/buttons';
@import '../../scss/forms/section';
@import '../../scss/forms/label';
@import '../../scss/forms/select';
@import '../../scss/forms/textarea';
@import '../../scss/forms/checkbox';
</style>
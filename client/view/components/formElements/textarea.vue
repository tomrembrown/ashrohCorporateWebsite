<template>
  <section>
    <label class="label" :for="idName">{{ heading }}</label>
    <label class="textarea textarea-expandable">
      <textarea
        :id="idName"
        :name="idName"
        :aria-describedby="idHelp"
        :placeholder="placeholder"
        rows="5"
        v-model.lazy="value"
        @blur="updateStore"
      >
      </textarea>
    </label>
    <div v-if="isError" class="note error">
      {{ errorMessage }}
    </div>
    <div v-else-if="helpText.length > 0" class="note" :id="idHelp">
      {{ helpText }}
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    idName: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    helpText: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateStore() {
      const payload = {
        element: this.idName,
        value: this.value
      }
      this.$store.dispatch('checkErrorAndSetElement', payload)
    }
  },
  computed: {
    idHelp: function() {
      return this.idName + 'Help'
    },
    isError() {
      let thisError =
        this.$store.getters.getError(this.idName).length === 0 ? false : true
      return thisError
    },
    errorMessage() {
      let errorObject = this.$store.getters.getError(this.idName)
      return errorObject[0].message
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/forms/label';
@import '../../scss/forms/textarea';
@import '../../scss/forms/note';
@import '../../scss/forms/section';
</style>

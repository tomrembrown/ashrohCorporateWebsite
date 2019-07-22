<template>
  <section>
    <label class="label" :for="idName">{{ heading }}</label>
    <label class="input">
      <input
        type="text"
        :id="idName"
        :name="idName"
        :aria-describedby="idHelp"
        :placeholder="placeholder"
        v-model.lazy="value"
        @blur="updateStore"
        @input="$emit('input', $event.target.value)"
      />
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
    },
    validate: {
	    type: Boolean,
	    default: true
    }
  },
  methods: {
    updateStore() {
	    if (this.validate) {
	      const payload = {
	        element: this.idName,
	        value: this.value
		  }
	      this.$store.dispatch('checkErrorAndSetElement', payload)		    
	    }
    }
  },
  computed: {
    idHelp() {
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
@import '../../scss/forms/input';
@import '../../scss/forms/note';
@import '../../scss/forms/section';
</style>

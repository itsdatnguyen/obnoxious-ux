<template lang="pug">
  form.newsletter-form(@submit.prevent="onSubmit")
    h3.newsletter-form__title Subscribe to our newsletter for the latest in design!
    p Don't worry, we'll spam you with articles which you have no interest in until you eventually cancel the subscription by clicking the tiny close link at the bottom of our emails.
    input.newsletter-form__input(placeholder="Email Address" type="email" required)
    button.newsletter-form__subscribe-button(type="submit") Subscribe
    span(v-if="hasSuccessfullySubmitted") Thanks for subscribing!
    p Join 242,634 other subscribers!
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Curator } from "~/lib"

@Component({})
export default class NewsletterForm extends Vue {

  hasSuccessfullySubmitted = false

  onSubmit(event) {
    this.hasSuccessfullySubmitted = true
    setTimeout(() => {
      this.$emit('close')
    }, 1500)
  }
}
</script>


<style lang="sass" scoped>
.newsletter-form
  .newsletter-form__title
    margin-right: 2rem

  .newsletter-form__input
    margin-bottom: 0.5rem
    margin-right: 0.5rem

  .newsletter-form__subscribe-button
    margin-right: 0.5rem
</style>

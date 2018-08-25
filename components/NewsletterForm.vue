<template lang="pug">
  form.newsletter-form
    h3.newsletter-form__title Subscribe to our newsletter for the latest in design!
    p Don't worry, we'll spam you with articles which you have no interest in until you eventually cancel the subscription by clicking the tiny close link at the bottom of our emails.
    input.newsletter-form__input(placeholder="Email Address" type="email")
    a(href="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      button.newsletter-form__subscribe-button(type="button") Subscribe
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

}
</script>


<style lang="sass" scoped>
.newsletter-form
  .newsletter-form__title
    margin-right: 2rem

  .newsletter-form__input
    margin-bottom: 0.5rem
    margin-right: 0.5rem
</style>

<template lang="pug">
  .newsletter-notification
    .newsletter-notification__close-button(@click="$emit('close')")
    .newsletter-notification__form
      newsletter-form
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Curator } from "~/lib"
import NewsletterForm from '~/components/NewsletterForm.vue';

@Component({
  components: {
    NewsletterForm
  }
})
export default class NewsletterNotification extends Vue {

}
</script>


<style lang="sass" scoped>
@import 'sass/theme.sass'


.newsletter-notification
  padding: 1rem
  position: relative
  background-color: $light

  .newsletter-notification__close-button
    position: absolute
    top: 1rem
    right: 1rem

    &:before
      content: 'X'
      font-size: 12px
      margin-right: 1ex
      cursor: pointer

  .newsletter-notification__form
    max-width: 800px
    margin: 0px auto

</style>

<template lang="pug">
  aside.aside-content(:class="color")
    .aside-content__title-container
      h2.aside-content__title.text-light {{ title }}
    .aside-content__body
      slot
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { UserReview } from "~/lib"

import UserReviewCard from '~/components/UserReviewCard.vue'

@Component({
  components: {
    UserReviewCard
  }
})
export default class AsideContent extends Vue {

  @Prop({ type: String, default: 'primary' })
  color: string

  @Prop({ type: String, default: '' })
  title: string

}
</script>


<style lang="sass" scoped>
.aside-content
  min-height: 20em

  .aside-content__title-container
    padding: 1.5rem
    background-color: rgba(0, 0, 0, 0.1)

    .aside-content__title
      margin: 0
      text-align: center

  .aside-content__body
    padding: 1.5rem

@media screen and (min-width: 768px)
  .aside-content
    width: 25rem

</style>

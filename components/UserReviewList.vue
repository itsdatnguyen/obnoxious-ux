<template lang="pug">
  .user-review-list
    user-review-card(v-for="card in list" :card="card" :key="card.name")
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
export default class UserReviewList extends Vue {

  @Prop({ type: Array })
  list: UserReview[]
}
</script>


<style lang="sass" scoped>
.user-review-list
  display: flex
  flex-wrap: wrap
</style>

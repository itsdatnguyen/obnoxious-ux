<template lang="pug">
  .user-review-card
    h3 {{ card.name }} 
      small.user-review-card__occupation.text-dark-faded {{ card.occupation }}
    rating.user-review-card__rating(:rating="card.rating")
    p {{ card.description }}
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { UserReview } from "~/lib"
import Rating from "~/components/Rating.vue";

@Component({
  components: {
    Rating
  }
})
export default class UserReviewCard extends Vue {

  @Prop({ type: Object })
  card: UserReview
}
</script>


<style lang="sass" scoped>
@import 'sass/theme.sass'

.user-review-card
  border-left: $primary 0.4rem solid
  padding-left: 0.4rem
  margin-bottom: 1rem

  .user-review-card__rating
    margin-bottom: 0.2rem

</style>

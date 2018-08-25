<template lang="pug">
  div
    i(v-for="classText in ratingClasses" :class="classText")
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Rating extends Vue {

  @Prop({ type: [Number, String] })
  rating: number

  get ratingClasses(): string[] {
    const classes: string[] = []

    for (let i = 0; i < 5; i++) {
      if (i < this.rating) {
        classes.push('fas fa-star')
      }
      else {
        classes.push('far fa-star')
      }
    }

    return classes
  }
}
</script>


<style lang="sass" scoped>


</style>

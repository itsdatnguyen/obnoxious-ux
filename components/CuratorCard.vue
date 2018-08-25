<template lang="pug">
  .curator-card
    h3 {{ card.name }} 
      small.curator-card__occupation.text-dark-faded {{ card.occupation }}
    img.curator-card__portrait-img(:src="card.portraitUrl" :alt="card.name")
    p {{ card.description }}
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Curator } from "~/lib"

@Component({})
export default class CuratorCard extends Vue {

  @Prop({ type: Object })
  card: Curator
}
</script>


<style lang="sass" scoped>
@import 'sass/theme.sass'

.curator-card
  margin-bottom: 1rem

  .curator-card__portrait-img
    margin-right: 1rem
    display: block
    border-radius: 50%

@media screen and (min-width: 360px)
  .curator-card__portrait-img
    float: left

</style>

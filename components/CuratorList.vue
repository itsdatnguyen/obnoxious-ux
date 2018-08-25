<template lang="pug">
  .curator-list
    curator-card(v-for="card in list" :card="card" :key="card.name")
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Curator } from "~/lib"

import CuratorCard from '~/components/CuratorCard.vue'

@Component({
  components: {
    CuratorCard
  }
})
export default class CuratorList extends Vue {

  @Prop({ type: Array })
  list: Curator[]
}
</script>


<style lang="sass" scoped>
.curator-list
  display: flex
  flex-wrap: wrap
</style>

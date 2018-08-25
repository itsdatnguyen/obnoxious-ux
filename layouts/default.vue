<template lang="pug">
  .default-layout
    top-fixed-notifications
    cookie-notification(v-if="shouldShowCookieNotification" @close="shouldShowCookieNotification = false")
    main.default-layout__main
      nuxt
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Curator } from "~/lib"

import TopFixedNotifications from '~/components/TopFixedNotifications.vue'
import CookieNotification from '~/components/CookieNotification.vue'

@Component({
  components: {
    TopFixedNotifications,
    CookieNotification
  }
})
export default class DefaultLayout extends Vue {
  shouldShowCookieNotification = true

}
</script>


<style lang="sass" scoped>
@import 'sass/mixins.sass'

.default-layout
  height: 100%
  display: flex
  flex-direction: column
  overflow: none

  .default-layout__main
    overflow: auto
    @include scrollbar()

</style>
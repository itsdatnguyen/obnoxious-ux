<template lang="pug">
  div
    newsletter-notification(v-if="shouldShowNewsletter" @close="shouldShowNewsletter = false")
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Curator } from "~/lib"

import NewsletterNotification from '~/components/NewsletterNotification.vue';

@Component({
  components: {
    NewsletterNotification
  }
})
export default class TopFixedNotifications extends Vue {
  shouldShowNewsletter = true
}
</script>


<style lang="sass" scoped>


</style>

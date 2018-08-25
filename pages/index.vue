<template lang="pug">
  div
    section.home-page__double-layout
      .home-page__double-layout-content
        .cover-image-container
          .cover-image.home-page__art-image
          .home-page__header-container
            h1.home-page__header.text-light The Best Resources For Learning UI/UX
      aside-content(title="Curated By" color="secondary")
        curator-list(:list="curators")

    section.home-page__double-layout.home-page__double-layout--reverse
      aside-content(title="Reviews")
        user-review-list(:list="reviews")
      .home-page__double-layout-content
        .cover-image-container
          .cover-image.home-page__review-image

          .home-page__header-container
            h1.home-page__header.text-light The Best Resources For Learning UI/UX
      

</template>


<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"

import { UserReview , Curator} from "~/lib";

import UserReviewList from "~/components/UserReviewList.vue"
import CuratorList from '~/components/CuratorList.vue'
import AsideContent from '~/components/AsideContent.vue'

@Component({
  components: {
    UserReviewList,
    AsideContent,
    CuratorList
  }
})
export default class IndexPage extends Vue {
  reviews: UserReview[]
  curators: Curator[]

  async asyncData(context) {
    const data = await Promise.all([
      context.$axios.get('reviews.json').then(r => r.data),
      context.$axios.get('curators.json').then(r => r.data)
    ])

    return {
      reviews: data[0],
      curators: data[1]
    }
  }

}
</script>
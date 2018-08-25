<template lang="pug">
  div
    section.home-page__double-layout
      .home-page__double-layout-content
        .cover-image-container
          .cover-image.home-page__art-image
          .home-page__header-container
            h1.home-page__header.text-light.primary The Best Resources For Learning UI/UX
      aside-content(title="Curated By" color="secondary")
        curator-list(:list="curators")

    section.dark.home-page__row-section
      .home-page__row-section-inner-container
        div
          h2 All Obnoxious UX Books and Videos For Just $9
          a(href="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            button.btn-light Get Started
        img.bible-img(:src="bibleImg" alt="Hail UX")

    section.home-page__double-layout.home-page__double-layout--reverse
      aside-content(title="Reviews")
        user-review-list(:list="reviews")
      .home-page__double-layout-content
        .cover-image-container
          .cover-image.home-page__review-image

          .home-page__header-container
            h1.home-page__header.text-light.secondary Created with love by design professionals
      

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

  bibleImg = require('assets/images/not-a-UX-book-but-a-bible-instead.png')

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


<style lang="sass" scoped>
@import 'sass/theme.sass'
  
.home-page__double-layout-content
  position: relative
  flex: 1 1 auto

.home-page__header-container
  position: absolute
  top: 50%
  left: 50%
  transform: translateX(-50%) translateY(-50%)

  .home-page__header
    padding: 2rem
  
.home-page__double-layout
  display: flex
  flex-direction: column

.home-page__double-layout--reverse
  flex-direction: column-reverse

.home-page__row-section
  padding: 2rem

  .home-page__row-section-inner-container
    color: $text-light
    max-width: 1000px
    margin: 0px auto
    display: flex
    flex-direction: column
    align-items: center

@media screen and (min-width: 768px)
  .home-page__double-layout
    flex-direction: row

  .home-page__row-section

    .home-page__row-section-inner-container
      flex-direction: row

.home-page__review-image
  background-image: url(/assets/images/shitty-generic-header-image.jpg)

.home-page__art-image
  background-image: url(/assets/images/somewhat-cool-deer-image-i-got-from-pixabay.jpg)


.bible-img
  max-width: 300px
  max-height: 150px
  transition: transform 0.3s ease-in-out

  &:hover
    transform: rotate3d(0.2, -0.2, 0.4, -5deg)

</style>
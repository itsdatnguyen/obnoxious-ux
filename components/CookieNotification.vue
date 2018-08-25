<template lang="pug">
  .cookie-notification
    .cookie-notification__inner-container
      .cookie-notification__text 
        .smaller-1 Our site uses cookies. 
        .smaller-2 By continuing to use our site you are agreeing to our <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Cookie Policy</a>.
        .smaller-3 We use cookies to show you advertising that is relevant to you.
        .smaller-4 If you would like to, you can <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">change your cookie settings</a> at any time.
        .smaller-5 A̡̗͙̖͙̙̫c͓͙͔̠͈c͙̬͖͎̱̦̘ẹ͉͎̹̝p̼͙̖̭̳t̹̲̪͍͕͔͙̕i̤n͉g̨̰ this will immediately sell your o̲̖͔̦r͓̳͢g̢̥̲̰͈a̟̻̞͖͝ṉ̯̳̝͡s̙̀ to the H̦̰͈͇̤Ì͍͇̗͉V̢͍̺͈͕E̹͙̹̤̬͎M̖̯̠̀I͙̤̝̠̞̙Ṋ͇D̻̜̠͎̩.
        .smaller-6 Accepting this will telep̷͈͈̞ó̙̪̟͓ͅr̡ṭ͉ your c̺͚̟̕on̗͔͙͔ş̺͓͚͓c̴i҉̥̟̞o̴̼̦̣̹̻͎̪u̩̬͍̘͔s̥ͅn̢e̗̗̞͡s̛̙s̯̮̗̝͎̱͘ to a̧͙̤̱͔͚̪ ̘̜̥̖̪̼p̶la̖͔̪̟͚̻͟ͅc̮̤͢è̮͚̣̘̥ ͕͕͎͠w̯̲͍͔̣̼̜hḙ̛͉͈͍͙rę there is n̰̱ò̦͕͓̭t̀ḫ̵i̙͓̬͎̙ń̰͖̩g̶̖̗̙̝ b̭̼͖̣͍̲̱u̝͙͎͡t E̘̥̝̳N̬̖͢D̝͕̫͈̣̖̭L͇̼͔̪E͡SS̸̪̭̘̩ sc̗̹͔̬r͍͇̖͡ͅea̴͔͙̺͎͈̲ͅm̱͎̜̦i̳͕͉n̵̳̫͙̫g͇̰̙͇̰̪̯͞. 
      .cookie-notification__button-container
        button.btn-light(type="button" @click="$emit('close')") Accept
</template>


<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class CookieNotification extends Vue {

}
</script>


<style lang="sass" scoped>
@import 'sass/theme.sass'

.cookie-notification
  position: absolute
  bottom: 0
  left: 0
  right: 0
  z-index: 1

  .cookie-notification__inner-container
    display: flex   
    padding: 1rem
    max-width: 800px
    margin: 0 auto
    background-color: $dark
    border: 0.2rem darken($dark, 20%) solid

    .cookie-notification__text
      color: $text-light
      margin-right: 1rem

      a 
        color: $text-light

      @for $i from 1 through 6
        .smaller-#{$i}
          display: inline
          margin-right: 0.15em
          font-size: (1.2rem - (1/10) * $i)

    .cookie-notification__button-container
      display: flex
      align-items: center
      flex: 0 0 auto
</style>

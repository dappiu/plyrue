<template>
  <div>
    <slot/>
  </div>
</template>

<script>
  import Plyr from 'plyr'

  export default {
    name: 'PlyrUe',
    props: {
      options: {
        type: Object,
        required: false,
        default () {
          return {}
        }
      },
      emit: {
        type: Array,
        required: false,
        default () { return [] }
      }
    },
    data () {
      return {
        player: {}
      }
    },
    mounted () {
      this.player = new Plyr(this.$el.firstChild, this.opts)
      this.$emit('player', this.player)
      this.emit.forEach(element => {
        this.player.on(element, this.emitPlayerEvent)
      })
    },
    beforeDestroy () {
      try {
        this.player.destroy()
      } catch (e) {
        if (!(this.opts.hideYouTubeDOMError && e.message === 'The YouTube player is not attached to the DOM.')) {
          // eslint-disable-next-line
          console.error(e)
        }
      }
    },
    methods: {
      emitPlayerEvent (event) {
        this.$emit(event.type, event)
      }
    },
    computed: {
      opts () {
        const options = this.options
        if (!this.options.hasOwnProperty('hideYouTubeDOMError')) {
          options.hideYouTubeDOMError = true
        }
        return options
      }
    }
  }
</script>

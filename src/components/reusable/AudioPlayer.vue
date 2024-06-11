<template>
  <div id="audio-player-root">
    <div>
      <audio style="display: none" ref="player" :id="data.id">
        <source :src="data.mp3" type="audio/mpeg" />
      </audio>
    </div>
    <div
      class="bg-golden-yellow rounded-[36px] py-[21px] px-[37.5px] flex items-center gap-2"
      style="margin: auto"
    >
      <div id="player-row" class="flex items-center gap-2 flex-wrap w-full max-w-5xl">
        <button @click="toggleAudio()" class="w-[25px] h-[30px]">
          <div v-if="isPlaying"><IconPause /></div>
          <div v-else><IconPlay /></div>
        </button>
        <div id="progress-bar" class="h-max cursor-pointer">
          <div class="relative w-full h-full">
            <input
              v-model="playbackTime"
              type="range"
              min="0"
              :max="audioDuration"
              class="bg-white h-[10px] rounded-[7px] cursor-pointer"
              id="position"
              name="position"
            />
          </div>
        </div>
        <div class="text-vivid-purple text-[21px] font-bold font-sans">{{ elapsedTime() }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IconPlay from '@/components/icons/IconPlay.vue'
import IconPause from '@/components/icons/IconPause.vue'

export default {
  components: { IconPlay, IconPause },
  // props: ['url', 'playerid'],
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      playbackTime: 0,
      audioDuration: 100,
      audioLoaded: false,
      isPlaying: false,
      listenerActive: false
    }
  },
  methods: {
    initSlider() {
      let audio = this.$refs.player as HTMLAudioElement
      if (audio) {
        this.audioDuration = Math.round(audio.duration)
      }
    },
    convertTime(seconds: number) {
      const format = (val: number) => `0${Math.floor(val)}`.slice(-2)
      let minutes = (seconds % 3600) / 60
      return [minutes, seconds % 60].map(format).join(':')
    },
    totalTime() {
      let audio = this.$refs.player as HTMLAudioElement
      if (audio) {
        let seconds = audio.duration
        return this.convertTime(seconds)
      } else {
        return '00:00'
      }
    },
    elapsedTime() {
      let audio = this.$refs.player as HTMLAudioElement
      if (audio) {
        let seconds = audio.currentTime
        return this.convertTime(seconds)
      } else {
        return '00:00'
      }
    },
    playbackListener() {
      let audio = this.$refs.player as HTMLAudioElement
      this.playbackTime = audio.currentTime

      audio.addEventListener('ended', this.endListener)
      audio.addEventListener('pause', this.pauseListener)
    },
    pauseListener() {
      this.isPlaying = false
      this.listenerActive = false
      this.cleanupListeners()
    },
    endListener() {
      this.isPlaying = false
      this.listenerActive = false
      this.cleanupListeners()
    },
    cleanupListeners() {
      let audio = this.$refs.player as HTMLAudioElement
      audio.removeEventListener('timeupdate', this.playbackListener)
      audio.removeEventListener('ended', this.endListener)
      audio.removeEventListener('pause', this.pauseListener)
    },
    toggleAudio() {
      let audio = this.$refs.player as HTMLAudioElement
      if (audio.paused) {
        audio.play()
        this.isPlaying = true
      } else {
        audio.pause()
        this.isPlaying = false
      }
    }
  },

  mounted: function () {
    this.$nextTick(function () {
      let audio = this.$refs.player as HTMLAudioElement
      audio.addEventListener('loadedmetadata', () => {
        this.initSlider()
      })

      audio.addEventListener('canplay', () => {
        this.audioLoaded = true
      })

      this.$watch('isPlaying', (newVal: boolean) => {
        if (newVal) {
          let audio = this.$refs.player as HTMLAudioElement
          this.initSlider()
          if (!this.listenerActive) {
            this.listenerActive = true
            audio.addEventListener('timeupdate', this.playbackListener.bind(this))
          }
        }
      })

      this.$watch('playbackTime', (newVal: number) => {
        let diff = Math.abs(newVal - (this.$refs.player as HTMLAudioElement).currentTime)
        if (diff > 0.01) {
          ;(this.$refs.player as HTMLAudioElement).currentTime = newVal
        }
      })
    })
  }
}
</script>

<style>
input[type='range'] {
  margin: auto;
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  outline: none;
  background: transparent;
}
input[type='range']:focus {
  outline: none;
}
::-webkit-slider-runnable-track {
  background: #fff;
}
::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 0; /* 1 */
  height: 40px;
  background: #fff;
  box-shadow: -100vw 0 0 100vw #9617c7;
  border-radius: 6px !important;
}
::-moz-range-track {
  height: 40px;
  background: #ddd;
}
::-moz-range-thumb {
  background: #fff;
  height: 40px;
  width: 0; /* 20px; */
  border-radius: 6px !important;
  box-shadow: -100vw 0 0 100vw #9617c7;
  box-sizing: border-box;
}
::-ms-fill-lower {
  background: dodgerblue;
}
::-ms-thumb {
  background: #fff;
  border: 2px solid #999;
  height: 40px;
  width: 20px;
  box-sizing: border-box;
}
::-ms-ticks-after {
  display: none;
}
::-ms-ticks-before {
  display: none;
}
::-ms-track {
  background: #ddd;
  color: transparent;
  height: 40px;
  border: none;
}
::-ms-tooltip {
  display: none;
}
</style>
  
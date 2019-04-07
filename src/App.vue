<template>
  <div class="flex-it">
    <PlyrUe>
      <video
        crossorigin
        playsinline
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
      >
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          type="video/mp4"
          size="576"
        >
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
          type="video/mp4"
          size="720"
        >
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
          type="video/mp4"
          size="1080"
        >
        <track
          kind="captions"
          label="English"
          srclang="en"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
          default
        >
        <track
          kind="captions"
          label="Français"
          srclang="fr"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
        >
        <a
          href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          download=""
        >
          Download
        </a>
      </video>
    </PlyrUe>
    <PlyrUe>
      <div class="plyr__video-embed">
        <iframe
          src="https://www.youtube.com/watch?v=L5oaI-C8Dhc"
          allowfullscreen
          allowtransparency
          allow="autoplay"
        ></iframe>
      </div>
    </PlyrUe>
    <PlyrUe>
      <div class="plyr__video-embed">
        <iframe
          src="https://player.vimeo.com/video/6370469"
          allowfullscreen
          allowtransparency
          allow="autoplay"
        ></iframe>
      </div>
    </PlyrUe>
  </div>
</template>

<script>
import { PlyrUe } from '../dist/plyrue';

export default {
  name: 'app',
  components: {
    PlyrUe
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex-it {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-it > div {
  flex: 1;
}
</style>

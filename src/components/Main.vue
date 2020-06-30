<template>
  <div>
    <label id="main-title">
      {{ title }}
    </label>
     <div>
       <carousel
        id="img-carousel"
        :items="pictures"
        :item-id="'picId'"
        :image-src="'url'"
        :display-text="'name'"
        :height="'250px'"
        :width="'340px'"
        />
     </div>
  </div>
</template>

<script>

import Carousel from './Carousel.vue'
import fileProcesssor from '../services/fileProcessor.js'

export default {
  name: 'Main',
  compontents: {
    Carousel
  },
  data() {
    return {
      title: 'Subaru Garage',
      pictures: []
    }
  },
  created() {
    fileProcesssor.processCSV()
    // simulate a API call to get images
    this.pictures.push({url: require('../assets/images/racing_sti.jpg'), name: 'racing_sti.jpg', picId: 1})
    this.pictures.push({url: require('../assets/images/2019_subaru_wrx_sti_angularfront.jpg'), name: '2019_subaru_wrx_sti_angularfront', picId: 2})
    this.pictures.push({url: require('../assets/images/19_WRX_KUO_024_M7Y.png'), name: '19_WRX_KUO_024_M7Y', picId: 3})
  }
}
</script>

<style>
#main-title {
  margin-left: 42%;
}
#img-carousel {
  margin-left: 33%;
}
</style>

<template>
  <div>
    <label id="main-title">
      {{ title }}
    </label>
     <div>
       <Carousel
        id="img-carousel"
        :items="pictures"
        :item-id="'picId'"
        :image-src="'url'"
        :display-text="'name'"
        :height="'250px'"
        :width="'340px'"
        />
     </div>
     <file-upload/>
  </div>
</template>

<script>

import Carousel from './Carousel.vue'
import FileUpload from './FileUpload.vue'

export default {
  name: 'Main',
  compontents: {
    Carousel,
    FileUpload
  },
  data() {
    return {
      title: 'Subaru Garage',
      pictures: []
    }
  },
  created() {
    // simulate a API call to get images
    this.pictures.push({url: require('../assets/images/racing_sti.jpg'), name: 'racing_sti.jpg', picId: 1})
    this.pictures.push({url: require('../assets/images/2019_subaru_wrx_sti_angularfront.jpg'), name: '2019_subaru_wrx_sti_angularfront', picId: 2})
    this.pictures.push({url: require('../assets/images/19_WRX_KUO_024_M7Y.png'), name: '19_WRX_KUO_024_M7Y', picId: 3})
  },
  methods: {
    processFile() {
      console.log('processing file')
      const reader = new FileReader()

      reader.onload = this.handleFileLoad
      reader.readAsText(event.target.files[0])
    },
    handleFileLoad(event){
      // console.log(event)
      document.getElementById('fileupload').textContent = event.target.result
      console.log(document.getElementById('fileupload').textContent)
    }
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

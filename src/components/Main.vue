<template>
  <div>
    <label>
      {{ title }}
    </label>
     <input type="file" accept="image/*" capture>
     <div>
       <carousel :items="pictures" :item-id="'picId'" :image-src="'url'"></carousel>
     </div>
  </div>
</template>

<script>

import Carousel from './Carousel.vue'

export default {
  name: 'Main',
  compontents: {
    Carousel
  },
  data() {
    return {
      title: 'This is my fancy title',
      pictures: []
    }
  },
  created() {
    this.pictures.push({url: 'picture1.com', name: 'picture 1', picId: 1})
    this.pictures.push({url: 'picture2.com', name: 'picture 2', picId: 2})
    this.pictures.push({url: 'picture3.com', name: 'picture 3', picId: 3})
  }
}
</script>

<style>

</style>

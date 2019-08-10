<template>
  <div id="carousel-main">
    <span id="left-click" class="left-click" @click="leftClick">&#60;</span>
      <div id="item-div">
         <img :src="items[currentIdx][imageSrc]" :alt="items[currentIdx][imageSrc]" :height="height" :width="width">
      </div>
    <span id="right-click" class="right-click" @click="rightClick">&#62;</span>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    itemId: {
      type: [String, Number],
      default: () => 'id'
    },
    imageSrc: {
      type: [String, Number],
      default: () => 'src'
    },
    height: {
      type: Number,
      default: () => 42
    },
    width: {
      type: Number,
      default: () => 42
    }
  },
  data() {
    return {
      startIdx: 0,
      endIdx: undefined,
      currentIdx: undefined
    }
  },
  created() {
    this.currentIdx = this.items[0][this.itemId]
    this.findMaxIdx()
  },
  methods: {
    leftClick() {
      this.currentIdx = --this.currentIdx
      if (this.currentIdx < this.startIdx) {
        this.currentIdx = this.endIdx
      }
    },
    rightClick() {
      this.currentIdx = ++this.currentIdx
      if (this.currentIdx > this.endIdx) {
        this.currentIdx = this.startIdx
      }
    },
    findMaxIdx() {
      this.endIdx = this.items.length-1
    }
  }
}
</script>

<style>
</style>

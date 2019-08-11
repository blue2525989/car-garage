<template>
  <div class="carousel-main">
    <div class="left-click-div">
      <span id="left-click" class="left-click" @click="leftClick">&#60;</span>
    </div>
    <div class="item-div" :style="{ 'height': height, 'width': width}">
       <img :src="items[currentIdx][imageSrc]" :alt="items[currentIdx][imageSrc]" :height="height" :width="width">
    </div>
    <div class="right-click-div">
      <span id="right-click" class="right-click" @click="rightClick">&#62;</span>
    </div>
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
      type: String,
      default: () => '450 px'
    },
    width: {
      type: String,
      default: () => '550 px'
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
      this.currentIdx = (--this.currentIdx < this.startIdx) ?  this.endIdx : this.currentIdx
    },
    rightClick() {
      this.currentIdx = (++this.currentIdx > this.endIdx) ?  this.startIdx : this.currentIdx
    },
    findMaxIdx() {
      this.endIdx = this.items.length -1
    }
  }
}
</script>

<style>
.carousel-main {
  display: inline-grid;
  grid-template-columns: repeat(15vw, 3);
  grid-template-rows: 1;
}
.left-click-div {
  color: gray;
  font-size: 20px;
  margin-top: 50%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
.item-div {
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.right-click-div {
  color: gray;
  font-size: 20px;
  margin-top: 50%;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
</style>

<template>
  <div class="carousel-main">
    <div class="left-click-div">
      <i id="left-click" class="arrow prev left-click" @click="leftClick"/>
    </div>
    <div class="item-div" :style="{ 'height': height, 'width': width}">
       <img :src="items[currentIdx][imageSrc]" :alt="items[currentIdx][imageSrc]" :height="height" :width="width">
       <span v-if="displayText" id="display-text" class="display-text">{{ items[currentIdx][displayText] }}</span>
    </div>
    <div class="right-click-div">
      <i id="right-click" class="arrow next right-click" @click="rightClick"/>
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
    displayText: {
      type: String,
      default: () => undefined
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
  position: relative;
  display: inline-grid;
  grid-template-columns: 0 100% 0;
  grid-template-rows: 1;
}
.left-click-div {
  cursor: pointer;
  position: absolute;
  z-index: 1;
  color: gray;
  font-size: 40px;
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
.display-text {
  color: gray;
  /* background: lightgray;
  opacity: 0.7; */
  font-weight: bold;
  z-index: 1;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);

}
.right-click-div {
  cursor: pointer;
  position: absolute;
  right: 0;
  z-index: 1;
  color: gray;
  font-size: 40px;
  margin-top: 50%;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
.arrow {
  display: inline-block;
  position: absolute;
  width: 30px;
  height: 30px;
  background: transparent;
  text-indent: -9999px;
  border-top: 2px solid #bfbfbf;
  border-left: 2px solid #bfbfbf;
  transition: all 250ms ease-in-out;
  text-decoration: none;
  color: transparent;
}
.arrow:hover {
  border-color: gray;
  border-width: 5px;
}
.arrow:before {
  display: block;
  height: 200%;
  width: 200%;
  margin-left: -50%;
  margin-top: -50%;
  content: "";
  transform: rotate(45deg);
}
.arrow.prev {
  transform: rotate(-45deg);
  left: 0;
}
.arrow.next {
  transform: rotate(135deg);
  right: 0;
}
</style>

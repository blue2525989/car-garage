<template>
  <div class="small">
    <data-chart :chart-data="data"></data-chart>
    <button @click="fillData()">Populate</button>
  </div>
</template>

<script>

import DataChart from './DataChart.js'

export default {
  components: {
    DataChart
  },
  props: {
    tuneFile: {
      type: Object,
      required: false,
      default: undefined
    },
    time: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  data () {
    return {
      data: {}
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      console.log('fill data', this.tuneFile)
      if (this.tuneFile) {
        this.data = {
          datasets: [],
          labels: []
        }
        this.data.datasets.push({
          label: this.tuneFile.label,
          backgroundColor: '#0000ff',
          data: this.tuneFile.data
        })
        for (let time in this.time.data) {
          this.data.labels.push(time)
        }
      }
    }
  }
}

</script>

<style>
  .small {
    width: 50%;
    margin: 0 auto;
    height: 600px;
  }
</style>

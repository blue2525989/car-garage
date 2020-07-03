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

        let xAxis = 0

        for (let record of this.tuneFile.data) {
          console.log(record)
          this.data.datasets.push({
            label: this.tuneFile.label,
            backgroundColor: '#0000ff',
            data: record
          })
          xAxis++
          if (xAxis === 50) {
            break
          }
        }

        this.data.labels.push(0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000)
        // console.log(this.tuneFile.data)
        // this.data.datasets.push({
        //   label: this.tuneFile.label,
        //   backgroundColor: '#0000ff',
        //   data: this.tuneFile.data
        // })

        // this.data.labels.push(this.tuneFile.label)
      }
    }
  }
}

</script>

<style>
  .small {
    max-width: 90%;
    max-height: 90%;
  }
</style>

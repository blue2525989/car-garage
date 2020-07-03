<template>
  <div class="medium">
    <data-chart :chart-data="data" :options="options"></data-chart>
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
      data: undefined,
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
      }
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      if (this.tuneFile) {
        this.data = {}
        this.data.labels = this.tuneFile[0]
        this.data.datasets = []


        for (let j = 1; j < this.tuneFile.length; j++) {
          let tempData = []
          for (let i = 0; i < this.tuneFile[j].length; i++) {
            tempData.push(this.tuneFile[j])
          }
          this.data.datasets.push({
            label: this.data.labels[i],
            backgroundColor: '#f87979',
            data: tempData
          })
        }
      }
    }
  }
}

</script>

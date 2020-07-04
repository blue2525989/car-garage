<template>
  <div>
    <label>
      {{ title }}
    </label>
    <input id="file-upload" ref="file" type="file" accept=".csv" @change="handleFileUpload"/>
    <button @click="submitFile">Submit</button>
    <div v-if="file">
      <div  v-for="parameters in file.data">
        <div v-if="parameters.label !== 'Time (sec)'" >
        <data-chart :tuneFile="parameters" :time="time" class="chart"> </data-chart>
        </div>
    </div>
    </div>
  </div>
</template>

<script>

import axios from '../services/axiosInstance.js'
import DataChart from './DataChart.vue'

export default {
  name: 'FileUpload',
  components: {
    DataChart
  },
  data() {
    return {
      title: 'File Upload',
      file: {},
      time: {}
    }
  },
  methods: {
    handleFileUpload() {
      this.file.meta = this.$refs.file.files[0]
      const reader = new FileReader()
      reader.onload = this.processCSV.bind(this)
      reader.readAsText(this.$refs.file.files[0])
    },
    async submitFile() {
      const payload = {
        file: this.file
      }

      await axios.post('/upload-file', payload, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    },
    processCSV(file) {
      let csvObj = []
      let csvString = file.target.result
      let rows = csvString.split(/[\n]/)

      for (let i = 0; i < rows.length; i++) {
        csvObj[i] = []
        let columns = rows[i].split(',')
        for (let j = 0; j < columns.length; j++) {
          csvObj[i].push(columns[j])
        }
      }


      let finalDataObj = {}

      for (let i = 0; i < csvObj.length; i++) {
        for (let j = 0; j < csvObj[i].length; j++) {
          if (typeof(finalDataObj[j]) !== 'object') {
            finalDataObj[j] = {}
            finalDataObj[j].label = csvObj[i][j]
            finalDataObj[j].data = []
            if (finalDataObj[j].label === 'Time (sec)') {
              this.time.label = finalDataObj[j].label
              this.time.data = []
            }
          } else {
            let value = (csvObj[i][j] === 'on') ? 1 : ((csvObj[i][j] === 'off') ? -1 : csvObj[i][j])
            finalDataObj[j].data.push(value)

            if (finalDataObj[j].label === 'Time (sec)') {
              this.time.data.push(csvObj[i][j])
            }
          }
        }
      }
      this.file.data = finalDataObj

      this.$forceUpdate()

    }
  }
}

</script>

<style>

.chart {

    width: 50%;
    margin: 0 auto;
    height: 50%;
}
</style>

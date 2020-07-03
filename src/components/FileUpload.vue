<template>
  <div>
    <label>
      {{ title }}
    </label>
    <input id="file-upload" ref="file" type="file" accept=".csv" @change="handleFileUpload"/>
    <button @click="submitFile">Submit</button>
    <div v-if="file">
      <div  v-for="parameters in file.data">
        <div v-if="parameters.label === 'RPM (RPM)'" >

        <data-chart :tuneFile="parameters"> </data-chart>
          {{ parameters.label}}
        </div>
    </div>
    </div>
  </div>
</template>

<script>

import axios from '../services/axiosInstance.js'
// import fileProcessor from '../services/fileProcessor.js'
import DataChart from './DataChart.vue'

export default {
  name: 'FileUpload',
  components: {
    DataChart
  },
  data() {
    return {
      title: 'File Upload',
      file: {}
    }
  },
  methods: {
    handleFileUpload() {
      console.log('file uploading')

      this.file.meta = this.$refs.file.files[0]

      const reader = new FileReader()

      reader.onload = this.processCSV.bind(this)

      reader.readAsText(this.$refs.file.files[0])

      console.log(this.file)
    },
    async submitFile() {
      console.log('submit file')

      const payload = {
        file: this.file
      }

      console.log(payload)

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
          } else {
            finalDataObj[j].data.push(csvObj[i][j])
          }
        }
      }

      console.log(finalDataObj)
      this.file.data = finalDataObj

    }
  }
}

</script>

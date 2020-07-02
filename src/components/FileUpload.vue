<template>
  <div>
    <label>
      {{ title }}
    </label>
    <input id="file-upload" ref="file" type="file" accept=".csv" @change="handleFileUpload"/>
    <button @click="submitFile">Submit</button>
  </div>
</template>

<script>

import axios from '../services/axios.js'

export default {
  name: 'FileUpload',
  data() {
    return {
      title: 'File Upload',
      file: undefined
    }
  },
  methods: {
    handleFileUpload() {
      console.log('file uploading')
      this.file = this.$refs.file.files[0]
      console.log(this.file)
    },
    async submitFile() {
      console.log('submit file')
      let formData = new FormData()
      formData.append('file', this.file)

      await axios.post('/upload', formData, {
        'Content-Type': 'multipart/form-data'
      })
    }
  }
}

</script>

const csv = require('csv-parser')
const fs = require('fs')
/* eslint-disable */
  function processCSV(file) {

    const reader = new FileReader()
    let csvString = ''

    reader.onload((event) => {
      csvString = event.target.result
      let chunks = csvString.split(',[\t\l\f]*[\n\r]*')
      console.log(chunks)
    })

    reader.addEventListener('progress', (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100
      console.log(`Progress: ${Math.round(percent)}`)
      }
    })

    reader.readAsText(file)

    return csvString
  }

  export default {
    processCSV
  }

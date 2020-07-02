'use strict'

import axios from 'axios'

const instance = axios.create({
  baseURL: 'localhost:9090',
  timeout: 1000
})

export default instance

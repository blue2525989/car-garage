
import { Bar } from 'vue-chartjs'
// const { reactiveProp } = mixins

export default {
  extends: Bar,
  // mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      required: false,
      default: {}
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}

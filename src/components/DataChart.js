
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  data() {
    return {
        options: {
        xAxisId: 'Time',
        responsive: true,
        layout: {
          padding: 50
        }
        // maintainAspectRatio: false
        // ,
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true
        //         }
        //     }]
        // }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}

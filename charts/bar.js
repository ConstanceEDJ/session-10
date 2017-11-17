Vue.component('multibar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["MMC","Protests of Islam critical PEGIDA movement in Dresden","Financial Crisis in Greece","Ukraine conflict between Russia and Western Countries"],
      datasets: [
        {
          label: 'Very high trust',
          backgroundColor: '#f87979',
          data: [0.03,0.03,0.04,0.02],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
        {
          label: 'High trust',
          backgroundColor: '#f87979',
          data: [0.45,0.37,0.31,0.3],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        }
      ]
    };

    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#c46060',
					font: {
						weight: 'bold'
					}
				}
			},
      scales: {
        yAxes:  [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})

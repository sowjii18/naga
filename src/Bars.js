import React, { Component } from "react";
import Chart from "react-apexcharts";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"

        },
        xaxis: {
          categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        }
      },
      series: [
        {
          name: "series-1",
          data: [3, 4, 4, 5, 4, 0, 7, 8,2,3,2,7,3,2,3,7,8,2,8,2,2,4,2,3,5,4,6,8,8,8]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
          <h6>Worked hrs in month </h6>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"            
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

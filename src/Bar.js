import React from "react";
import BarChart from "react-bar-chart";
import { Employ } from "./Employ";

const margin = { top: 20, right: 20, bottom: 30, left: 50 };

class EmployeeBarChart extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 700
    };
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({ width: this.refs.root.offsetWidth });
    };
  }

  handleBarClick = (element, id) => {
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  };

  render() {
    return (
      <div ref="root">
        <div style={{ width: "20%" }}>
          
          <BarChart
            ylabel=" hrs"
            xlabel="days"
            width={this.state.width}
            height={300}
            fontColor="rgb(90,20,100)"
            color="blue"
            outlineWidth= {0.5}
            outlineColor= "red"
            margin={margin}
            data={Employ}
            onBarClick={this.handleBarClick}
          />
        </div>
      </div>
    );
  }
}
export default EmployeeBarChart;
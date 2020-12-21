import React, { Component } from "react";
import Card from "./Card";

export class Content extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
    // console.log(this.state)
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "Amsterdam",
          "Rotterdam",
          "The Hague",
          "Utrecht",
          "Eindhoven",
          "Tilburg",
        ],
        datasets: [
          {
            label: "Population",
            data: [741636, 598199, 474292, 290529, 209620, 199613],
            backgroundColor: [
              "#ff3366",
              "#727cf5",
              "#10b759",
              "#fbbc06",
              "#f77eb9",
              "#7ee5e5",
            ],
          },
        ],
      },
    });
  }

  render() {
    const styles = {
      content: {
        display: "flex",
        padding: "1.5rem",
        flexGrow: 1,
      },
    };
    return (
      <div className="content" style={styles.content}>
        <Card chartData={this.state.chartData} location="the Netherlands" />
      </div>
    );
  }
}

export default Content

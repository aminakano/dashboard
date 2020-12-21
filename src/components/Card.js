import React, { Component } from 'react';
import { Bar, Line, Pie, defaults } from "react-chartjs-2";

defaults.global.defaultFontFamily = "Source Sans Pro";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    }; 
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
    responsive: true
  };

  render() {
    const styles = {
      stretch: {
        flex: "0 0 33.33333%",
        maxWidth: "33.33333%",
        padding: "0 12px",
        marginBottom: "1.5rem",
        position: "relative"
      },
      card: {
        display: "flex",
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: "0.25rem",
        boxShadow: "0 0 10px 0 rgba(183, 192, 206, 0.2)",
      },
    };
    return (
      <div className="row">
        <div className="col-xl-12 stretch-card">
          <div className="row flex-grow">
            <div className="stretch-card" style={styles.stretch}>
              <div className="card" style={styles.card}>
                <div className="card-body">
                  <Bar
                    data={this.state.chartData}
                    height={250}
                    options={{
                      title: {
                        display: this.props.displayTitle,
                        text: "Largest Cities in " + this.props.location,
                        fontSize: 25,
                      },
                      legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition,
                        labels: {
                          fontColor: "#333",
                        },
                        maintainAspectRatio: false,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="stretch-card" style={styles.stretch}>
              <div className="card" style={styles.card}>
                <div className="card-body">
                  <Line
                    data={this.state.chartData}
                    height={250}
                    options={{
                      title: {
                        display: this.props.displayTitle,
                        text: "Largest Cities in " + this.props.location,
                        fontSize: 25,
                      },
                      legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition,
                        labels: {
                          fontColor: "#333",
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="stretch-card" style={styles.stretch}>
              <div className="card" style={styles.card}>
                <div className="card-body">
                  <Pie
                    data={this.state.chartData}
                    height={200}
                    options={{
                      title: {
                        display: this.props.displayTitle,
                        text: "Largest Cities in " + this.props.location,
                        fontSize: 25,
                      },
                      legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition,
                        labels: {
                          fontColor: "#333",
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card

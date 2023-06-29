import React, {Component} from "react";
import Chart from "react-apexcharts";

export class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
              }
            },
            series: [
              {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
              },
              {
                name: "series-2",
                data: [25, 40, 35, 50, 90, 15, 10, 100]
              },
              {
                name: "series-2",
                data: [25, 40, 55, 50, 70, 75, 10, 0]
              }
            ]
          };
    }
    render (){
        return(
            <div >
                <div className="">
                    <div className="scrol-dash container">
                        <div className="">
                            <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        width="400"
                            />
                        </div>
                

                    

                    <div className="">
                            <div className="">
                                <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="radar"
                            width="400"
                                />
                            </div>
                    </div>

                    <div className="">
                            <div className="">
                                <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="area"
                            width="400"
                                />
                            </div>
                    </div>

                    <div className=" -">
                            <div className="">
                                <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="radar"
                            width="400"
                                />
                            </div>
                    </div>

                    <div className="z">
                            <div className="">
                                <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="400"
                                />
                            </div>
                    </div>
                   
                    <div className="">
                            <div className="">
                                <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="400"
                                />
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
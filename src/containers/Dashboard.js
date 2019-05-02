import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { secondApiKey } from "../constant";
import GeneralInfo from "../components/GeneralInfo";
import SelectMenu from "../components/SelectMenu";
import "./Dashboard.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar
} from "recharts";

class Dashboard extends Component {
  state = {
    chosenCurrency: this.props.selectedCurrency.currency,
    data: null,
    days: "5"
  };

  getCurrencyData = () => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/histoday?fsym=${
          this.state.chosenCurrency
        }&tsym=USD&limit=${this.state.days}&api_key=${secondApiKey}`
      )
      .then(res => {
        // This function is to change the time format
        // the api provides.
        function newArray(arr) {
          const newArr = [];
          for (let i = 0; i < arr.length; i++) {
            arr[i].time = new Date(arr[i].time * 1000)
              .toDateString()
              .slice(0, 11);
            newArr.push(arr[i]);
          }
          return newArr;
        }
        this.setState({
          data: newArray(res.data.Data)
        });
      });
  };

  componentDidMount() {
    this.getCurrencyData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.days !== this.state.days) {
      this.getCurrencyData();
    }
  }

  changeHandler = e => {
    this.setState(
      {
        days: e.target.value
      },
      () => console.log(this.state.days)
    );
  };

  render() {
    return (
      <div className="dashboard">
        <GeneralInfo />
        <SelectMenu value={this.state.days} handleChange={this.changeHandler} />
        <div className="chart">
          <LineChart
            width={800}
            height={400}
            data={this.state.data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#045ff2"
              fill="#f90202"
            />
          </LineChart>
        </div>
        <div className="chart-two">
          <AreaChart
            width={800}
            height={400}
            data={this.state.data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="close"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
        <div className="chart-three">
          <BarChart
            width={800}
            height={400}
            data={this.state.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="close" fill="#5292f9" />
          </BarChart>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ selectedCurrency: state.selectedCurrency });

export default withRouter(connect(mapStateToProps)(Dashboard));

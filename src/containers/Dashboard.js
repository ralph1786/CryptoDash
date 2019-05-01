import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { secondApiKey } from "../constant";
import "./Dashboard.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

class Dashboard extends Component {
  state = {
    chosenCurrency: this.props.selectedCurrency.currency,
    data: null
  };

  componentDidMount() {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/histoday?fsym=${
          this.state.chosenCurrency
        }&tsym=USD&limit=10&api_key=${secondApiKey}`
      )
      .then(res => {
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

        this.setState(
          {
            // data: res.data.Data
            data: newArray(res.data.Data)
          },
          () => console.log("hey", this.state.data)
        );
      });
  }

  render() {
    // console.log(this.state.chosenCurrency);
    const { currency, price, price_date } = this.props.selectedCurrency;
    return (
      <div className="dashboard">
        <div className="basic-info">
          <h2>CryptoCurrency Symbol: {currency}</h2>
          <p>Price: {parseFloat(price)}</p>
          <span>Today's Date: {price_date}</span>
        </div>
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ selectedCurrency: state.selectedCurrency });

export default withRouter(connect(mapStateToProps)(Dashboard));

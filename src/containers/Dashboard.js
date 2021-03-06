import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { secondApiKey } from "../constant";
import GeneralInfo from "../components/GeneralInfo";
import SelectMenu from "../components/SelectMenu";
import NewsContainer from "./NewsContainer";
import "./Dashboard.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar
} from "recharts";
import ModalContainer from "./ModalContainer";

class Dashboard extends Component {
  state = {
    chosenCurrency: this.props.selectedCurrency.currency,
    data: null,
    days: "10",
    start: 0,
    end: 10
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.chosenCurrency !== nextProps.selectedCurrency.currency) {
      return {
        chosenCurrency: nextProps.selectedCurrency.currency
      };
    }
    return null;
  }

  getCurrencyData = () => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/histoday?fsym=${this.state.chosenCurrency}&tsym=USD&limit=${this.state.days}&api_key=${secondApiKey}`
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
    if (
      prevState.days !== this.state.days ||
      prevState.chosenCurrency !== this.state.chosenCurrency
    ) {
      this.getCurrencyData();
    }
  }

  changeHandler = e => {
    this.setState({
      days: e.target.value
    });
  };

  nextArticlesHandler = () => {
    const addStart = this.state.start + 10;
    const addEnd = this.state.end + 10;
    this.setState({
      start: addStart,
      end: addEnd
    });
  };

  prevArticlesHandler = () => {
    const subtractStart = this.state.start - 10;
    const subtractEnd = this.state.end - 10;
    this.setState({
      start: subtractStart,
      end: subtractEnd
    });
  };

  render() {
    return (
      <Fragment>
        <div className="dashboard">
          <div className="main-info">
            <GeneralInfo />
            <SelectMenu
              value={this.state.days}
              handleChange={this.changeHandler}
            />
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
            <BarChart
              width={800}
              height={400}
              data={this.state.data}
              margin={{
                top: 5,
                right: 30,
                left: 10,
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
          <div className="news">
            <h2>
              {this.state.start === 0 ? (
                " "
              ) : (
                <i
                  className="fas fa-caret-left"
                  onClick={this.prevArticlesHandler}
                />
              )}
              News Feed
              {this.state.end === 50 ? (
                " "
              ) : (
                <i
                  className="fas fa-caret-right"
                  onClick={this.nextArticlesHandler}
                />
              )}
            </h2>
            <NewsContainer info={this.state} />
          </div>
        </div>
        <ModalContainer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ selectedCurrency: state.selectedCurrency });

export default connect(mapStateToProps)(Dashboard);

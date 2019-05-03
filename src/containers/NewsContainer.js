import React, { Component } from "react";
import NewsCard from "../components/NewsCard";
import { secondApiKey } from "../constant";
import axios from "axios";
import "./NewsContainer.scss";

class NewsContainer extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${secondApiKey}`
      )
      .then(res => this.setState({ articles: res.data.Data }));
  }

  render() {
    const listOfArticles = this.state.articles
      .slice(this.props.info.start, this.props.info.end)
      .map(article => <NewsCard info={article} key={article.id} />);
    return <div className="news-container">{listOfArticles}</div>;
  }
}

export default NewsContainer;

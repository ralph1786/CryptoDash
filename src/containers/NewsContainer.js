import React, { Component, Fragment } from "react";
import NewsCard from "../components/NewsCard";
// import { secondApiKey } from "../constant";
// import axios from "axios";
import "./NewsContainer.scss";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GridLoader } from "react-spinners";
import { css } from "@emotion/core";

const NEWS_QUERY = gql`
  query NewsQuery {
    news {
      title
      categories
      url
    }
  }
`;
const override = css`
  place-self: center;
`;

class NewsContainer extends Component {
  // state = {
  //   articles: []
  // };

  // componentDidMount() {
  //   axios
  //     .get(
  //       `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${secondApiKey}`
  //     )
  //     .then(res => this.setState({ articles: res.data.Data }));
  // }

  render() {
    // const listOfArticles = this.state.articles
    //   .slice(this.props.info.start, this.props.info.end)
    //   .map(article => <NewsCard info={article} key={article.id} />);
    return (
      <div className="news-container">
        {/* {listOfArticles} */}
        <Query query={NEWS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <Fragment>
                  <GridLoader
                    css={override}
                    sizeUnit={"px"}
                    size={20}
                    color={"#2f80ed"}
                  />
                </Fragment>
              );
            }
            if (error) console.log(error);
            return (
              <Fragment>
                {data.news
                  .slice(this.props.info.start, this.props.info.end)
                  .map(article => (
                    <NewsCard info={article} key={article.id} />
                  ))}
              </Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default NewsContainer;

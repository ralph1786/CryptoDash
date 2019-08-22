import React, { Fragment } from "react";
import NewsCard from "../components/NewsCard";
import "./NewsContainer.scss";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GridLoader } from "react-spinners";
import ErrorMessage from "../components/ErrorMessage";
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

const NewsContainer = props => {
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
          if (error) return <ErrorMessage />;
          return (
            <Fragment>
              {data.news
                .slice(props.info.start, props.info.end)
                .map((article, index) => (
                  <NewsCard info={article} key={index} />
                ))}
            </Fragment>
          );
        }}
      </Query>
    </div>
  );
};

export default NewsContainer;

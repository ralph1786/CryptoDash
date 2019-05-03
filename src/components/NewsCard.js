import React from "react";
import "./NewsCard.scss";

const NewsCard = props => {
  const { title, url, categories } = props.info;
  return (
    <div className="news-card">
      <h3>
        <span>Title:</span>
        {title}
      </h3>
      <p>
        <span>Categories:</span>
        {categories}
      </p>
      <a href={url}>Read</a>
    </div>
  );
};

export default NewsCard;

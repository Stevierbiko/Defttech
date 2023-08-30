import React from 'react';
import './article.css';

const Article = ({ imgUrl, content, text }) => (
  <div className="deft__blog-container_article">
    <div className="deft__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="deft__blog-container_article-content">
      <div>
        <h3>{text}</h3>
        <p>{content}</p>
      </div>
      <p>Read more</p>
    </div>
  </div>
);

export default Article;

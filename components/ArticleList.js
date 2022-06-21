import React from 'react'
import ArticleItem from './ArticleItem';
import articleSyle from '../styles/Article.module.css';


const ArticleList = ({ articles }) => {
  return (
    <div className={articleSyle.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;

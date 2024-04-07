import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=8546c2b212ac40c1bc6d67b7d43cf3aa
    &page=${page}&pagesize=${props.pageSize}&language=en`;

    setLoading(true);

    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=8546c2b212ac40c1bc6d67b7d43cf3aa
    &page=${page}&pagesize=${props.pageSize}&language=en`;

    setPage(page + 1);

   

    setLoading(true);

    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  return (
    <div>
      <div className="container my-3">
        <div style={{ height: "30px" }} />
        <h2 className='my-3'>NewsMonkey-Latest {props.category} Headlines</h2>
       
      </div>
    </div>
  );
}

export default News;

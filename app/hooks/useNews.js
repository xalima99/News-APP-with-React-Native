import React, { useState, useEffect } from "react";
//Api
import newsApi from "../api/newsApi";


export default () => {
  const [featureNews, setfeatureNews] = useState({});
  const [breakingNews, setbreakingNews] = useState([]);
  const [politicalNews, setpoliticalNews] = useState([]);
  const [techNews, settechNews] = useState([]);
  const [entertainment, setentertainment] = useState([]);
  const [loading, setloading] = useState(false);
  const qty = 5;

  const filterFeatured = (data) => {
    return [...data].filter((item) => item.featured === "on").reverse()[0];
  };

  const filterByCategory = (data, category) => {
    const result = data.filter((item) => item.category === category)
      .reverse()
      .splice(0, qty);

    if(result.length){
        result.push({type: 'viewMore', category: category, id: category})
    }

      return result
  };

  const filterMultipleNews = async () => {
    try {
      setloading(true)
      const allNews = await newsApi.getAll();
      setfeatureNews(filterFeatured(allNews));

      setbreakingNews(filterByCategory(allNews, "breaking-news"));
      setpoliticalNews(filterByCategory(allNews, "political"));
      setentertainment(filterByCategory(allNews, "entertainment"));
      settechNews(filterByCategory(allNews, "tech"));
      setTimeout(() => {
        setloading(false)
      }, 1500);
    } catch (error) {}
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);

  return [featureNews, breakingNews, politicalNews, techNews, entertainment, loading]
};

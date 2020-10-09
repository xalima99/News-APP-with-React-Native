import apiClient from "./client";

const getAll = async () => {
  try {
    const res = await apiClient.get("/news");
    if (res.data.success) return res.data.news;
  } catch (error) {
    console.log(err);
    return [];
  }
};

const getByCategory = async (category, qty) => {
  const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`;

  try {
    const res = await apiClient.get(endpoint);
    if (res.data.success) return res.data.news;
  } catch (error) {
    console.log(err);
    return [];
  }
};

const getSingle = async (id) => {
  try {
    const res = await apiClient.get(`/news/single/${id}`);
    if (res.data.success) return res.data.news;
  } catch (error) {
    console.log(err);
    return [];
  }
};

const searchPost = async (query) => {
  if (!query) return {};
  try {
    const res = await apiClient.post(`/news/search/${query}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAll,
  getByCategory,
  getSingle,
  searchPost,
};

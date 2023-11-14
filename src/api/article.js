import axios from "axios";

const articleApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_VERCEL_URL,
});

export const getArticle = async (page, limit) => {
  const response = await articleApi.get(
    `api/article?page=${page}&limit=${limit}`,
  );
  return response.data;
};

export const createArticle = async (article) => {
  const response = await articleApi.post(`api/article`, article);
  return response.data;
};

export const updateArticle = async (article) => {
  const response = await articleApi.patch(`api/article/${article.id}`, article);
  return response.data;
};

export const deleteArticle = async (id) => {
  const response = await articleApi.delete(`api/article/${id}`);
  return response.data;
};

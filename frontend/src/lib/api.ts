import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
  timeout: 5000,
});

export const fetchTemplate = async (slug: string) => {
  const res = await api.get(`/api/templates/${slug}`);
  return res.data;
};

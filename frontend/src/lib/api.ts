import axios from 'axios';

// In Vite, env vars come from import.meta.env
const BASE_URL = (import.meta as any).env?.VITE_API_URL || '';

export const api = axios.create({
  baseURL: BASE_URL, // empty -> use same-origin relative /api
  timeout: 5000,
});

export const fetchTemplate = async (slug: string) => {
  const res = await api.get(`/api/templates/${slug}`);
  return res.data;
};

export const fetchTemplates = async () => {
  const res = await api.get(`/api/templates`);
  return res.data;
};

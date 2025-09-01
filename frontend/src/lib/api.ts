import axios from 'axios';

export interface Template {
  slug: string;
  category?: string;
  difficulty?: string;
  title: string;
  description?: string;
  tags?: string[];
  images: {
    cover: string;
  };
  price: number;
  originalPrice?: number;
  pages?: number;
}

// In Vite, env vars come from import.meta.env
const BASE_URL = import.meta.env.VITE_API_URL || '';

export const api = axios.create({
  baseURL: BASE_URL, // empty -> use same-origin relative /api
  timeout: 5000,
});

export const fetchTemplate = async (slug: string): Promise<Template> => {
  const res = await api.get<Template>(`/api/templates/${slug}`);
  return res.data;
};

export const fetchTemplates = async (): Promise<Template[]> => {
  const res = await api.get<Template[]>(`/api/templates`);
  return res.data;
};

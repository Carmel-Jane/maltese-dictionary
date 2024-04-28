import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : 'https://mlrs.research.um.edu.mt/resources/gabra-api',
});

export const fetchResults = async (inputValue) => {
  try {
    const res = await api.get(`/lexemes/search_gloss?s=${inputValue}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchWordDetails = async (id) => {
  try {
    const res = await api.get(`/lexemes/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchRelatedLexemes = async (id) => {
  try {
    const res = await api.get(`/lexemes/related/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
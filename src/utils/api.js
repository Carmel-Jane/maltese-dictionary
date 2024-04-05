import axios from 'axios';

export const fetchResults = async (inputValue) => {
  try {
    const res = await axios.get(`/lexemes/search_gloss?s=${inputValue}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const fetchWordDetails = async (id) => {
  try {
    const res = await axios.get(`/lexemes/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const fetchRelatedLexemes = async (id) => {
  try {
    const res = await axios.get(`/lexemes/related/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

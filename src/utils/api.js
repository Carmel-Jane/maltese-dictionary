import axios from 'axios';

export const fetchResults = async (inputValue) => {
  try {
    const res = await axios.get(`/lexemes/search_gloss?s=${inputValue}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
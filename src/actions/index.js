//put action creators here.
//and example might be:
import axios from 'axios';
import * as CONST from '../constants';

function fetchTopStories(query, page = 0) {
  const API_URL = [
    `${CONST.PATH_BASE}`,
    `${CONST.PATH_SEARCH}`,
    '?',
    `${CONST.PARAM_SEARCH}`,
    `${query}`,
    '&',
    `${CONST.PARAM_PAGE}`,
    `${page}`,
    '&',
    `${CONST.PARAM_HPP}`,
    `${CONST.DEFAULT_HPP}`,
  ].join('');

  return axios
  .get(API_URL)
  .then(response => response.data)
}

export const setQuery = (text) => {
  return {
    type: 'SET_QUERY',
    text
  }
}



export const doSearch = (query) => {
  return {
    type: 'DO_SEARCH',
    payload: fetchTopStories(query)
  }
}

//action creators should be pure functions, middleware should handle most of the impure stuff

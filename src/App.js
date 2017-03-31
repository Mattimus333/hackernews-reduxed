import React, { Component } from 'react';
import axios from 'axios';
import * as CONST from './constants';

import Search from './components/Search/Search.jsx';
import Table from './components/Table/Table.jsx';
import Button from './components/Button/Button.jsx';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      query: CONST.DEFAULT_QUERY
    };
  }

  onSearchChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  onSearchSubmit = (event) => {
    const { query } = this.state;
    this.fetchSearchTopStories(query, CONST.DEFAULT_PAGE);
    event.preventDefault();
  }

  fetchSearchTopStories(query, page) {
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

    axios
      .get(API_URL)
      .then(response => response.data)
      .then(result => this._setSearchTopStories(result));
  }

  _setSearchTopStories(result) {
    const { hits } = result;

    this.setState({
      results: hits
    });
  }

  ////////// Render
  render() {
    const query = this.state.query || 'react';
    const list = this.state.results || [];
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={query}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        <Table
          list={list}
          sortKey={'NONE'}
        />
        <div className="interactions">
          <Button
            className="ButtonWithLoading"
          >
            More
          </Button>
        </div>
      </div>
    );
  }
}

export default App;

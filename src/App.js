import React, { Component } from 'react';
import axios from 'axios';
import apiResults from './api-results.json';
import * as CONST from './constants';

import Search from './components/Search/Search.jsx';
import Table from './components/Table/Table.jsx';
import Button from './components/Button/Button.jsx';

import './App.css';

class App extends Component {
  ////////// Render
  render() {
    const query = apiResults.query || 'react';
    const list = apiResults.hits || [];
    const page = apiResults.page || 0;
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={query}
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

import React, { Component } from 'react';
import apiResults from './api-results.json';
import Search from './components/Search/Search.jsx';
import Table from './components/Table/Table.jsx';
import Button from './components/Button/Button.jsx';

import './App.css';

class App extends Component {
  ////////// Render
  render() {
    const list = apiResults.hits || [];
    return (
      <div className="page">
        <div className="interactions">
          <Search>
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

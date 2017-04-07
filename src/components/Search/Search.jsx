
// import React from 'react';

// import './Search.css';
//
// const Search = ({ value, onChange, onSubmit, children }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         value={value}
//         onChange={onChange}
//         className="Search-input"
//       />
//       <button
//         type="submit"
//         className="Search-button">
//         {children}
//       </button>
//     </form>
//   );
// };
//
// export default Search;

import React, { Component } from 'react';

//see: https://github.com/reactjs/react-redux/blob/master/docs/api.md
import { connect } from 'react-redux'
import { setQuery, doSearch } from '../../actions'
import { bindActionCreators } from 'redux'

import './Search.css';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setQuery, doSearch }, dispatch);
}

class Search extends Component {
  render() {
    return (
      <form onSubmit={(event) =>{
        event.preventDefault();
        this.props.doSearch(this.props.value)
      } }>
      {/*  passed a callback because it doesn't want doSearch to run right when the page loads  */}
        <input
          type="text"
          value={this.props.value}
          onChange={(event) => {
            this.props.setQuery(event.target.value);
          }}
          className="Search-input"
        />
        <button
          type="submit"
          className="Search-button">
          {this.props.children}
        </button>
      </form>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)

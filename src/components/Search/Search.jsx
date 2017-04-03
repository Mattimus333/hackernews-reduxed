
import React from 'react';

import './Search.css';

const Search = ({ value, onChange, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="Search-input"
      />
      <button
        type="submit"
        className="Search-button">
        {children}
      </button>
    </form>
  );
};

export default Search;
//
// import React, { Component } from 'react';
//
// //see: https://github.com/reactjs/react-redux/blob/master/docs/api.md
// import { connect } from 'react-redux'
// import { setQuery } from '../../actions'
// import { bindActionCreators } from 'redux'
//
// import './Search.css';
//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     value: state.query
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ setQuery }, dispatch);
// }
//
// class Search extends Component {
//   render() {
//     return (
//       <form onSubmit={this.props.onSubmit}>
//         <input
//           type="text"
//           value={this.props.value}
//           onChange={(event) => {
//             this.props.setQuery(event.target.value);
//           }}
//           className="Search-input"
//         />
//         <button
//           type="submit"
//           className="Search-button">
//           {this.props.children}
//         </button>
//       </form>
//     );
//   }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Search)

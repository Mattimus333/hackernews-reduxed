import React from 'react';
import './Table.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTable } from '../../actions';

const _renderList = list => (
  list.map(item => (
      <tr key={item.objectID}>
        <td>
          <a href={item.url}>{item.title}</a>
        </td>
        <td>
          {item.author}
        </td>
        <td>
          {item.num_comments}
        </td>
        <td>
          {item.points}
        </td>
      </tr>
    ))
);

// const Table = ({ list }) => {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>
//             Title
//           </th>
//           <th>
//             Author
//           </th>
//           <th>
//             Comments
//           </th>
//           <th>
//             Points
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {_renderList(list)}
//       </tbody>
//     </table>
//   );
// };

// export default Table;

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list
  }
}



class Table extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>
              Title
            </th>
            <th>
              Author
            </th>
            <th>
              Comments
            </th>
            <th>
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {_renderList(this.props.list)}
        </tbody>
      </table>
    );

  }
};

export default connect(mapStateToProps)(Table)

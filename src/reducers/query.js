//query reducer.

const query = (state = "", action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return action.text;
    default:
      return state
  }
}

export default query


const list = (state = '', action) => {
  switch (action.type) {
    case 'DO_SEARCH_FULFILLED':
      return action.payload.hits
  default:
    return state
  }
}

export default list

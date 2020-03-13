// import function from astro folder

// action types
const SET_MARKS = "SET_MARKS"

// action creators
const setMarks = marks => {
  return {
    type: SET_MARKS,
    marks
  }
}

const fetchMarks = () => {
  return dispatch => {
    const data = []// array of data from astro func
    dispatch(setMarks(data))
  }
}

const init = []

export default (state = init, action) => {
  switch (action.type) {
    case SET_MARKS:
      return action.marks
    default:
      return state
  }
}

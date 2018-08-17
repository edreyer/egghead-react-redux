// reducer for todo list
const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    };
  }
  return state;
};

export default byId;

// This function helps us encapsulate the shape of state for this reducer
export const getTodo = (state, id) => state[id];

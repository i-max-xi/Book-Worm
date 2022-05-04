export const addBook = (item) => ({
  type: 'ADD',
  item,
});

export const removeBook = (index) => ({
  type: 'REMOVE',
  index,
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item];

    case 'REMOVE':
      return state.slice(0, action.index).concat(state.slice(action.index + 1));

    default:
      return state;
  }
};

export default bookReducer;

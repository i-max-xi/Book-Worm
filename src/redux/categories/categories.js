export const checkStatus = () => ({
  type: 'CHECKSTATUS',
});

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHECKSTATUS':
      return 'Under Construction';

    default:
      return state;
  }
};

export default categoryReducer;

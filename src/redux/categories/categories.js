export const checkStatus = () => {
  return {
    type: "CHECKSTATUS",
  };
};

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case "CHECKSTATUS":
      return "Under Construction";

    default:
      return state;
  }
};

export default categoryReducer;

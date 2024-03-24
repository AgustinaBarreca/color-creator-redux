const colorReducer = (state = [], { type, payload }) => {
  if (type === 'ADD_COLOR') {
    return [...state, payload];
  }
  return state;
};

export default colorReducer;

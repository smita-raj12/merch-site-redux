export default (state = [], action) => {
    console.log(state);
    switch (action.type) {
      case "INCREMENT":
        return state.quantity + 1;
      case "DECREMENT":
        return state.quantity - 1;
      default:
        return state;
    }
  };
  
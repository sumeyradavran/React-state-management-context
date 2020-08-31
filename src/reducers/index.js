export default function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return { counter: state.counter + 1 };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

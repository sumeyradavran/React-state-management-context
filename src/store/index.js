import React from "react";
import counterReducer from "../reducers";
import { increment as incrementAction } from "../actions";

const initialState = {
  counter: 0
};

const CounterStateContext = React.createContext();

function CounterProvider(props) {
  const [state, dispatch] = React.useReducer(counterReducer, initialState);

  const increment = () => dispatch(incrementAction());

  return (
    <CounterStateContext.Provider
      value={{
        state,
        increment
      }}
      {...props}
    />
  );
}

function useCounter() {
  const context = React.useContext(CounterStateContext);
  if (!context) {
    throw new Error(`useCounter must be used within a CounterProvider`);
  }
  return context;
}

export { CounterProvider, useCounter };

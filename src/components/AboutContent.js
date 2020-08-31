import React from "react";
import { Link } from "react-router-dom";
import { useCounter } from "../store";

export default function AboutContent({ globalState, globalIncrement }) {
  const { state, increment } = useCounter();

  const handleGlobalClick = () => globalIncrement();
  const handleLocalClick = () => increment();

  return (
    <div>
      <div>About</div>
      <div>{state.counter}</div>
      <button onClick={handleLocalClick}>increment</button>
      <div>{globalState.counter}</div>
      <button onClick={handleGlobalClick}>increment</button>
      <Link to="/">Home</Link>
    </div>
  );
}

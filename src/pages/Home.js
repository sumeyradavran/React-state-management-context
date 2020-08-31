import React from "react";
import { useCounter } from "../store";
import { Link } from "react-router-dom";

export default function Home() {
  const { state, increment } = useCounter();

  const handleClick = () => increment();

  return (
    <div>
      <div>Home</div>
      <div>{state.counter}</div>
      <Link to="/about">About</Link>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}

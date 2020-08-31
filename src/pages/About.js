import React from "react";
import { CounterProvider, useCounter } from "../store";
import AboutContent from "../components/AboutContent";

export default function About() {
  const { state, increment } = useCounter();
  return (
    <CounterProvider>
      <AboutContent globalState={state} globalIncrement={increment} />
    </CounterProvider>
  );
}

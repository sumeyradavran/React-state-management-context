import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CounterProvider } from "./store";
import About from "./pages/About";
export default function App() {
  return (
    <BrowserRouter>
      <CounterProvider>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </CounterProvider>
    </BrowserRouter>
  );
}

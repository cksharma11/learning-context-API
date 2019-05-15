import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TaskHome from "./components/TaskHome/TaskHome";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={TaskHome} />
    </BrowserRouter>
  );
}

export default App;

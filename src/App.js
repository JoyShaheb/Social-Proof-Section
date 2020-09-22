import React from "react";
import "./styles.scss";
import { Bottom, Top } from "./components/Index";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Top />
        <Bottom />
      </div>
    </div>
  );
};
export default App;

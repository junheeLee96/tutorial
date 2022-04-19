import React from "react";
import Cont from "./Cont";
import Todos from "./Todos";
import exad from "./exad";

const App = () => {
  return (
    <div>
      <div>
        <div>
          <Cont />
          <br />
          <br />
          <Todos />
          <exad />
        </div>
      </div>
    </div>
  );
};

export default App;

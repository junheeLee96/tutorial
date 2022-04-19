import React from "react";
import Cont from "./Cont";
import Todos from "./Todos";

const App = () => {
  return (
    <div>
      <div>
        <div>
          <Cont />
          <br />
          <br />
          <Todos />
        </div>
      </div>
    </div>
  );
};

export default App;

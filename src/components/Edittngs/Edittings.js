import React from "react";
import styled from "styled-components";

const EdittingsStyled = styled.div`
  background-color: rgb(226, 226, 226);
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;

const Edittings = () => {
  return (
    <EdittingsStyled className="Edittings">
      <div style={{ cursor: "pointer" }}>Home</div>
      <div style={{ cursor: "pointer" }}>Profile</div>
      <div style={{ cursor: "pointer" }}>Settings</div>
      <div className="gdgd">gdgd</div>
    </EdittingsStyled>
  );
};

export default Edittings;

/*

import React from "react";
import "./App.css";
import styled from "styled-components";
import Home from "./components/Home/Home";
import Edittings from "./components/Edittngs/Edittings";

const AppStyled = styled.div`
  max-width: 500px;
  width: 500px;
  height: 100vh;
  overflow: scroll;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-row: auto;
  border: 1px solid black;
  padding-right: 10px;
`;

const App = () => {
  return (
    <AppStyled className="App">
      <Edittings />
      <Home />
    </AppStyled>
  );
};

export default App;


*/

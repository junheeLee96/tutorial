import React from "react";
import styled from "styled-components";
import Boxes from "./Boxes";
import Friends from "./Friends";
import img from "../../img/faa.jpg";

const HomeStyled = styled.div`
  display: grid;
  grid-template-rows: 5% 5% 10% 1fr;
  grid-template-columns: 1fr;
  padding-left: 10px;
  grid-row-gap: 10px;
`;

const Home = () => {
  return (
    <HomeStyled>
      <Boxes />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>친구</div>
        <div>Q</div>
      </div>
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <div style={{ height: "80%", display: "flex", alignItems: "center" }}>
          <img
            src={img}
            alt=""
            style={{
              borderRadius: "80px",
              height: "100%",
              width: "25%",
              marginRight: "10px",
            }}
          />
          탐정 유명한
        </div>
      </div>
      <Friends />
    </HomeStyled>
  );
};

export default Home;

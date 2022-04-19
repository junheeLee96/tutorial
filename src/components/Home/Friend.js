import React from "react";
import styled from "styled-components";

const FriendStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  cursor: pointer;

  &:hover {
    background: rgb(233, 233, 233);
  }
`;

const Friend = ({ fri }) => {
  return (
    <FriendStyle>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={fri.img}
          alt=""
          style={{
            width: "40%",
            height: "100%",
            borderRadius: "80px",
            marginRight: "10px",
          }}
        />
        <div style={{ whiteSpace: "nowrap" }}>
          {fri.name.length > 10 ? fri.name.substring(0, 10) + "..." : fri.name}
        </div>
      </div>
      <div>
        {fri.messages.length > 10
          ? fri.messages.substring(0, 10) + "..."
          : fri.messages}
      </div>
    </FriendStyle>
  );
};

export default Friend;

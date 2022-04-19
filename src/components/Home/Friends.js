import React from "react";
import img from "../../img/coco.jpg";
import styled from "styled-components";
import Friend from "./Friend";

const FriendsProfile = [
  {
    id: 1,
    name: "코난",
    img: img,
    messages: "범인은 당신이야!",
  },
  {
    id: 2,
    img: img,
    name: "코넌",
    messages: "학교가기 싫다",
  },
  {
    id: 3,
    img: img,
    name: "코나는",
    messages: "미란이 보고싶다...",
  },
  {
    id: 4,
    img: img,
    name: "코너는",
    messages: "유명한 탐정님은 사실 나야!",
  },
];

const FriendsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${(props) => props.len}, 50px);
  grid-row-gap: 10px;
  align-items: center;
`;

const Friends = () => {
  return (
    <FriendsStyle len={FriendsProfile.length}>
      {FriendsProfile.map((fri) => (
        <Friend fri={fri} key={fri.id} />
      ))}
    </FriendsStyle>
  );
};

export default Friends;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = ({ onDecrease }) => {
  const number = useSelector((state) => state.number);
  const onIncrease = () => {
    dispatchEvent({ type: "INCREASE" });
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;

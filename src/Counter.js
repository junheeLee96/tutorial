import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.cnt.number);
  const onIncrease = () => {
    dispatch({ type: "cnt/INCREASE" });
  };
  const onDecrease = () => {
    dispatch({ type: "cnt/DECREASE" });
  };
  console.log(number);
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

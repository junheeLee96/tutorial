import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cont = () => {
  const dispatch = useDispatch();
  const a = useSelector((state) => state.counter.number);

  return (
    <div>
      {a}
      <hr />
      <button
        onClick={() => {
          dispatch({ type: "counter/INCREASE" });
        }}
      >
        증가
      </button>
    </div>
  );
};

export default Cont;

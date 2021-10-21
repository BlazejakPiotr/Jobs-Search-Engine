import React from "react";
import { useDispatch } from "react-redux";

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {value}
      <button
        onClick={() => dispatch({ type: "ADD_JOB_TO_FAVORITE", payload: {} })}
      >
        Counter
      </button>
    </div>
  );
};

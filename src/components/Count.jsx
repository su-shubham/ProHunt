import React, { useState, useEffect } from "react";

function Count() {
  const initialState = () => Number(window.localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialState);

  const addAmount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <button className="" onClick={() => addAmount()}></button>

      <div className="absolute top-25 right-40 border border-gray-200 rounded">
        <div
          className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3"
          onClick={() => addAmount()}
        >
          <svg
            className="m-auto"
            width="12"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
              fill="black"
            />
          </svg>
          <span className="text-f13 font-semibold mt-1 block">
            <p>{count}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Count;

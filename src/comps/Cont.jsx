import React, { useState } from "react";
import "./sass/style.scss";

export default function Cont() {
  const [Curr, setCurr] = useState(0);
  return (
    <div>
      <div>
        <span>current is {Curr}</span>
        <button
          onClick={() => {
            setCurr((e) => e + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

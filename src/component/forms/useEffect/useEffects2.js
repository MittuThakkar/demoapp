import React, { useEffect, useState } from "react";

const UseEffects2 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const actualWidth = () => {
    setWidthCount(window.innerWidth);
    console.log(window.innerWidth);
  };

  useEffect(() => {
    console.log("add");
    window.addEventListener("resize", actualWidth);
    console.log("ushdjsd");
    return () => {
      console.log("removr");
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <div>
      <p>The actual size of window is:</p>
      <h1>{widthCount}</h1>
    </div>
  );
};

export default UseEffects2;

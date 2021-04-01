import React, { useEffect, useState } from "react";

const UseEffects1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    count === 0
      ? (document.title = "Chats")
      : (document.title = `Chts(${count})`);

    console.log("Usseeffecty");
  }, [count]);
  console.log("outside");
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          //   console.log("Clicked..")
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default UseEffects1;

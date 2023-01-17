import React, {  useState } from "react";


const Componenta = () => {
  const [count, setCount] = useState(0);

  if (count>10){
    throw new Error("error occured")
  }
  return (
    <div>
      <center>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Button
        </button>
      </center>
    </div>
  );
};

export default Componenta;

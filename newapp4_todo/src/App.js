import React, { useState } from "react";
import Child from "./Child";
const App = () => {
  const [name, setName] = useState([]);

  const deleteHandeller = (e) => {
    setName(
      name.filter((_, i) => {
        return i !== e.target.value;
      })
    );
  };

  const nameHandeller = (uname) => {
    setName((prevName) => {
      // console.log(prevName);
      return [...prevName, { usernam: uname }];
    });
  };

  return (
    <div>
      <Child setUsername={nameHandeller} />
      <ul>
        {name.map((v, k) => {
          return (
            <li key={k} value={k} onClick={deleteHandeller}>
              {v.usernam}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

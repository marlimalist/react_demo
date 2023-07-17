import React from "react";

import "./App.css";
import Overview from "./Overview";

function OwnEvent() {
  const buttons = [1, 2, 3, 4, 5];

  const clickCounter = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    each: number
  ) => {
    console.log(each);
    console.log(event.type);
  };

  return (
    <>
      {buttons.map((each) => {
        return (
          <button onClick={(event) => clickCounter(event, each)}>
            Click {each}
          </button>
        );
      })}
    </>
  );
}

export function App() {
  return (
    <React.Fragment>
      <Overview></Overview>
    </React.Fragment>
  );
}

export default App;

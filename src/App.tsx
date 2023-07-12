import React from "react";
import { Converter } from "./ExampleConverter";
import { JsxLoop } from "./ExampleLoop";
import { ConditionTernaer } from "./ExampleCondition";
import { CounterComponent } from "./ExampleCounter";
import { Spielwiese } from "./Spielwiese";
import "./App.css";

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
      <OwnEvent></OwnEvent>
      <ConditionTernaer></ConditionTernaer>
      <Converter></Converter>
      <JsxLoop></JsxLoop>
      <CounterComponent></CounterComponent>
      <Spielwiese></Spielwiese>
    </React.Fragment>
  );
}

export default App;

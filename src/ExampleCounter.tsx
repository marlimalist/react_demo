import { Fragment, useState } from "react";

export function CounterComponent() {
  const [count, setCount] = useState(0);
  const content: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    content.push(<Counter></Counter>);
  }

  return (
    <Fragment>
      <p> Anzahl: {count}</p>
      <input
        type="button"
        onClick={() => setCount(count - 1)}
        value="Anzahl --"
      ></input>
      <input
        type="button"
        onClick={() => setCount(count + 1)}
        value="Anzahl ++"
      ></input>
      {content}
    </Fragment>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <Fragment>
      <p>Zähler: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>++</button>
      <button onClick={() => setCounter(counter - 1)}>--</button>
    </Fragment>
  );
}
